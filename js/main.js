// If you get this error: "Failed to load https://jsonplaceholder.typicode.com/posts?userId=1: 
// The 'Access-Control-Allow-Origin' header has a value 'null' that is 
// not equal to the supplied origin. Origin 'null' is therefore not allowed access."
// You can fiddle with the code on CodePen here: https://codepen.io/dianaklee/pen/YeGVzq
// and then paste it back here. 

// This is happening because the origin of 'null' implies that you are loading 
// the HTML page from the file system - meaning that does the load call via a file:/// URL 
// Chrome applies the Same Origin Policy (http://en.wikipedia.org/wiki/Same_origin_policy)
// very strictly, so the code has to be called over `https`. 
// (Source: https://stackoverflow.com/questions/8456538/origin-null-is-not-allowed-by-access-control-allow-origin)

// So the code should work when you upload it to your GitHub repository

// What is this bit of code doing?
var params = {
  userId: 1
}

// This function takes a URL and ... (fill me in!)
$.get('https://jsonplaceholder.typicode.com/posts', params)
  .done(function (data) {
    console.info("Total number of data objects received: ");
    console.log(data.length);
    console.info("Here is all the data: ");
    console.log(data);
    console.info("Here is the first object: ");
    console.log(data[0]);

    var buffer = [];
    var divOpening = "<div class='post row' id='post-1'><h2 class='title'>";

    // Here, we're using the first post as an example of how you can append this information
    var firstPost = data[0];
    buffer.push(divOpening + firstPost.title +
      "<small> By User " + firstPost.userId + "</small></h2>"
      + "<p>" + firstPost.body + "</p></div>");

    // Some helper code to get you started in generating your microblog!
    // var posts = data;
    // console.log("total posts:", posts.length);
    // posts.forEach(function(post){
    //   console.log(post);
    //    TODO: append posts to tables. 
    // Useful documentation for you http://api.jquery.com/category/manipulation/
    // });

    $('#microblog .container').append(buffer);
  });


// CREDIT for the API endpoint belongs to https://jsonplaceholder.typicode.com/