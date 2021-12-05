/// <binding BeforeBuild='clean' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var gulp = require("gulp");
var del = require("del");
var paths = {
    scripts: ["scripts/**/*.js", "scripts/**/*.ts", "scripts/**/*.map"],
    litHtml: [
        "node_modules/lit-html/**/*.js",
        "node_modules/lit-html/**/*.ts",
        "node_modules/lit-html/**/*.map"],
    litElement:[
        "node_modules/lit-element/**/*.js",
        "node_modules/lit-element/**/*.ts",
        "node_modules/lit-element/**/*.map"
    ]
};
gulp.task("clean", function () {
    return del(["wwwroot/scripts/**/*", "wwwroot/node_modules/**/*"]);
});
gulp.task("default", function (done) {
    gulp.src(paths.scripts).pipe(gulp.dest("wwwroot/scripts"));
    gulp.src(paths.litHtml).pipe(gulp.dest("wwwroot/node_modules/lit-html"));
    gulp.src(paths.litElement).pipe(gulp.dest("wwwroot/node_modules/lit-element"));
    done();
});