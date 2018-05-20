$(document).ready(function() {
  $('select').material_select();

});

$(".submitButton").on("click", function(event){
  event.preventDefault();
  console.log("button click")
  var newPost = {
    title: $("#title").val().trim(),
    body: $("#body").val().trim(),
    rank: $("#rank").val().trim(),
    HoodId: $("#{{neighborhood.id}}").val()
  };
  console.log(newPost)

  $.post("/api/newpost/:id", newPost)
  .then(function(){
    console.log("posted?")
  });
});