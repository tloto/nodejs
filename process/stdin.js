process.stdin.resume();
process.stdin.on("data", function(data) {

  process.stdout.write('hello : '+data.toString());

});
