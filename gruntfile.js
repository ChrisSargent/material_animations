// Gruntfile.js
module.exports = function(grunt) {

    require('load-grunt-config')(grunt);

    grunt.registerTask('dev', ['sass:dev', 'browserSync:dev', 'watch:dev']);
    grunt.registerTask('dev_ap', ['sass:dev', 'cssnext:dev', 'browserSync:dev', 'watch:dev_ap']);
};
