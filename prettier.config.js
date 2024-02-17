/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tv'],
};

export default config;
