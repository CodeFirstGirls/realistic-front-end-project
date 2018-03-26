// What is this bit of code doing?
var params = {
  userId: 1
}

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

    // var posts = data;
    // console.log("total posts:", posts.length);
    // posts.forEach(function(post){
    //   console.log(post);
    // TODO: append posts to tables. 
    // Useful documentation for you http://api.jquery.com/category/manipulation/
    // });

    $('#microblog .container').append(buffer);
  });


// CREDIT for the API endpoint belongs to https://jsonplaceholder.typicode.com/