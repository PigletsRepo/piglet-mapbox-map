(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!!!!!!');
    app.$.map.addGeoJSONData(data)
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

})(document);
