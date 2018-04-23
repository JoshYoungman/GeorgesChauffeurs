var destination = document.getElementById("destination");
var departure = document.getElementById("departure");
var checkbox = document.getElementById("checkbox");

var produceQuote = function quickQuote() {

    var selectedDeparture = departure.options[departure.selectedIndex];
    var surcharge = selectedDeparture.dataset.surcharge;

    var selectedDestination = destination.options[destination.selectedIndex];
    var price = selectedDestination.dataset.price;

    var quotedPrice = parseInt(surcharge) + parseInt(price);
    document.getElementById("quotedPrice").innerHTML = "£" + quotedPrice;
    
    localStorage.setItem("quotedPrice", quotedPrice);
};

destination.onchange = produceQuote;
departure.onchange = produceQuote;