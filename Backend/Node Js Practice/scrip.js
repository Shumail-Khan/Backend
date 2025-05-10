const fs = require('fs');

// fs.writeFile("File1.txt", 'My name is Khan', function(err){
//     if(err) console.error(err);
//     else console.log("No Error");
// });

// fs.appendFile("File1.txt", 'I am a Student of Computer Science.', (err)=>{
//     if(err) console.error(err);
//     else console.log("No Error");    
// });

// fs.rename('File1.txt', "File.txt", (err)=>{
//     if(err) console.error(err)
//     else console.log("No Error")
// });

// fs.copyFile("File.txt", "./Copy/Copy.txt", (err)=>{
//     if(err) console.error(err.message)
//     else console.log("No Error")
// });

//Remove File
// fs.unlink('./Copy/Copy.txt', (err)=>{
//     if(err) console.log(err.message);
//     else console.log("Done");
// });


// fs.mkdir('Copy2', (err)=>{
//     if(err) console.log(err.message);
//     else console.log("Folder Created");    
// });

// fs.copyFile("File.txt", "./Copy2/Copy.txt", (err)=>{
//     if(err) console.error(err.message)
//     else console.log("No Error")
// });

//Remove Blank Directory
// fs.rmdir("Copy", (err)=>{
//     if(err) console.error(err.message);
//     else console.log("Done")
// })
//Can't Remove Non-Blank Directory
// fs.rmdir("Copy2", (err)=>{
//     if(err) console.error(err.message);
//     else console.log("Done")
// })

// HTTP
const http = require('http');
const server = http.createServer((req, res)=>{
    res.end("Hello World!");
});
server.listen(3000);