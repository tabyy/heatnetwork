import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import resove from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default [{
    input: "src/module_heatnetwork/main.js",
    output: {
        file: "dist/bundle.js",
        format: "umd",
        name: 'roll'
    },
    plugins: [
    	json(),
        resove(),
        commonjs(),
        babel(),
    ],
    // external: ['lodash']
}]