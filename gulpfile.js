//なぜかgulpファイルをインストールできない
//bootstrapに依存していると怒られる

// 必要なプラグインを読み込む
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task("default", function () {
    // scssフォルダを監視し、変更があったらコンパイルする
    gulp.watch('src/scss/*.scss', function() {
        gulp.src('src/scss/bootstrap.scss')
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(gulp.dest('css/'));
    });
});
// // style.scssの監視タスクを作成する
// gulp.task("scss", function() {
//     // ★ style.scssファイルを監視
//     return gulp.watch("src/scss/*.scss", function() {
//       // style.scssの更新があった場合の処理
//       // style.scssファイルを取得
//       return (
//         gulp
//           .src("src/scss/*.scss")
//           // Sassのコンパイルを実行
//           .pipe(
//             sass({
//               outputStyle: "expanded"
//             })
//               // Sassのコンパイルエラーを表示
//               // (これがないと自動的に止まってしまう)
//               .on("error", sass.logError)
//           )
//           // cssフォルダー以下に保存
//           .pipe(gulp.dest("css"))
//       );
//     });
//   });
