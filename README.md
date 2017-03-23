# build-with-gulp
You can automate the commands given to a node project with gulp

I am currently working with a web application using Sails. I had 2 servers, I had to open three terminals and type commands like npm install, nodemon app, grunt run, etc. And in future, as servers increase, the manual labor of typing commands in each terminal will also increase.

So I decided to automate this process using <a href='http://gulpjs.com/'>gulp</a>. Gulp is a cool tool to automate tasks.

I put all the commands thats needs to be run in <b><i>package.json</i></b> file of my project. I put them under a key, named <b>ballet</b>(its a random name). I created two keys under it, namely, <b>build</b> and <b>run</b>(these can be user defined). Their value is an array containing all the commands.
There is also a project key, which is the name of project(s) one wants to build.

To run gulp file, I need to give 2 arguments, the project name and the command type, i.e., build or run<br>
$ <b>gulp --type build --project engage</b></br>
$ <b>gulp --type run --project engage</b>

The terminal will check all files and folders of the current directory to look for package.json, and wherever it finds the key, <b>ballet</b>, and project name, <b>engage</b>, it will invoke commands under build or run, as given by user.




