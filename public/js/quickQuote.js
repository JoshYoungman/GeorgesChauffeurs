var destination = document.getElementById("destination");
var departure = document.getElementById("departure");
var checkbox = document.getElementById("checkbox");

var produceQuote = function quickQuote() {

    var selectedDeparture = departure.options[departure.selectedIndex];
    var surcharge = selectedDeparture.dataset.surcharge;
    
    //var surcharge1 = selectedDeparture.getAttribute("data-surcharge");

    var selectedDestination = destination.options[destination.selectedIndex];
    var price = selectedDestination.dataset.price;

    var quotedPrice = parseInt(surcharge) + parseInt(price);
    
    if(checkbox.checked == true){
        var quotedPriceDivided = quotedPrice / 4;
        var returnPrice = quotedPrice + quotedPriceDivided;
        document.getElementById("quotedPrice").innerHTML = "£" + returnPrice;
    } else {
    document.getElementById("quotedPrice").innerHTML = "£" + quotedPrice;
    }
    
};

destination.onchange = produceQuote;

departure.onchange = produceQuote;

checkbox.onchange = prodeuceQuote;