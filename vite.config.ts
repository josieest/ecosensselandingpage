
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'react-hook-form@7.55.0': 'react-hook-form',
        'figma:asset/e179407e8ad0e05f68abc4a440cc86c16146e6c6.png': path.resolve(__dirname, './src/assets/e179407e8ad0e05f68abc4a440cc86c16146e6c6.png'),
        'figma:asset/c07184d0dc99cb8893c030c46c977384219ec67c.png': path.resolve(__dirname, './src/assets/c07184d0dc99cb8893c030c46c977384219ec67c.png'),
        'figma:asset/baece3fcb77d42fc969f1226c9b4285f5fe93be7.png': path.resolve(__dirname, './src/assets/baece3fcb77d42fc969f1226c9b4285f5fe93be7.png'),
        'figma:asset/985da475e8f6de52dad10ebf7098c09cf708b5de.png': path.resolve(__dirname, './src/assets/985da475e8f6de52dad10ebf7098c09cf708b5de.png'),
        'figma:asset/8b0802d0b6a39071ba887d5279730203f5255349.png': path.resolve(__dirname, './src/assets/8b0802d0b6a39071ba887d5279730203f5255349.png'),
        'figma:asset/34c1487117905bca8fc0bc2d15ffdf51442897fc.png': path.resolve(__dirname, './src/assets/34c1487117905bca8fc0bc2d15ffdf51442897fc.png'),
        'figma:asset/08c6febabef0a4cdbffb121033a6556c9b7694cb.png': path.resolve(__dirname, './src/assets/08c6febabef0a4cdbffb121033a6556c9b7694cb.png'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });