var dust = require('dustjs-linkedin'),
  findit = require('findit');

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('dust', 'Prerender and combine dust files', function() {
    var files = findit.sync(this.data.src),
      compiled_data = '',
      current_file = '',
      current_data = '',
      template_name = '',
      i = 0;
    for(i = 0; i < files.length; i += 1) {
      current_file = files[i];
      if(current_file.match('.html')) {
        current_data = grunt.file.read(current_file);
        template_name = current_file.replace(this.data.src+'/','').replace('.html','').replace('\/','_');
        try {
          compiled_data += dust.compile(current_data,template_name);
        } catch (e) {
          console.log('Dust error in: ' + current_file, e.toString());
          return false;
        }
      }
    }
    grunt.file.write(this.data.dest,compiled_data);

    // Fail task if errors were logged.
    if (this.errorCount) { return false; }

    grunt.log.writeln('File "' + this.data.dest + '" created.');    
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  // Concat source files and/or directives.
  grunt.registerHelper('dust', function(files, options) {
    options = grunt.utils._.defaults(options || {}, {
      separator: grunt.utils.linefeed
    });
    return files ? files.map(function(filepath) {
      return grunt.task.directive(filepath, grunt.file.read);
    }).join(grunt.utils.normalizelf(options.separator)) : '';
  });

};