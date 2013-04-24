

var connect = require('connect');

var srv = connect.createServer( connect.static(__dirname) );

srv.listen(8995);



///////////////////////////////////////////////////
//
//  run this server using
//
//          node.exe  server.js
//
//  at a shell prompt
//
//
//
//  access the application using a browser, from
//
//
//     http://127.0.0.1:8995/blackjack.html
//
//  or
//
//     http://localhost:8995/blackjack.html
//
//
//  on the same machine
//
//
//  of course, you replace localhost with the
//  actual IP or DNS name of a remote server
//  where  "node.exe server.js" is running
///////////////////////////////////////////////////

