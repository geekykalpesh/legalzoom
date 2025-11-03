import { useEffect, useRef, FC } from 'react';
import * as THREE from 'three';
import { BloomEffect, EffectComposer, EffectPass, RenderPass, SMAAEffect, SMAAPreset } from 'postprocessing';

interface Colors {
  roadColor: number;
  islandColor: number;
  background: number;
  shoulderLines: number;
  brokenLines: number;
  leftCars: number[];
  rightCars: number[];
  sticks: number;
}

interface HyperspeedOptions {
  onSpeedUp?: (ev: MouseEvent | TouchEvent) => void;
  onSlowDown?: (ev: MouseEvent | TouchEvent) => void;
  distortion?: string;
  length: number;
  roadWidth: number;
  islandWidth: number;
  lanesPerRoad: number;
  fov: number;
  fovSpeedUp: number;
  speedUp: number;
  carLightsFade: number;
  totalSideLightSticks: number;
  lightPairsPerRoadWay: number;
  shoulderLinesWidthPercentage: number;
  brokenLinesWidthPercentage: number;
  brokenLinesLengthPercentage: number;
  lightStickWidth: [number, number];
  lightStickHeight: [number, number];
  movingAwaySpeed: [number, number];
  movingCloserSpeed: [number, number];
  carLightsLength: [number, number];
  carLightsRadius: [number, number];
  carWidthPercentage: [number, number];
  carShiftX: [number, number];
  carFloorSeparation: [number, number];
  colors: Colors;
}

interface HyperspeedProps {
  effectOptions?: Partial<HyperspeedOptions>;
}

const defaultOptions: HyperspeedOptions = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xffffff,
    brokenLines: 0xffffff,
    leftCars: [0xea6a61, 0xea6a61, 0xea6a61],
    rightCars: [0xea6a61, 0xea6a61, 0xea6a61],
    sticks: 0xea6a61
  }
};

class App {
  container: HTMLElement;
  options: HyperspeedOptions;
  renderer: THREE.WebGLRenderer;
  composer: EffectComposer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  clock: THREE.Clock;
  disposed: boolean;

  constructor(container: HTMLElement, options: HyperspeedOptions) {
    this.options = options;
    this.container = container;
    this.disposed = false;

    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true
    });
    this.renderer.setSize(container.offsetWidth, container.offsetHeight, false);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.composer = new EffectComposer(this.renderer);
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(options.fov, container.offsetWidth / container.offsetHeight, 0.1, 10000);
    this.camera.position.set(0, 8, -5);

    this.scene = new THREE.Scene();
    this.scene.background = null;

    const fog = new THREE.Fog(options.colors.background, options.length * 0.2, options.length * 500);
    this.scene.fog = fog;

    this.clock = new THREE.Clock();

    this.tick = this.tick.bind(this);
    this.init = this.init.bind(this);

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  onWindowResize() {
    const width = this.container.offsetWidth;
    const height = this.container.offsetHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.composer.setSize(width, height);
  }

  initPasses() {
    const renderPass = new RenderPass(this.scene, this.camera);
    const bloomPass = new EffectPass(
      this.camera,
      new BloomEffect({
        luminanceThreshold: 0.2,
        luminanceSmoothing: 0,
        resolutionScale: 1
      })
    );

    const smaaPass = new EffectPass(
      this.camera,
      new SMAAEffect({
        preset: SMAAPreset.MEDIUM
      })
    );

    renderPass.renderToScreen = false;
    bloomPass.renderToScreen = false;
    smaaPass.renderToScreen = true;

    this.composer.addPass(renderPass);
    this.composer.addPass(bloomPass);
    this.composer.addPass(smaaPass);
  }

  createRoad() {
    const geometry = new THREE.PlaneGeometry(this.options.roadWidth * 2, this.options.length, 20, 100);
    const material = new THREE.MeshBasicMaterial({ 
      color: this.options.colors.roadColor,
      transparent: true,
      opacity: 0.8
    });
    
    const road = new THREE.Mesh(geometry, material);
    road.rotation.x = -Math.PI / 2;
    road.position.z = -this.options.length / 2;
    this.scene.add(road);

    // Add some simple car lights
    for (let i = 0; i < 20; i++) {
      const lightGeometry = new THREE.SphereGeometry(0.2, 8, 8);
      const lightMaterial = new THREE.MeshBasicMaterial({ 
        color: this.options.colors.leftCars[0],
        transparent: true,
        opacity: 0.8
      });
      
      const light = new THREE.Mesh(lightGeometry, lightMaterial);
      light.position.set(
        (Math.random() - 0.5) * this.options.roadWidth,
        0.5,
        -Math.random() * this.options.length
      );
      this.scene.add(light);
    }
  }

  init() {
    this.initPasses();
    this.createRoad();
    this.tick();
  }

  render(delta: number) {
    this.composer.render(delta);
  }

  dispose() {
    this.disposed = true;

    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.composer) {
      this.composer.dispose();
    }
    if (this.scene) {
      this.scene.clear();
    }

    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }

  tick() {
    if (this.disposed) return;
    
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    
    if (needResize) {
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.composer.setSize(width, height, false);
    }

    const delta = this.clock.getDelta();
    this.render(delta);
    requestAnimationFrame(this.tick);
  }
}

const Hyperspeed: FC<HyperspeedProps> = ({ effectOptions = {} }) => {
  const mergedOptions: HyperspeedOptions = {
    ...defaultOptions,
    ...effectOptions
  };
  const hyperspeed = useRef<HTMLDivElement>(null);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    if (appRef.current) {
      appRef.current.dispose();
    }

    const container = hyperspeed.current;
    if (!container) return;

    const myApp = new App(container, mergedOptions);
    appRef.current = myApp;
    myApp.init();

    return () => {
      if (appRef.current) {
        appRef.current.dispose();
      }
    };
  }, []);

  return <div className="w-full h-full" ref={hyperspeed}></div>;
};

export default Hyperspeed;