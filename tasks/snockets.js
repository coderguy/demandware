var Snockets = require('snockets');

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('snockets', 'Combine files with snockets', function() {
    var snockets = new Snockets();

    if(this.data.combine) {
      var combined = snockets.getConcatenation(this.file.src, {
        async: false,
        minify: false
      });
      grunt.file.write(this.file.dest + ".combined.js", combined);

      // Fail task if errors were logged.
      if (this.errorCount) { return false; }

      grunt.log.writeln('File "' + this.file.dest + ".combined.js" + '" created.');
    }

    if(this.data.minify) {
      var minified = snockets.getConcatenation(this.file.src, {
        async: false,
        minify: true
      });
      grunt.file.write(this.file.dest + ".min.js", minified);

      // Fail task if errors were logged.
      if (this.errorCount) { return false; }

      grunt.log.writeln('File "' + this.file.dest + ".min.js" + '" created.');
    }
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  // Concat source files and/or directives.
  grunt.registerHelper('snockets', function(files, options) {
    options = grunt.utils._.defaults(options || {}, {
      separator: grunt.utils.linefeed
    });
    return files ? files.map(function(filepath) {
      return grunt.task.directive(filepath, grunt.file.read);
    }).join(grunt.utils.normalizelf(options.separator)) : '';
  });

};