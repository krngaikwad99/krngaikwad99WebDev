/*eslint-env browser*/
// ^^ i added the above line because on brackets it kept giving me an "error" on every line even though everything worked fine. i googled this and it said to include this line just to prevent that many errors showing up for no reason, though they had no affect on the actual program

// Karan Gaikwad, Oct 16, 2019

// here is the image array with all the images
var imagearray = ["maadcity.jpg", "flowerboy.jpg", "leapyear.jpg", "acidrap.jpg", "2014foresthills.jpg"];
    

// for this application i just need to randomize a number from 0-5 and then I can manipulate the div element i made to include the image and some text
function randimageapp () {

    var randomimgindex = Math.floor(Math.random()*5);
    document.getElementById("imagerandom").innerHTML += "<br> Here's a random image! It's an album cover I like. Give it a listen if you get the time! <br> <img src = '" + imagearray[randomimgindex] + "' alt = 'Random Album Image' height = '400px' width = '400px'> ";
    
}

// this line allwos the function to occur immediately everytime the page loads
window.onload = randimageapp();


// for some reason, i had a lot of issues with the global variable for this function. basically, everytime the function ran, it jus said "i" was undefined or NaN and couldn't find it. I was confused because I had to declare "i" outside of the function. if i declared it in the function, then the setTime(slideshowfnc, 2000) would just restart the function and "i" would only be 0 and increment to 1, and return back to 0 and increment to 1, etc. i found a way to solve this, and it was if i made this whole function in its own separate function, and declared i as 0 in its own separate function that calls this first one. that is why i split the slide show application into two functions, but if i could fix the global variable issue, i would have ideally done it all in one function.

// anyways, to begin, I initiate a flag and declare "i"

var flag;
var i = 0;

// in this function, I check if "i" is 4. if it is, I reset it. if not, I increment.
function slideshowfnc () {

    if (i == 4) {
        i = 0;
    }
    else {
        i = i + 1;
    }
    
    // after incrementing, I can set the image source from the html page to the new element in the array of images
    document.getElementById("change").src = imagearray[i];
    // I use setTimeout to reset THIS function ever 2 seconds
    flag = setTimeout(slideshowfnc, 2000);
    
}

// as I explained above, for some reason, it was not recognizing "i" as a global variable, so I made this function where I set "i" to 0 and then execute the function that repeats. this is the function associated with the button.
function slideshowstart () {
    i = 0;
    slideshowfnc();
    
}

// this function is activated by the stop button, and clears the setTimeout flag.
function slideshowstop () {
    
    clearTimeout(flag);
    
}


// for the crap game i created 4 variables to hold the die values, die sum, and amount being bet
var die1;
var die2;
var diesum;
var betamount;


// this function rolls two die with math.random. then i add the sum and store the bet value. i display the images based on the values as well and make them visible.
function rolldice () {
    die1 = Math.floor(Math.random() * Math.floor(6)) + 1;
    die2 = Math.floor(Math.random() * Math.floor(6)) + 1;
    diesum = die1 + die2;
    betamount = document.getElementById("betamount").value;
    document.getElementById("diesum").innerHTML = "You rolled a " + diesum;
    document.getElementById("dice1image").src = "die" + die1 + ".png";
    document.getElementById("dice2image").src = "die" + die2 + ".png";
    document.getElementById("diceimages").style.visibility = "visible";
    
    // these if statements tell the user if they won, lost, or should keep going
    if (diesum == 7 || diesum == 11) {
        document.getElementById("result").innerHTML = "You won $" + betamount + "! Congratulations!";

    } else if (diesum == 2 || diesum == 3 || diesum == 12) {
        document.getElementById("result").innerHTML = "Oof, you just crapped out! Sorry but you lost $" + betamount + " dollars. Better luck next time!";

    } else {
        document.getElementById("result").innerHTML = "Neither a win, nor a crap out. Roll again to see what happens!";
    }
    
    
}



