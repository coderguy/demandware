/*global module:false*/
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'app/javascript/*.js', 'app/javascript/backbone/**']
    },
    snockets: {
      dev: {
        src: 'app/javascript/all.js',
        dest: 'public/javascript/all.js',
        combine: true,
        minify: false
      }
    },
    less: {
      dev: {
        paths: ['app/stylesheets'],
        src: 'app/stylesheets/all.less',
        dest: 'public/stylesheets/all.css',
        minify: false
      }
    },
    watch: {
      files: ['app/javascript/*.js', 'app/javascript/backbone/**', 'app/stylesheets/**'],
      tasks: 'snockets lint less snockets'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        indent: 2,
        white: true //jslint whitespace rules
      },
      globals: {
        jQuery: true,
        Backbone: true,
        '_': true
      }
    },
    uglify: {}
  });

  // Load local tasks.
  grunt.loadTasks("tasks");

  // Default task.
  grunt.registerTask('default', 'lint snockets less');

};
