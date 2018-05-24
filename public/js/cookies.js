// //Create a Cookie that stores if a button is clicked
// // The button needs to be identified
// // on a repeat click an error is thrown
console.log("cookiejs has loaded")
$(document).ready(function (event) {
    $(".upVote").on("click", function () {
        // creae a voteID called : upvoted#
        //if it exists, prevent vote
        var voteID = "upvoted" + $(this).data("id");
        var id = $(this).data("id");
        var rank = $(this).data("rank");
        checkCookie(voteID, id, rank);
    });


    function checkCookie(voteID,id,rank) {
        var vote = getCookie(voteID);
        //if Vote cookie DOES exist
        if (vote != "") {
            alert("You already upvoted that jawn");
            $('"' + '.' + voteID + '"').prop("disabled", true);
        //ELSE do the ajax call and set a cookie
        } else {
            // DO the button work
            // 1) create the data for the ajax call

            var newRankObj = {
                id: id,
                rank: rank + 1
            };
            //Ajax to send data to the controller!
            $.ajax("/api/vote" + id, {
                type: "PUT",
                data: newRankObj
            })
                .then(function () {
                    console.log("upvoted");
                    // reload the page
                    location.reload();
                })
                    .then(function () {
                    //set cookie name=voteID, value=true,lenght=1day
                    var status = "true";
                    setCookie(voteID, status, 1);
                });
        }
    }
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

});