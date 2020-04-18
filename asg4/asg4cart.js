// Karan Gaikwad
// i start by capturing the quantities of lamp and mirror so i can access them easily later on. i also have to capture shipping option

var lamp = document.getElementById("l");
var mirror = document.getElementById("m");
var shippinglist = document.getElementsByName("shipping");

// i use this for loop to get the chosen shipping option. i only need the one that is checked. the rest of this block is the addeventlistener. i use prevent default so it solves potential errors. the addeventlistener is necessary for when the two quantities are changed, when the shipping is changed, and when the submit button is clicked.
for (var i = 0, length = shippinglist.length; i < length; i++) {
  shippinglist[i].addEventListener('change', function(event) {
    event.preventDefault();
    total();
  });
}
lamp.addEventListener("change", function(event) {
    event.preventDefault();
    total();
}, false);
mirror.addEventListener("change", function(event) {
    event.preventDefault();
    total();
}, false);
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    receipt();
}, false);


// this is the total function that will change the html of the receipt whenever the total is changed.
function total() {
    // here i capture the shipping value by checking through the shipping list similarly to above.
    var shipping;
    for (var i = 0, length = shippinglist.length; i < length; i++) {
        if (shippinglist[i].checked) {
            shipping = parseInt(shippinglist[i].value);
        }
    }
    // then i capture the total costs of everything
    var lamptotal = parseInt(document.getElementById("l").value) * 300;
    var mirrortotal = parseInt(document.getElementById("m").value) * 500;
    var tax = (lamptotal + mirrortotal) * 0.0875;
    var total = lamptotal + mirrortotal + shipping + tax;
    
    // finall i update the costs onto the receipt by changing the html there
    document.getElementById("lampcost").innerHTML = "Lamps: $" + lamptotal;
    document.getElementById("mirrorcost").innerHTML = "Mirrors: $" + mirrortotal;
    document.getElementById("tax").innerHTML = "Tax: $" + tax;
    document.getElementById("shippingcost").innerHTML = "Shipping Cost: $" + shipping;
    document.getElementById("totalcost").innerHTML = "Grand Total: $" + total;
}

// this is the receipt function. here i will validate everything on the form
function receipt() {
    
    // first i capture all the neccesary parts of the form that i need to validate
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    
    // i capture the shipping again like i did in total
    var shipping;
    for (var i = 0, length = shippinglist.length; i < length; i++) {
        if (shippinglist[i].checked) {
            shipping = parseInt(shippinglist[i].value);
        }
    }
    var cardname = document.getElementById("cardname").value;
    var cardnumber = document.getElementById("cardnumber").value;
    var expmonth = document.getElementById("expmonth").value;
    var expyear = document.getElementById("expyear").value;
    var cvv = document.getElementById("cvv").value;
    
    // now i use a series of if statements to check for validation. most of them are checking if the field is blank. some check alternate things such as if they phone number is 10 digits, if the email has a @ and . in it, etc.
    if (fname == "") {
        alert("Fill in first name");
        document.getElementById("fname").select();
        document.getElementById("fname").focus();
        document.getElementById("fname").style.backgroundColor = "red";
        return;
    } else if (lname == "") {
        alert("Fill in last name.")
        document.getElementById("lname").select();
        document.getElementById("lname").focus();
        document.getElementById("lname").style.backgroundColor = "red";
        return;
    } else if (email == "") {
        alert("Fill in email.")
        document.getElementById("email").select();
        document.getElementById("email").focus();
        document.getElementById("email").style.backgroundColor = "red";
        return;
        // if the indexOf a character is not in the string, it returns as -1. so i use this to check if @ and . are in the string
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Email must include '@' and '.'");
        document.getElementById("email").select();
        document.getElementById("email").focus();
        document.getElementById("email").style.backgroundColor = "red";
        return;
    } else if (phone.length != 10) {
        alert("Phone must be a 10 digit number");
        document.getElementById("phone").select();
        document.getElementById("phone").focus();
        document.getElementById("phone").style.backgroundColor = "red";
        return;
    } else if (address == "") {
        alert("Fill in address");
        document.getElementById("address").select();
        document.getElementById("address").focus();
        document.getElementById("address").style.backgroundColor = "red";
        returm;
    } else if (city == "") {
        alert("Fill in city");
        document.getElementById("city").select();
        document.getElementById("city").focus();
        document.getElementById("city").style.backgroundColor = "red";
        return;
    } else if (state == "") {
        alert("Fill in state");
        document.getElementById("state").select();
        document.getElementById("state").focus();
        document.getElementById("state").style.backgroundColor = "red";
        return;
    } else if (zip.length != 5) {
        alert("Zip must be 5 numbers");
        document.getElementById("zip").select();
        document.getElementById("zip").focus();
        document.getElementById("zip").style.backgroundColor = "red";
        return;
    } else if (cardname == "") {
        alert("Fill in card name");
        document.getElementById("cardname").select();
        document.getElementById("cardname").focus();
        document.getElementById("cardname").style.backgroundColor = "red";
        return;
    } else if (cardnumber == "") {
        alert("Fill in card number");
        document.getElementById("cardnumber").select();
        document.getElementById("cardnumber").focus();
        document.getElementById("cardnumber").style.backgroundColor = "red";
        return;
    } else if (expmonth == "") {
        alert("Fill in expiration month");
        document.getElementById("expmonth").select();
        document.getElementById("expmonth").focus();
        document.getElementById("expmonth").style.backgroundColor = "red";
        return;
    } else if (expmonth > 12 || expmonth < 0) {
        alert("Enter a valid expiration month");
        document.getElementById("expmonth").select();
        document.getElementById("expmonth").focus();
        document.getElementById("expmonth").style.backgroundColor = "red";
        return;
    } else if (expyear == "") {
        alert("Fill in expiration year");
        document.getElementById("expyear").select();
        document.getElementById("expyear").focus();
        document.getElementById("expyear").style.backgroundColor = "red";
        return;
    } else if (cvv == "") {
        alert("Fill in CVV");
        document.getElementById("cvv").select();
        document.getElementById("cvv").focus();
        document.getElementById("cvv").style.backgroundColor = "red";
        return;
    } else {
        // finally, if none of those issues occur, then the program will come to this else statement
        // in this statement, i hide the form and create a date variable to dislpay the receipt
        // i also need to get the tax to calculate the grand total
        document.getElementsByID("fullform").style.display = "none";
        var date = new Date();
        var tax = (parseInt(document.getElementById("l").value) * 300 + parseInt(document.getElementById("m").value) * 500) * 0.0875;
        var grandtotal = parseInt(document.getElementById("l").value) * 300 + parseInt(document.getElementById("m").value) * 500 + shipping + tax;
        document.getElementById("output").innerHTML = "Total lamps = " + document.getElementById("l").value + "<br>" + "Total mirrors = " + document.getElementById("m").value + "<br>" + "Grand total = " + grandtotal + "<br>" + "Card number: XXXX-XXXX-XXXX-" + cardnumber.substring(12) + "<br>" + "Deliver to: " + address + ", " + city + ", " + state + ", " + zip + "<br>" + date.getUTCMonth()+1 + "/" + date.getUTCDate() + "/" + date.getUTCFullYear();
    }
    
}
