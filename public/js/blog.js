$(".submitButton").on("click", function(event){
  event.preventDefault();
  console.log("button click")
  var newPost = {
    title: $("#title").val().trim(),
    body: $("body").val().trim(),
    rank: $("rank").val().trim(),
  };
  console.log(newPost)

  $.post("/api/new", newPost)
  .then(function(){
    console.log("posted?")
  });
});