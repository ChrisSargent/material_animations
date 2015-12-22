module.exports = {

    dev: {
        files: ["<%= vars.sassPath %>/**/*.sass"],
        tasks: ["sass:dev"]
    },

    dev_ap: {
        files: ["<%= vars.sassPath %>/**/*.sass"],
        tasks: ["sass:dev", "cssnext:dev"]
    }
};
