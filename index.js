var map = require('map-stream'),
    jsc = require('jscoverage')

module.exports = function (name) {
    return map(function (file, cb) {
        var content = file.contents.toString(),
            processed = jsc.process(file.path, content)
        name = name || file.relative.replace(/(\.\w+)$/, '-cov$1')
        file.path = file.base + name
        file.contents = new Buffer(processed)
        cb(null, file)
    })
}