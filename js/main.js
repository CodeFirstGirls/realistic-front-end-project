// What is this bit of code doing?
$.get('https://jsonplaceholder.typicode.com/posts?userId=1', function(data){
  console.info("Total number of data objects received: ");
  console.log(data.length);
  console.info("Here is all the data: ");
  console.log(data);
  console.info("Here is the first object: ");
  console.log(data);

  // var users = data.data;
  // console.log("total users:", users.length);
  // users.forEach(function(user){
  //   console.log(user);
    // TODO: append users to tables. 
    // Useful documentation for you http://api.jquery.com/category/manipulation/
  // })
  
});


// CREDIT for the API endpoint belongs to https://jsonplaceholder.typicode.com/