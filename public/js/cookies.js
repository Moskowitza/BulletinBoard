// //Create a Cookie that stores if a button is clicked
// // The button needs to be identified
// // on a repeat click an error is thrown
console.log("cookiejs has loaded")
$(document).ready(function (event) {
    $(".upVote").on("click", function () {
        // creae a voteID called : upvoted#
        //if it exists, prevent vote
        var voteID = "upvoted" + $(".upVote").data("id");
        console.log("vote id: " + voteID)
        var status = "true";
        checkCookie(voteID);
        //set cookie name=voteID, value=true,lenght=1day
        setCookie(voteID, status, 1);
        //We need to the parse out the cookie name
        getCookie(voteID);
        //
        
    });
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie(voteidentifier) {
        var vote = getCookie(voteidentifier);
        if (vote != "") {
            // console.log("ok, we got a cookie")
            alert("You already upvoted that jawn");
            $('"' + '.' + voteidentifier + '"').prop("disabled", true);
        } else {
            var id = $(this).data("id");
            var rank = $(this).data("rank");
            console.log("current Rank: " + rank)
            var newRank = rank + 1;
            var newRankObj = {
                id: id,
                rank: rank + 1
            };
            console.log("New Rank : " + newRankObj)
            $.ajax("/api/vote" + id, {
                type: "PUT",
                data: newRankObj
            })
                .then(function () {
                    console.log("upvoted");
                    location.reload();
                });
        }
    }

});