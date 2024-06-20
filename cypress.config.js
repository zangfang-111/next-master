import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.e2e.js',
    viewportWidth: 1280,
    viewportHeight: 970,
    videoUploadOnPasses: false,
    video: false,
    retries: 2,
  },
});
