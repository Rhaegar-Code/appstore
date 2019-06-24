const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer'); 

gulp.task('sass', () =>{
    gulp.src('scss/app.scss')
        .pipe(autoprefixer({
            overrideBrowserlist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('css'));
})

gulp.task('watch', ['sass'],()=>{
    gulp.watch(['scss/*.scss'], ['sass']);
});

gulp.task('font-awesome',()=>{
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('css'))
});

gulp.task('fonts',()=>{
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('fonts'))
})