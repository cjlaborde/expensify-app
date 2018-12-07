module.exports = function () {
    const presets = ["env", "react"]
    const plugins = ["transform-class-properties", "transform-object-rest-spread"]
    return {
        presets,
        plugins
    }
}