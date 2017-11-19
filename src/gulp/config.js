development = '/usr/src';
production = '/usr/src/build';

module.exports = {
	optimize: {
		css: {
			src: development + '/css/*.css',
			dest: production + '/css/',
			options: {}
		},
		js: {
			src: development + '/js/*.js',
			dest: production + '/js/',
			options: {}
		},
		images: {
			src: development + '/img/*',
			dest: production + '/img/',
			options: {
				optimizationLevel: 3,
				progessive: true,
				interlaced: true
			}
		},
		html: {
			src: development + '/*.html',
			dest: production,
			options: {
				collapseWhitespace: true
			}
		}
	}
};