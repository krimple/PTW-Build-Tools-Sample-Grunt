module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      src: ['app/**/*.js', 'Gruntfile.js'],
      options: {
        ignores: ['app/bower_components/**/*.js']
      },
      test: ["test/**/*.js"]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    connect: {
       server: {
         options: {
           port: 3000,
           // Change this to '0.0.0.0' to access the server from outside.
           hostname: 'localhost',
           base: 'app',
           keepalive: true
        },
      }
    }
  });

  grunt.registerTask('serve', [
     'jshint',
     'connect:server'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'karma'
  ]);

};
