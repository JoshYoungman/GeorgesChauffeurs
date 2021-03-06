var saloon = document.getElementById("saloon");
var exSaloon = document.getElementById("exSaloon");
var estate = document.getElementById("estate");
var exEstate = document.getElementById("exEstate");

window.onload = function() {
    document.getElementById("quotedPrice").innerHTML = "Your Price: £" + localStorage.getItem("quotedPrice");
}

var producedQuote = function carType() {
    
    var quotedPrice;
    var givenPrice = localStorage.getItem("quotedPrice");
    
    if(estate.checked) {
        quotedPrice = parseInt(givenPrice) + 5;
        localStorage.setItem("carType", "Estate");
    } else if(exSaloon.checked) {
        quotedPrice = parseInt(givenPrice) + 15;
        localStorage.setItem("carType", "Exec. Saloon");
    } else if(exEstate.checked) {
        quotedPrice = parseInt(givenPrice) + 20;
        localStorage.setItem("carType", "Exec. Estate");
    } else if(saloon.checked) {
        quotedPrice = parseInt(givenPrice) + 0;
        localStorage.setItem("carType", "Saloon");
    }
    
    document.getElementById("quotedPrice").innerHTML = "Your Price: £" + quotedPrice;
    localStorage.setItem("price", quotedPrice);
}

saloon.onchange = producedQuote;
exSaloon.onchange = producedQuote;
estate.onchange = producedQuote;
exEstate.onchange = producedQuote;