// to create my nyucalendar i decided to impliment multidimensional arrays
function nyucalendar() {
    
    // first i create a simple array
    var fullcalendar = new Array(12);

    // then in a for loop, i create arrays at each array value, therefore making a multidimensional array of [months] and [days]
    for (i=0; i<12; i++) {
        fullcalendar[i] = new Array(31);
    }
    
    // here i fill in the values of the days in the year that are unique. note that the day and month are always 1 less than what they would be. this is because arrays start at 0. so [8][1] is actually talking about september 2nd, 9/2
    fullcalendar[8][1] = "Labor Day";
    fullcalendar[9][13] = "Fall Recess";
    fullcalendar[10][26] = "Thanksgiving Break";
    fullcalendar[10][27] = "Thanksgiving Break";
    fullcalendar[10][28] = "Thanksgiving Break";
    // to make the longer ones easier, i jus used a for loop
    for (i=20; i<32; i++) {
        fullcalendar[11][i] = "Winter Break";
    }   
    for (i=0; i<26; i++) {
        fullcalendar[0][i] = "Winter Break";
    }   
    fullcalendar[1][16] = "President's Day";
    fullcalendar[2][15] = "Spring Break";
    fullcalendar[2][16] = "Spring Break";
    fullcalendar[2][17] = "Spring Break";
    fullcalendar[2][18] = "Spring Break";
    fullcalendar[2][19] = "Spring Break";
    
    for (i=19; i<32; i++) {
        fullcalendar[4][i] = "Summer Break";
    }
    for (i=0; i<32; i++) {
        fullcalendar[5][i] = "Summer Break";
    }
    for (i=0; i<32; i++) {
        fullcalendar[6][i] = "Summer Break";
    }
    for (i=0; i<32; i++) {
        fullcalendar[7][i] = "Summer Break";
    }
    
    // then i create a date variable with the value the user input. i extract from it the month, year, and day. the month is always 1 less when u use getUTCMonth which is good, since its what we want. but the day is not, so we subtract 1 so it matches our array
    var date = new Date(document.getElementById("userdate").value);
    var month = date.getUTCMonth();
    var year = date.getUTCFullYear();
    var day = date.getUTCDate()-1;
    var specialday = fullcalendar[month][day];
    
    // here we will check input. if the years are out of range we tell the user and return the function
    if (year < 2019) {
        document.getElementById("output").innerHTML = "Date out of range";
        return;
    } else if (year > 2020) {
        document.getElementById("output").innerHTML = "Date out of range";
        return;     
    // if the years are in range but not during the school year we do the same
    } else if ((year == 2019) && (month < 8)) {
        document.getElementById("output").innerHTML = "Date out of range";
        return;
    } else if ((year == 2020) && (month > 7)) {
        document.getElementById("output").innerHTML = "Date out of range";
        return;
    // we also do the same for the months with less than 31 days
    } else if ((month==1) && (day > 27)) {
        document.getElementById("output").innerHTML = "Not a real day";
        return;
    } else if ((month==3||month==5||month==8||month==10) && (day > 29)) {
        document.getElementById("output").innerHTML = "Not a real day";
        return;
    }
    
    // now we check if the day the user specified has anything going on. if so, we display, if not, we let them know
    if (fullcalendar[month][day] != undefined) {
        document.getElementById("output").innerHTML = fullcalendar[month][day];
    } else {
        document.getElementById("output").innerHTML = "This is not a NYU Holiday";
    }

    // finally, i use a bunch of if statements to display the image and citation for the appropriate days
    if (specialday == "Labor Day") {
        document.getElementById("holidaypicture").src = "labor.jpg";
        document.getElementById("cite").innerHTML = "[Picture from Nassauclerk.com]"
    }
    if (specialday == "Fall Recess") {
        document.getElementById("holidaypicture").src = "fall.jpg";
        document.getElementById("cite").innerHTML = "[Picture from USA Today]"
    }
    if (specialday == "Thanksgiving Break") {
        document.getElementById("holidaypicture").src = "giving.jpg";
        document.getElementById("cite").innerHTML = "[Picture from Forbes]"
    }
    if (specialday == "Winter Break") {
        document.getElementById("holidaypicture").src = "winter.jpg"; 
        document.getElementById("cite").innerHTML = "[Picture from Wikipedia]"
    }
    if (specialday == "President's Day") {
        document.getElementById("holidaypicture").src = "pres.jpg";
        document.getElementById("cite").innerHTML = "[Picture from USA Today]"
    }
    if (specialday == "Spring Break") {
        document.getElementById("holidaypicture").src = "spring.jpg";
        document.getElementById("cite").innerHTML = "[Picture from time.com]"
    }
    if (specialday == "Summer Break") {
        document.getElementById("holidaypicture").src = "summer.jpg"; 
        document.getElementById("cite").innerHTML = "[Picture from nbcnews]"
    }

    
}

