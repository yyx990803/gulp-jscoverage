var jsc    = require('../'),
    fs     = require('fs'),
    File   = require('vinyl'),
    should = require('should')

describe('gulp-jscoverage', function () {
    describe('jsc()', function () {
        
        it('should instrument the passed in file', function (done) {
            testStream(jsc(), [
                function (file) {
                    var content = file.contents.toString()
                    eval(content)
                    should.exist(global._$jscoverage)
                    global._$jscoverage.should.have.property('./test/fixture/src.js')
                }
            ], done)
        })

    })
})

function testStream (stream, assertions, done) {
    var fileCount = 0
    stream.on('data', function (file) {
        should.exist(file)
        should.exist(file.path)
        should.exist(file.relative)
        should.exist(file.contents)
        assertions[fileCount].call(null, file)
        fileCount++
    })
    stream.once('end', function () {
        fileCount.should.equal(assertions.length)
        done()
    })
    stream.write(new File({
        path: './test/fixture/src.js',
        cwd: './test/',
        base: './test/fixture/',
        contents: fs.readFileSync('./test/fixture/src.js')
    }))
    stream.end()
}