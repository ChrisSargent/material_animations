module.exports = {

    options: {
        style: "expanded",
        sourcemap: "auto",
        loadPath: "bower_components"
    },

    dev: {
        expand: true,
        cwd: "<%= vars.sassPath %>",
        src: "*.sass",
        dest: "<%= vars.buildCSS %>",
        ext: ".css"
    }
};
