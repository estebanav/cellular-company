module.exports = function(grunt) {

  // Project configuration.

  var path = require('path');

  var myMin = {};
  var srcpath = 'src/js/app';
  var destpath = 'build/js/app';

  // Build config "min" object dynamically.
  grunt.file.expand({cwd: srcpath}, '**/*.js').forEach(function(relpath) {
    // Create a target Using the verbose "target: {src: src, dest: dest}" format.
    myMin[relpath] = {
      src: path.join(srcpath, relpath),
      dest: path.join(destpath, relpath)
    };
    // The more compact "dest: src" format would work as well.
    // min[path.join(destpath, relpath)] = path.join(srcpath, relpath);
  });

myMin.common = {
  src: [
   'src/js/lib/bootstrap.js',
    'src/js/lib/underscore-min.js',
    'src/js/knockout-2.2.0.js',
    'src/js/require.min.js',
    'src/js/lib/spinejs/spine.js',
    'src/js/lib/spinejs/manager.js'

  ],
  dest:'build/js/common.js'
};


  grunt.initConfig({
    /* js linting */
    lint: {
      all: [
      'grunt.js', 
      'src/js/app/*.js'
      ]
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
        node: true,
        strict: false,
        jquery:true
      }
    },
    // concat:{
    //   common : {
    //     src: [
    //       'src/js/lib/bootstrap.js',
    //       'src/js/lib/underscore-min.js',
    //       'src/js/knockout-2.2.0.js'
    //       // ,
    //       // 'src/js/lib/require.min.js',
    //       // 'src/js/lib/spinejs/spine.js.js',
    //       // 'src/js/lib/spinejs/manager.js'

    //     ],
    //     dest:'build/js/common.js'
    //   }
    // },
    /* Less */

    recess: {
      dist: {
          src: [
              'src/css/less/app.less'
          ],
          dest: 'build/css/app.css',
          options: {
              compile: true,
              compress: true
          }
      }
    },
    min: myMin,
    watch: {
      scripts: {
        files: ['<config:lint.all>'],
        tasks: ['default.lint','default.js.uglify']
      },
      stylesheets: {
        files: ['src/css/less/*.less'],
        tasks: 'default.recess'
      }
    }
  });

  
  grunt.loadNpmTasks('grunt-recess');
  grunt.registerTask('default.lint', 'lint');
  grunt.registerTask('default.concat', 'concat');
  grunt.registerTask('default.js.uglify', 'min');
  grunt.registerTask('default.recess', 'recess');
  
  grunt.task.run('min');

};