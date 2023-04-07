const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request', (req, res) => {

    // NOrmal way to get o/p without streaming


    // fs.readFile('test.txt', (err, data) => {
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // });


    // Streaming data..

    const rstream = fs.createReadStream("test.txt");
    rstream.on('data', (chunkdata) => {
        res.write(chunkdata);
    });

    rstream.on('end', () => {
        res.end();
    });

    rstream.on('erroe', () => {
         console.log(err);
         res.end("File Not Found");
    });

    // 3rd way to streaming
    // rstream.pipe(res);
});

server.listen(8000, '127.0.0.1');