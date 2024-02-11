const gulp= require('gulp');
const sass= require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function compilaCss(){
    return gulp.src('./source/styles/*.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./dist/styles'));
}
function imageCompressor(){
    return gulp.src('./source/images/* ')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default= gulp.parallel(compilaCss,imageCompressor);
exports.watch= function(){
    gulp.watch('./source/styles/*.scss', gulp.parallel(compilaCss) )
}