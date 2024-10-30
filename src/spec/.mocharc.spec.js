module.exports = {
  file: "src/spec/setup.spec.ts",
  require: ["@swc-node/register", "src/spec/testEnv.ts"],
  spec: ["src/**/*.spec.ts"],
  "watch-files": ["src/**/*.ts"],
};
