/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'app/javascript/backbone/**']
    },
    snockets: {
      dev: {
        src: 'app/javascript/all.js',
        dest: 'public/javascript/all',
        combine: true,
        minfiy: false
      }
    },
    less: {
      dev: {
        paths: ['app/stylesheets'],
        src: 'app/stylesheets/all.less',
        dest: 'public/stylesheets/all',
        combine: true,
        minfiy: false
      }
    },
    watch: {
      files: ['app/javascript/backbone/**', 'app/stylesheet/**'],
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
        browser: true
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
