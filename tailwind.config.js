/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            footerColor: '#0d0c22', 
          },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       "./index.html",
//       "./src//*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {
//         colors: {
//           footerColor: '#0d0c22', 
//         },
//       },
//     },
//     plugins: [],
//   }