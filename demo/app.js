(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!!!!!!');
    app.$.map.addGeoJSONData(data);
    
    // app.$.map.addCircleMarker(40.74426574524173, -73.99566650390625, {
    //     radius: 6,
    //     weight: 4,
    //     stroke: true,
    //     color: "#e6474c",
    //     fillOpacity: 1,
    //     opacity: 1,
    //     fillColor: "#fff"
    //   });

    // app.$.map.fitBounds = {
    //   "southWest": [40.712, -74.227],
    //   "northEast": [40.774, -74.125]
    // }
    // app.$.map.maxBounds = {
    //   "southWest": [13.250639570043104, 75.08056640625],
    //   "northEast": [18.26065335675836, 78.914794921875]
    // }
  });

  var data = [{
  "type": "FeatureCollection",
  "properties": {
    "layerName": "layerOne",
    "minZoom": 6,
    "maxZoom": 18,
    "isCluster": true
  },
  "features": [{
    "type": "Feature",
    "properties": {
      "marker-size": "large",
      "marker-symbol": "bicycle",
      "marker-color": "#1dbeda"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-73.99566650390625,
        40.74426574524173
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "marker-size": "large",
      "marker-symbol": "bus",
      "marker-color": "#1dbeda"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-73.98124694824219,
        40.763641245521754
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "marker-size": "large",
      "marker-symbol": "rocket",
      "marker-color": "#1dbeda"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-73.94330978393555,
        40.79535805750898
      ]
    }
  }]
}, {
  "type": "FeatureCollection",
  "properties": {
    "layerName": "layerTwo",
    "minZoom": 8
  },
  "features": [{
    "type": "Feature",
    "properties": {
      "marker-size": "large",
      "marker-symbol": "cafe",
      "marker-color": "#1dbeda"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-73.59566650390625,
        40.74426574524173
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "marker-size": "large",
      "marker-symbol": "fast-food",
      "marker-color": "#1dbeda"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-73.58124694824219,
        40.763641245521754
      ]
    }
  }, {
    "type": "Feature",
    "properties": {
      "marker-size": "large",
      "marker-symbol": "beer",
      "marker-color": "#1dbeda"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-73.54330978393555,
        40.79535805750898
      ]
    }
  }]
}];

// var data = [
//   {
//     "type": "Feature",
//     "geometry": {
//       "type": "LineString",
//       "coordinates": [
//         [-77.03238901390978,38.913188059745586],
//         [-122.414, 37.776]
//       ]
//     },
//     "properties": {
//       "stroke": "#fc4353",
//       "stroke-width": 5,
//       "layerName": "android"
//     }
//   }
// ];

})(document);
