import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tongxulishi.app',
  appName: '通序历史',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
