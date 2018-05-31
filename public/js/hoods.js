$(document).ready(function () {
    $('.modal').modal();
    $('[data-post=new]').on('click', function() {
        $('#modal1').modal('open');
    });

    console.log("all posts"+$("#fred").data("posts"))
    console.log($("#map").data("lat"));
    console.log($("#map").data("lng"));
    console.log("hoods js loading");
    // When the map button is clicked, show the map for the given neighborhood
    $(".view-map").on("click", function() {
        console.log("map button clicked");
        $("#list").addClass("hide");
        $("#map").removeClass("hide");

        $(".view-map").addClass("view-button-active");
        $(".view-map").removeClass("view-button-inactive");

        $(".view-list").addClass("view-button-inactive");
        $(".view-list").removeClass("view-button-active");
    });

    // When the list button is clicked, show the list of posts for the given neighborhood
    $(".view-list").on("click", function() {
        console.log("list button clicked");
        $("#map").addClass("hide");
        $("#list").removeClass("hide");

        $(".view-list").addClass("view-button-active");
        $(".view-list").removeClass("view-button-inactive");
        
        $(".view-map").addClass("view-button-inactive");
        $(".view-map").removeClass("view-button-active");
    });
});



function renderMap(){
    var lat = $("#map").data("lat");
    var lng = $("#map").data("lng");
    var location = {lat: lat, lng: lng};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16, 
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
};
// DONT DELETE ^^^^^^^^^^^ABOVE

//THis is stuff we need NOW FOR POSTS
function geocodeAddr(geocoder, map) {
    var address = $(".location").data("location");
    console.log(address)
    geocoder.geocode({ "address": address }, function (results, status) {
        if (status === "OK") {
            var lat = results[0].geometry.location.lat();
            var lng = results[0].geometry.location.lng();
            var location = { lat: lat, lng: lng }

            map.setCenter(results[0].geometry.location);

            // Creates marker for geocode address
            var marker = new google.maps.Marker({
                map: map,
                position: location
            });
        } 
        $(".location").val("");
    });

    // Adds Indego stations as data layer to map
    // map.data.loadGeoJson(
    //     'https://www.rideindego.com/stations/json/');

    // map.data.setStyle(function(feature) {
    //     var icon;
    //     if (feature.getProperty("bikesAvailable") < 3) {
    //         icon = "assets/images/bike-icon-low.png";
    //     } else if (feature.getProperty("bikesAvailable") === 0 ) {
    //         icon = "assets/images/bike-icon-empty.png";
    //     } else {
    //         icon = "assets/images/bike-icon.png";
    //     }
    //     return ({
    //         icon: icon
    //     });
    // });

    // // Displays POST  information
    // map.data.addListener('click', function (event) {
    // });
    // $("#close").on("click", function () {
    //     $("#station-info-wrapper").addClass("hide");
    // });

}