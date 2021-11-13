const CracoBabelLoader = require("craco-babel-loader")
const path = require("path")

function babelLoader() {
    return {
        plugin: CracoBabelLoader,
        options: {
            includes: [path.join(__dirname, "../components"), path.join(__dirname, "../backend")],
        },
    }
}

module.exports = {
    plugins: [babelLoader()],
    babelLoader,
}
