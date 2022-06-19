/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwindcssを使用するhtmlとjavascriptのディレクトリをcontentに入れること。
  content: ["./client/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'header': '40px',
        'main': 'calc(100vh - 40px)',
      },
      width: {
        'side': '8rem',
        'main': 'calc(100vw - 8rem)',
      },
    },
  },
  plugins: [],
}
