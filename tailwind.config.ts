// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{ts,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//         colors: {
//             accent: "#0989FF",
//             topheadingPrimary: "#010f1c",
//             topHeadingSecondary: "#021d35",
//             pink: "#FD4B6B",
//         },
//         container:{
//             center: true,
//             padding: "15px",
//         },
//     },
//   },
//   plugins: [],
// } satisfies Config;

import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            accent: "#0989FF",
            topheadingPrimary: "#010f1c",
            topHeadingSecondary: "#021d35",
            pink: "#FD4B6B",
        },
        container:{
            center: true,
            padding: "15px",
        },
    },
  },
  plugins: [],
});
