module.exports = function(grunt) {
 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),

   // PLUGINS CONFIG
   webfont: {
    icons: {
        src: 'raw_svg/*.svg',
        dest: 'build/fonts',
        options: {
            font : "knx-uf-icons"
        }
    }
   }
 });


// Load the plugin that provides the “uglify” task.
grunt.loadNpmTasks('grunt-webfont');

// Default task(s).
// grunt.registerTask('default', ['taskname']);

};
