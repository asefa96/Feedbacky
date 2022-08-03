import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import summary from "rollup-plugin-summary";
import json from "@rollup/plugin-json";

const packageJson = require("./package.json");
const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default [
  {
    input: "src/index.ts",

    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        jsnext: true, // Default: false
        main: true, // Default: true
        browser: true, // Default: false
        extensions,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      json(),
      commonjs(),
      terser(),
      summary(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
