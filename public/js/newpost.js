$(document).ready(function () {
  $('select').material_select();


  $(".submitButton").on("click", function (event) {
    event.preventDefault();
    console.log("button click")
    var newPost = {
      title: $("#title").val().trim(),
      body: $("#body").val().trim(),
      location: $("#location").val().trim(),
      // rank: $("#rank").val().trim(),
      // $("#neighborhood").val() works!!!! but still need to write to database
      // HoodID: $("#neighborhood").val()
      HoodID: $("#newpost").data("hoodid")
    };
    console.log(newPost)

    $.post("/api/new", newPost)
      .then(function () {
        console.log("posted?")
        $("#title").val("");
        $("#body").val("");
        $("#location").val("");
        alert("Thank you for posting!");
      });
  });
});