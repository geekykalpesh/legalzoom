declare namespace JSX {
  interface IntrinsicElements {
    'lord-icon': {
      src?: string;
      trigger?: string;
      colors?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
      ref?: React.Ref<any>;
      'data-card'?: string;
    };
  }
}

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export {};