function sendEmail() {
    var firstName = document.getElementById('firstName').value;
    var surname = document.getElementById('surname').value;
    var number = document.getElementById('number').value;
    var addressLine1 = document.getElementById('addressLine1').value;
    var addressLine2 = document.getElementById('addressLine2').value;
    var city = document.getElementById('city').value;
    var postcode = document.getElementById('postcode').value;
    
    var date = document.getElementById('date').value;
    //var departure = localStorage.getItem('departurels').value;
    //var destination = localStorage.getItem('destinationls').value;
    var carType = localStorage.setItem("carType").value;
    var price = localStorage.getItem("price");
    
    window.open('mailto:joshhyoungman@gmail.com?subject=GCRoute&body=First Name: ' + firstName + '%0D%0ASurname: ' + surname + '%0D%0ATelephone Number: ' + number + '%0D%0AAddress Line 1: ' + addressLine1 + '%0D%0AAddress Line 2: ' + addressLine2 + '%0D%0ACity: ' + city + '%0D%0APostcode: ' + postcode + '%0D%0A%0D%0ADate: ' + date + /*'%0D%0ADeparture: ' + departure + '%0D%0ADestination: ' + destination + */'%0D%0ACar Type: ' + carType + '%0D%0APrice: £' + price);
}

function test() {
    var firstName = document.getElementById('firstName').value;
    var surname = document.getElementById('surname').value;
    var number = document.getElementById('number').value;
    var addressLine1 = document.getElementById('addressLine1').value;
    var addressLine2 = document.getElementById('addressLine2').value;
    var city = document.getElementById('city').value;
    var postcode = document.getElementById('postcode').value;
    var date = document.getElementById('date').value;
    var destination = document.getElementById('destination').value;
    //var carType = document.getElementById("carType").value;
    var price = localStorage.getItem("price");
    
    window.open('mailto:joshhyoungman@gmail.com?subject=GCRoute&body=First Name: ' + firstName + '%0D%0ASurname: ' + surname + '%0D%0ATelephone Number: ' + number + '%0D%0AAddress Line 1: ' + addressLine1 + '%0D%0AAddress Line 2: ' + addressLine2 + '%0D%0ACity: ' + city + '%0D%0APostcode: ' + postcode + '%0D%0ADate: ' + date + '%0D%0ADestination: ' + destination + '%0D%0APrice: £' + price);
}