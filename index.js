function Parser() {
    const spawn = require("child_process").spawn;
    const parser = spawn('python3',["parser.py"]);

    parser.stdout.on('data', function(data) {
        console.log(data.toString());
    });
    // Hello();
}
function Hello() {
    var module = require("./hello.js");
    module.hello();
}
Parser();
Hello();

