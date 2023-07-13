/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: false,

  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
}
