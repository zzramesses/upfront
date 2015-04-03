module.exports = function (grunt) {
	'use strict';

	// load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns 
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

    	sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'assets/css/style.css': 'assets/sass/style.scss'
	            }
	        }
	    },
	    hologram: {
			generate: {
				options: {
					config: 'hologram_config.yml'
				}
			}
		},

    });

    grunt.registerTask( 'default', ['sass'] );

}