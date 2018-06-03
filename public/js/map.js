var geocoder = require("dotenv");

require("dotenv").config();
var keys = require("./keys.js");
// https://console.cloud.google.com/google/maps-apis/apis/geocoding-backend.googleapis.com/metrics?consoleReturnUrl=https:%2F%2Fcloud.google.com%2Fmaps-platform%2F%3F__utma%3D102347093.842729827.1525296826.1527705238.1527705238.1%26__utmb%3D102347093.0.10.1527705238%26__utmc%3D102347093%26__utmx%3D-%26__utmz%3D102347093.1527705238.1.1.utmcsr%3D(direct)%7Cutmccn%3D(direct)%7Cutmcmd%3D(none)%26__utmv%3D-%26__utmk%3D163327164%26_ga%3D2.78341652.1209722590.1527704569-842729827.1525296826%23get-started&consoleUI=CLOUD&folder=&mods=metropolis_maps&organizationId=&project=phillyneighbor-205419&duration=PT1H

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 }
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}