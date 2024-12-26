declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: {
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export {}; 