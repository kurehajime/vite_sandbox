import { createHtmlPlugin } from 'vite-plugin-html'
const date = require("date-utils");
const timestamp = new Date().toFormat("YYYYMMDDHH24MI");
export default {
    base: "./",
    build:{
        outDir:"docs",
        assetsDir:"./"
    },
    plugins: [
        createHtmlPlugin({
        pages: [
            {
                filename: 'index.html',
                template: 'index.html',
                injectOptions: {
                  data: {
                    TIMESTAMP: timestamp,
                  },
                },
            }
        ],
        }),
      ],
  }