module.exports = function(grunt) {
	require('jit-grunt') (grunt);
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					"./css/style.css": "./sass/main.scss"
				}
			}
		},
		watch: {
			sass: {
				files: ['./sass/*.scss'],
				tasks: ['sass']
			},
			php: {
				files: ['./*.php']
			},
			html: {
				files: ['./*.html']
			},
			javascript: {
				files: ['./js/app.js']
			},
			options: {
				livereload: true,
			}
		},
	});

		grunt.registerTask("live-reload", ['watch']);
}
	

