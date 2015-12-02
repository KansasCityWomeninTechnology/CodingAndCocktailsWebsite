import GoogleMapsLoader from 'google-maps'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

//require("html!./index.html");

GoogleMapsLoader.load(function(google) {
   function initialize() {
      var mapCanvas = document.getElementById('map-canvas');
      var mapOptions = {
         center: new google.maps.LatLng(39.105692, -94.581287),
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var nerderyLatlng = new google.maps.LatLng(39.105692, -94.581287);
      var marker = new google.maps.Marker({
         position: nerderyLatlng,
         map: map,
         title:"The Nerdery"
      });
   }
   google.maps.event.addDomListener(window, 'load', initialize);
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61863744-2', 'auto');
ga('send', 'pageview');
