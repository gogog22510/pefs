module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
				livereload: true
			},
			frontend: {
				files: ['public/**/*.css', 'public/**/*.js', 'views/**/*.jade']
			},
			backend: {
				files: ['routes/*.js', 'app.js'], // sever script to be watched
				tasks: ['start'], // restart server
				options: {
					spawn: true // must have for reload
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('start', function() {
		grunt.util.spawn({
			cmd: 'node',
			args: ['./bin/www']
		});
	});
	grunt.registerTask('default', ['start', 'watch']);
}