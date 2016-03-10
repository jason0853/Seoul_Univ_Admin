module.exports = function(grunt) {
 	// Project configuration
 	grunt.initConfig({
 		pkg: grunt.file.readJSON('package.json'),

 		// Run server
		connect: {
			server: {
				options: {
					port: 9001,
					base: '',
					open: true,
					livereload: true
				}
			}
		},

		// Fix jsx code and run again automatically 
		watch: {
			react: {
		        		files: 'js/*.js',
		        		options: {
			      		livereload: true
			    	}
		      }
		}
 	});

 	// loadNpmTasks
 	grunt.loadNpmTasks('grunt-contrib-connect');
 	grunt.loadNpmTasks('grunt-contrib-watch');
 	
 	// registerTasks
 	grunt.registerTask('default', 	['connect', 'watch']);
 };