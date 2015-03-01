module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jslint: {
			client: {
				src: [
					'js/*.js'
				],
				directives: {
					predef:[
						'$'
					],
					browser: true,
					white: true,
					sloppy: true,
					devel: true,
					vars: true,
					regexp: true,
					plusplus: true,
					forin: true,
					nomen: true,
					sub: true
				}
			}
		},
		watch: {
			js: {
				files: ['js/*'],
				tasks: ['jslint']
			}
		}
	});

	grunt.loadNpmTasks('grunt-jslint');
	// grunt.loadNpmTasks('grunt-notify');
	// grunt.loadNpmTasks('grunt-contrib-requirejs');
	// grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// manually generate your manifest file by running: grunt manifest
	// grunt.loadTasks('mkManifest');

	grunt.registerTask('default', ['watch']);
};