var less = require("less");

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('less', 'Combine less file', function() {
    var done = this.async(),
      self = this,
      lessCss = grunt.file.read(this.file.src),
      parser = new less.Parser({
        paths: this.data.paths,
        filename: this.file.src
      });
    try {
      parser.parse(lessCss, function (e, tree) {
        var css = tree.toCSS();
        grunt.file.write(self.file.dest + ".combined.css", css);

        // Fail task if errors were logged.
        if (self.errorCount) { return false; }

        grunt.log.writeln('File "' + self.file.dest + ".combined.css" + '" created.');
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