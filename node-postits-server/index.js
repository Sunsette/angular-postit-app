// CRUD - create(post), read(get), update(put), delete(delete).
var express = require("express");
var app = express();
var memoryRepo = require("./memoryRepo.js");
// header  to allow requests from any origin "Access-Control-Allow-Origin", "*"
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        res.send(200);
    } else {
        next();
    }
};
var port = 4000;
app.use(allowCrossDomain);
// Middleware to serve our client with HTML, CSS and JS. 
// We point to a directory called public in our current directory.
app.use(express.static("./public"));
// Middleware to extract the data sent to the server with puts(update) and posts(create).
// The data will be added as an object to "req.body".
app.use(express.bodyParser());

// Listen to get method to URL, http://localhost:8000/waitinglist
// and return all items in waitingList as a JSON object.
app.get("/:repo", function (req, res) {  
    res.json(memoryRepo.getAll(req.params.repo));
});
// List to a URL pattern. The URL pattern must start with
// http://localhost:8000/waitinglist/ and be followed by som text.
// Example:
// http://localhost:8000/waitinglist/1
// http://localhost:8000/waitinglist/Tom
// The ":id" is a magic part of express that sucks out the last part of the URL
// and creates a property with that name in "req.params".
app.get("/:repo/:id", function (req, res) {  
    var id = Number(req.params.id); // Convert string to number.
    var obj = memoryRepo.get(req.params.repo, id);  
    if (typeof obj === "object") {    
        res.json(obj);  
    } else {     // If we can't find the object in our shopping list,
             // return status code "404 not found"
            
        res.send(404);  
    }
});
// Listen to a post to URL "http://localhost:8000"
// Data sent to the URL has already been ectracted by bodyParser middleware
// and available in req.body.
// Create the item sent (req.body) in shopping list
// Return the object sent plus the new id.
app.post("/:repo", function (req, res) {   // {
       //    "name":"Ham"
       // }
      
    var id = memoryRepo.create(req.params.repo, req.body);  
    var obj = req.body;    
    obj.id = id;   // {
       //    "name": "Ham",
       //    "id": x
       // }
      
    res.json(obj);
});
// Listen to put method on the same URL's as get.
// Get data from request in the same way as post.
// Update our list item based on id.
app.put("/:repo/:id", function (req, res) {  
    var id = Number(req.params.id);  
    memoryRepo.update(req.params.repo, id, req.body);  
    res.json({
        updated: true
    });
});
// URL filter works in the same way as get.
// Deletes our item from our list and returns "OK" status code.
app.del("/:repo/:id", function (req, res) {  
    var id = Number(req.params.id);  
    memoryRepo.remove(req.params.repo, id);  
    res.json({
        deleted: true
    });
});
app.listen(port); // Port.
console.log('Server started on port ' + port);
