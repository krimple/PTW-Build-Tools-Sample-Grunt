module.exports = function(config) {

  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js'
    ],
    port: 8080,
    logLevel: config.LOG_DEBUG,
    browsers: ['Chrome']

  });
};
