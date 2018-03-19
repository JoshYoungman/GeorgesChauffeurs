function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          mapTypeControl: false,
          center: {lat: 51.5694681, lng: -1.7884314},
          zoom: 12
        });

        new AutocompleteDirectionsHandler(map);
      }

       /**
        * @constructor
       */
      function AutocompleteDirectionsHandler(map) {
        this.map = map;
        this.originPlaceId = null;
        this.destinationPlaceId = null;
        this.travelMode = 'DRIVING';
        var originInput = document.getElementById('origin-input');
        var destinationInput = document.getElementById('destination-input');
        var modeSelector = document.getElementById('mode-selector');
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directionsDisplay.setMap(map);

        var originAutocomplete = new google.maps.places.Autocomplete(
            originInput, {placeIdOnly: true});
        var destinationAutocomplete = new google.maps.places.Autocomplete(
            destinationInput, {placeIdOnly: true});

        this.setupClickListener('changemode-driving', 'DRIVING');

        this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
        this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
      }

      // Sets a listener on a radio button to change the filter type on Places
      // Autocomplete.
      AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
        var radioButton = document.getElementById(id);
        var me = this;
        radioButton.addEventListener('click', function() {
          me.travelMode = mode;
          me.route();
        });
      };

      AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
        var me = this;
        autocomplete.bindTo('bounds', this.map);
        autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          if (!place.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
          }
          if (mode === 'ORIG') {
            me.originPlaceId = place.place_id;
          } else {
            me.destinationPlaceId = place.place_id;
          }
          me.route();
        });

      };

      AutocompleteDirectionsHandler.prototype.route = function() {
        if (!this.originPlaceId || !this.destinationPlaceId) {
          return;
        }
        var me = this;

        this.directionsService.route({
          origin: {'placeId': this.originPlaceId},
          destination: {'placeId': this.destinationPlaceId},
          travelMode: this.travelMode
        }, function(response, status) {
          if (status === 'OK') {
			me.directionsDisplay.setDirections(response);
			var quoteCost = response.routes[0].legs[0].distance.value / 1000;
			var saloonCost = quoteCost * 0.8;
			var estateCost = quoteCost * 0.9;
			var exSaloonCost = quoteCost * 1.1;
			var exEstateCost = quoteCost * 1.2;
			
			var duration = (response.routes[0].legs[0].duration.value / 60) / 60;
			var d = duration.toString();
			var decimalTimeString = d;
			var decimalTime = parseFloat(decimalTimeString);
			decimalTime = decimalTime * 60 * 60;
			var hours = Math.floor((decimalTime / (60 * 60)));
			decimalTime = decimalTime - (hours * 60 * 60);
			var minutes = Math.floor((decimalTime / 60));
			decimalTime = decimalTime - (minutes * 60);
			var seconds = Math.round(decimalTime);
			
			var hourName;
			var minuteName;
			
			if (hours == 1) {
				hourName = ' Hour ';
			} else {
				hourName = ' Hours ';
				}
			if (minutes == 1) {
				minuteName = ' Minute';
			} else {
				minuteName = ' Minutes';
				}
				
			if (hours < 10) {
				hours = "0" + hours;
				}
			if (minutes < 10) {
				minutes = "0" + minutes;
				}
			if (seconds < 10) {
				seconds = "0" + seconds;
				}
			
			document.getElementById('saloon').innerHTML = '£' + parseFloat(Math.round(saloonCost * 100) / 100).toFixed(2);
			document.getElementById('estate').innerHTML = '£' + parseFloat(Math.round(estateCost * 100) / 100).toFixed(2);
			document.getElementById('exSaloon').innerHTML = '£' + parseFloat(Math.round(exSaloonCost * 100) / 100).toFixed(2);
			document.getElementById('exEstate').innerHTML = '£' + parseFloat(Math.round(exEstateCost * 100) / 100).toFixed(2);
			document.getElementById('duration').innerHTML = hours + hourName + minutes + minuteName ;
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      };