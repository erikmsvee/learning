var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");

var clientSchema = mongoose.Schema({
 lastname : String,
 firstname : String,
 address : String
});

// creation of the Client class associated with the clients collection
var Client = mongoose.model("clients", clientSchema);

Client.deleteOne({ lastname : "Clinton" }, function(err, response) {
  Client.find(function(err, clients) {
    console.log("After Clinton's removal");
    console.log("response = ", response);
    console.log("clients = ", clients);
  });
});