//gulp plugins
var gulp = require('gulp');
var argv = require('yargs').argv;  // for giving command line args
var exec = require('execa');       
var nodemon = require('nodemon');
var grunt = require('grunt');     
var Finder = require('fs-finder'); // finds all files and folders with a given file

gulp.task('default', function(cb) {
    var projectName = argv.project;
    var files = Finder.from('./').exclude(['.git', 'node_modules']).findFiles('package.json', function(files) {
        for (var index = 0; index < files.length; index++) {
            fs = require('fs')
            pjson = JSON.parse(fs.readFileSync(files[index], 'utf8'))

            if (pjson.ballet && (pjson.ballet.project === projectName)) {
                if (argv.type === 'build') {
                    var changeDirec = '';
                    for (var i = 0; i < pjson.ballet.build.length; i++) {
                        changeDirec = 'cd ' + files[index].substring(0, files[index].lastIndexOf('/')) + ' ';
                        console.log(pjson.ballet.build[i]);
                        exec.shell(changeDirec + pjson.ballet.build[i]).stdout.pipe(process.stdout);
                    }

                } else if (argv.type === 'run') {
                    var changeDirec = '';
                    for (var i = 0; i < pjson.ballet.run.length; i++) {
                        changeDirec = 'cd ' + files[index].substring(0, files[index].lastIndexOf('/')) + ' ';
                        console.log(changeDirec);
                        console.log(pjson.ballet.run[i]);
                        exec.shell(changeDirec + '\n' + pjson.ballet.run[i] + '\n').stdout.pipe(process.stdout);
                    }
                } else
                    console.log('no match');
            }
        }
    });
});
