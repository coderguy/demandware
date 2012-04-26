var less = require("less");

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('less', 'Combine less file', function() {
    var done = this.async(),
      self = this,
      less_data = grunt.file.read(this.file.src),
      combined_path = self.file.dest.replace(".css",".combined.css"),
      minified_path = self.file.dest.replace(".css",".min.css"),
      parser = new less.Parser({
        paths: this.data.paths,
        filename: this.file.src
      });
    try {
      parser.parse(less_data, function (e, tree) {
        var combined_data = tree.toCSS();
        grunt.file.write(combined_path, combined_data);
        
        // Fail task if errors were logged.
        if (self.errorCount) { return false; }

        grunt.log.writeln('File "' + combined_path + '" created.');

        if(self.data.minify) {
          var minified_data = tree.toCSS({ compress: true });
          grunt.file.write(minified_path, minified_data);
          
          // Fail task if errors were logged.
          if (self.errorCount) { return false; }

          grunt.log.writeln('File "' + minified_path + '" created.');
        }

        done();
      });
    } catch (e) {
      console.log(e);
      grunt.log.writeln('Less failed: ' + e);
      done(false);
    }
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  // Concat source files and/or directives.
  grunt.registerHelper('less', function(files, options) {
    options = grunt.utils._.defaults(options || {}, {
      separator: grunt.utils.linefeed
    });
    return files ? files.map(function(filepath) {
      return grunt.task.directive(filepath, grunt.file.read);
    }).join(grunt.utils.normalizelf(options.separator)) : '';
  });

};