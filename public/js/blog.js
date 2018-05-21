$(document).ready(function () {
  $('select').material_select();


  $(".submitButton").on("click", function (event) {
    event.preventDefault();
    console.log("button click")
    var newPost = {
      title: $("#title").val().trim(),
      body: $("#body").val().trim(),
      rank: $("#rank").val().trim(),
      // $("#neighborhood").val() works!!!! but still need to write to database
      HoodID: $("#neighborhood").val()
    };
    console.log(newPost)

    $.post("/api/new", newPost)
      .then(function () {
        console.log("posted?")
      });
  });
// UP VOTE BLOCK
  $(".upVote").on("click", function (event) {
    event.preventDefault();
    var id=$(this).data("id");
    var rank=$(this).data("rank");
    console.log("current Rank: "+ rank)
    var newRank= rank + 1;
    var newRankObj = {
      id : id,
      rank : rank + 1
    };
    console.log("New Rank : "+ newRankObj)
    $.ajax("/api/vote"+ id,{
      type:"PUT",
      data: newRankObj})
    .then(function () {
      console.log("upvoted");
      location.reload();
    });
  });
// DOWN VOTE BLOCK

  $(".downVote").on("click", function (event) {
    event.preventDefault();
    var id=$(this).data("id");
    var rank=$(this).data("rank");
    console.log("current Rank: "+ rank)
    var newRank= rank - 1;
    var newRankObj = {
      id : id,
      rank : rank -1
    };
    console.log("New Rank : "+ newRankObj)
    $.ajax("/api/vote"+ id,{
      type:"PUT",
      data: newRankObj})
    .then(function () {
      console.log("upvoted");
      location.reload();
    });
  });
});