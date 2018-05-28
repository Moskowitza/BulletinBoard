var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
    // go to home page
    .goto("https://stormy-temple-91988.herokuapp.com/")
    //   go to add new post
    .goto("https://stormy-temple-91988.herokuapp.com/newpost")

    .type("#title", "Best Pizza")
    .type("#body", "Went to Chicks and had the best Pizza last night")
    .type("#location", "1807 Washington Ave, Philadelphia, PA 19146")
    // Pick neighborhood using value 
    .select("#neighborhood", [value=3])
    //submit
    .click(".submitButton")
    //wait for the alert
    .wait(3000)
    // Nightmare disables window.alert from popping up by default, but you can still listen for the contents of the alert dialog.
    .end()
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.error("NewPost failed:", error);
    });
