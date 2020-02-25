/* Set Default */
process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.PLATFORM = process.env.PLATFORM || "web";
/* Flags */
const dev = process.env.NODE_ENV === "development";
const test = process.env.NODE_ENV === "test";
const prod = process.env.NODE_ENV === "production";
const node = process.env.PLATFORM === "node";
module.exports = api => {
  api.cache(true);
  return {
    presets: [
      [
        {
          modules: node ? "cjs" : false,
          targets: node
            ? { node: "current" }
            : ["> 1%", "last 2 versions", "not ie <= 8"],
          useBuiltIns: "usage",
          corejs: { version: 3, proposals: true }
        }
      ],
      "@babel/preset-react",
      "@emotion/babel-preset-css-prop"
    ],
    plugins: [
      ["@babel/plugin-proposal-optional-chaining", { loose: false }],
      "react-require",
      "react-loadable/babel",
      node ? "dynamic-import-node" : "@babel/plugin-syntax-dynamic-import",
      (dev || test) && "@babel/plugin-transform-react-jsx-source",
      (prod || node) && "transform-react-remove-prop-types"
    ].filter(Boolean)
  };
};
