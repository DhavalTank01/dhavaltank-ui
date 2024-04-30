
import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import styles from 'rollup-plugin-styles';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name: "dhavaltank-ui",
    },
    external: ["react", "react-dom"],
    plugins: [
        typescript({ tsconfig: "tsconfig.json" }),
        styles({
            mode: 'inject'
        }),
        json(),
        commonjs({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
    ],
});