// import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// import { defineConfig, loadEnv } from 'vite'
// // // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react(), tsconfigPaths()],
// // });

// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const port = loadEnv(mode, process.cwd(), '')
//   return {
//     // vite config
//     define: {
//       __PORT__: env.PORT
//     }
//   }
// })
 

import { defineConfig, loadEnv } from 'vite';


export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
    // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

    return defineConfig({
        plugins: [react(), tsconfigPaths()],

        server: {
            port: /// 
        },
    });
}