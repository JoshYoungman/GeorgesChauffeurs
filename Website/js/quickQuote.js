var destination = document.getElementById("destination");
var departure = document.getElementById("departure");
var checkbox = document.getElementById("checkbox");

var destinationls = document.getElementById("destinationls");
var departurels = document.getElementById("departurels");

var produceQuote = function quickQuote() {

    var selectedDeparture = departure.options[departure.selectedIndex];
    var surcharge = selectedDeparture.dataset.surcharge;

    var selectedDestination = destination.options[destination.selectedIndex];
    var price = selectedDestination.dataset.price;

    var quotedPrice = parseInt(surcharge) + parseInt(price);
    document.getElementById("quotedPrice").innerHTML = "£" + quotedPrice;
    
    localStorage.setItem("quotedPrice", quotedPrice);
    
    var selectDeparture = document.getElementById("departure");
    var selectOption = selectDeparture.options[selectDeparture.selectedIndex];
    var lastSelectedDeparture = localStorage.getItem("selectDeparture");
    
    if(lastSelectedDeparture) {
        selectDeparture.value = lastSelectedDeparture;
    }
    
    selectDeparture.onchange = function () {
        lastSelected = selectDeparture.options[selectDeparture.selectedIndex].value;
        localStorage.setItem('selectDeparture', lastSelectedDeparture);
    }
    
    var selectDestination = document.getElementById("departure");
    var selectOption = selectDestination.options[selectDestination.selectedIndex];
    var lastSelectedDestination = localStorage.getItem("selectDestination");
    
    if(lastSelectedDestination) {
        selectDestination.value = lastSelectedDestination;
    }
    
    select.onchange = function () {
        lastSelected = selectDestination.options[selectDestination.selectedIndex].value;
        localStorage.setItem('selectDestination', lastSelectedDestination);
    }
    
};

destination.onchange = produceQuote;
departure.onchange = produceQuote;