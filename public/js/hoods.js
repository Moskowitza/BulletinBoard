$(document).ready(function () {
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
