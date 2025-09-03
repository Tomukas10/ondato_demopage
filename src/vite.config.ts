import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  const configuration: UserConfig = {
    envDir: 'env',
    envPrefix: 'APP_',
    plugins: [
      react(),
      viteTsConfigPaths({
        root: '../../../../',
      }),
    ],
    build: {
      target: 'esnext',
      sourcemap: true,
    },
    server: {
      strictPort: true,
      port: 4018,
      open: true,
      host: true,
    },
  };

  return configuration;
});
