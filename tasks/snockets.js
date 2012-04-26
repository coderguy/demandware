var Snockets = require('snockets');

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('snockets', 'Combine files with snockets', function() {
    var snockets = new Snockets();

    if(this.data.combine) {
      var combined_data = snockets.getConcatenation(this.file.src, {async: false, minify: false}),
        combined_path = this.file.dest.replace('.js','.combined.js');
      grunt.file.write(combined_path, combined_data);

      // Fail task if errors were logged.
      if (this.errorCount) { return false; }

      grunt.log.writeln('File "' + combined_path + '" created.');
    }

    if(this.data.minify) {
      var minified_data = snockets.getConcatenation(this.file.src, {async: false, minify: true}),
        minified_path = this.file.dest.replace('.js','.min.js');
        
      grunt.file.write(minified_path, minified_data);

      // Fail task if errors were logged.
      if (this.errorCount) { return false; }

      grunt.log.writeln('File "' + minified_path + '" created.');
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