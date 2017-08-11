$(document).ready(function() { 
    
    
    /* Map */
    if($('#themap').length) {
        
        var map;
        var MY_MAPTYPE_ID = 'custom_style';

        function initialize() {

          var featureOpts = [
              {
                "featureType": "poi.park",
                "stylers": [
                  { "lightness": 36 },
                  { "saturation": -100 }
                ]
              },{
                "featureType": "poi.government",
                "stylers": [
                  { "saturation": -100 }
                ]
              },{
                "featureType": "poi.attraction",
                "stylers": [
                  { "saturation": -100 }
                ]
              },{
                "featureType": "poi.school",
                "stylers": [
                  { "lightness": 29 },
                  { "saturation": -100 }
                ]
              },{
                "featureType": "water"  },{
                "featureType": "water",
                "stylers": [
                  { "color": "#27ac80" }
                ]
                }
  
            ];

          var mapOptions = {
            draggable: true,
            zoom: 15,
            center: new google.maps.LatLng(44.5911767, 33.5057976),
            // center: new google.maps.LatLng(48.855, 2.341418),
            
            scrollwheel: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
              },
            mapTypeId: MY_MAPTYPE_ID
          };

          map = new google.maps.Map(document.getElementById('themap'),
              mapOptions);

          var styledMapOptions = {
            name: 'Адрес дома'
          };

          var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h3 id="firstHeading" class="mt20">Наш адрес</h3>'+
          '<div id="bodyContent">'+
          '<p>г.Севастополь<br>Симферопольская улица, 29<br> Телефон: +7 (916) 883 08 40</p>'+
          '</div>'+
          '</div>';

        var infowindow = new google.maps.InfoWindow({
              content: contentString
          });
          var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
              map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
            // var myLatLng = new google.maps.LatLng(48.855, 2.341418);
            var myLatLng = new google.maps.LatLng(44.5911767, 33.5057976);
             // center: new google.maps.LatLng(44.588028, 33.4960235),
            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: 'Запишитесь на просмотр дома!'
            });

            google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
   
  
  
    
});