var GeolocationControllerApp = Spine.Controller.sub({

  mapCentre : { lat: 39.8106460, lon: -98.5569760 }, // These are the coordinates of United States of America's centre location

  elements: {
    "div#coverage-map" : "coverageMap" 
      },

  init: function(){
    console.log('GeolocationController :: init');
    var that = this;
    require( ['js/google-maps/jquery.ui.map.js', 'js/google-maps/jquery.ui.map.overlays.js'] , function(){
      that.bindings();
    });
  },

  bindings: function(){
    console.log('GeolocationController :: bindigs');
    var that = this;
    var options = { 
          center            : that.mapCentre.lat + ',' + that.mapCentre.lon, 
          zoom              : 3, 
          disableDefaultUI  : false, 
          callback: this.heatMapMockup
          };
    this.coverageMap.gmap( options );
  },

  heatMapMockup : function(){
    var heatmapzxData = [
      new google.maps.LatLng(37.782, -122.447),
      new google.maps.LatLng(37.782, -122.445),
      new google.maps.LatLng(37.782, -122.443),
      new google.maps.LatLng(37.782, -122.441),
      new google.maps.LatLng(37.782, -122.439),
      new google.maps.LatLng(37.782, -122.437),
      new google.maps.LatLng(37.782, -122.435),
      new google.maps.LatLng(37.785, -122.447),
      new google.maps.LatLng(37.785, -122.445),
      new google.maps.LatLng(37.785, -122.443),
      new google.maps.LatLng(37.785, -122.441),
      new google.maps.LatLng(37.785, -122.439),
      new google.maps.LatLng(37.785, -122.437),
      new google.maps.LatLng(37.785, -122.435)
    ];
    //$('div#coverage-map').gmap( 'loadHeatMap' ,  {data: heatmapzxData} );
  }

});

$(document).ready(function(){
 return new GeolocationControllerApp({
    el: $("body.geolocation")
  });
});
