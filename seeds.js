var mongoose     = require("mongoose");
var Campground   = require("./models/campgrounds");
var Comment      = require("./models/comment");

var data = [
        {
            name: "Cloud Rest", 
            image: "https://images.unsplash.com/photo-1432817495152-77aa949fb1e2?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            name: "Cloud Rest", 
            image: "https://images.unsplash.com/photo-1456394555490-ef1bf0aedc46?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=97d985185b307edef3614f029a15a329",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            name: "Cloud Rest", 
            image: "https://images.unsplash.com/photo-1457368406279-ec1ecb478381?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=d5905a4e8e077df61c6894b9a193abd7",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"  
        }
    ];

function seedDB(){
    //remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err); 
        }
        console.log("removed campground!");
    //Add a campground
    data.forEach(function(seed){
       Campground.create(seed, function(err, campground){
           if(err){
               console.log(err);
           } else {
               console.log("added a campground");
              //Create a comment
               Comment.create(
                   {
                       text: "This plce is great, but I wish there was toilet",
                       author: "Mike"
                   }, function(err, comment){
                       if(err){
                           console.log(err);
                       } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new Comment");
                       }
                });
           }
       }); 
    });
 });
}

module.exports = seedDB;