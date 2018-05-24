$(document).ready(function () {
// UP VOTE BLOCK
// $(".upVote").on("click", function (event) {
//     event.preventDefault();
//     var id=$(this).data("id");
//     var rank=$(this).data("rank");
//     console.log("current Rank: "+ rank)
//     var newRank= rank + 1;
//     var newRankObj = {
//       id : id,
//       rank : rank + 1
//     };
//     console.log("New Rank : "+ newRankObj)
//     $.ajax("/api/vote"+ id,{
//       type:"PUT",
//       data: newRankObj})
//     .then(function () {
//       console.log("upvoted");
//       location.reload();
//     });
//   });
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