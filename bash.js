//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    if (data === 'pwd'){
    console.log(process.cwd()); //remove the newline
    }
    else {
        console.log("bad command")
    }

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
});



// "console.log(process.cwd()"