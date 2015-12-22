module.exports = {

    dev: {
        options: {
            server: {
                baseDir: "<%= vars.sourcePath %>"
            },
            watchTask: true
        },
        src: [
            "<%= vars.buildCSS %>",
            "<%= vars.sourcePath %>/**/*.html"
        ]
    }
};
