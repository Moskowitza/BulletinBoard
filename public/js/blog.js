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
    HoodID: $("#hoodID").val()
  };
  console.log(newPost)

  $.post("/api/new", newPost)
  .then(function(){
    console.log("posted?")
  });
});