# gulp-jscoverage [![NPM version](https://badge.fury.io/js/gulp-jscoverage.png)](http://badge.fury.io/js/gulp-jscoverage) [![Build Status](https://travis-ci.org/yyx990803/gulp-jscoverage.png?branch=master)](https://travis-ci.org/yyx990803/gulp-jscoverage)
> JSCoverage instrumentation plugin for gulp

## Usage

``` js
var gulp = require('gulp'),
	jsc  = require('gulp-coverage)

gulp.task('jsc', function () {
	gulp.src('./src.js')
		.pipe(jsc())
		.pipe(gulp.dest('./')) // default file name: src-cov.js})
```

## API

### jsc([name])

- name: the output file name.

## License

MIT