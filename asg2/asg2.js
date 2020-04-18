/*eslint-env browser*/
// ^^ i added the above line because on brackets it kept giving me an "error" on every line even though everything worked fine. i googled this and it said to include this line just to prevent that many errors showing up for no reason, though they had no affect on the actual program

// Karan Gaikwad, Oct 3, 2019

// Style functions for first the h1 element and then the document itself, where I change the head and subhead sections. I use the Id's of the html elements and change the css with .style

function stylefunctionhead() {
    
    document.getElementById("stylechanger").style.backgroundColor = "red";
    document.getElementById("stylechanger").style.fontSize = "150%";
    document.getElementById("stylechanger").style.border = "2px";
    document.getElementById("stylechanger").style.paddingTop = "20px";
    document.getElementById("stylechanger").style.paddingBottom = "20px";
    document.getElementById("stylechanger").style.color = "blue";
    document.getElementById("stylechanger").style.textAlign = "center";
    
}

function stylefunctiondoc() {
    
    document.getElementById("head").style.color = "white";
    document.getElementById("subhead").style.color = "white";
    document.getElementById("head").style.backgroundColor = "black";
    document.getElementById("subhead").style.backgroundColor = "black";
    document.getElementById("head").style.padding = "20px";
    document.getElementById("subhead").style.padding = "20px";
    document.getElementById("head").style.fontSize = "300%";
    document.getElementById("subhead").style.fontSize = "50%";
    document.getElementById("head").style.border = "solid";
    document.getElementById("subhead").style.border = "solid";
    
}

// prize application. I will use two functions, one to print the array of prizes and another to actually get the prize button

// first i create the two arrays. one to hold the names of the items and one to hold the pictures. notice that i include a apostrophe after the picture titles, it is because that is necessary later for the html because of how I write the .write statement later. also, notice that the names and pictures match up via index
var prizes = ["New Porsche", "New House", "Brand New iPhone", "One Million Dollars", "A Potatoe!"];
var imagearray = ["car.jpg' ", "house.jpg' ", "iphone.jpg' ", "money.jpg' ", "potato.jpg' "];

// the first function just uses a for loop to print out all the list items on the ordered list. then it returns the final statement. i make the "prize" Id equal to that statement this function returns, afterwards
function randArray() {
    var final = "<ol> Prizes! <br>";
    for (i = 0; i < prizes.length; i++) {
        final += " <li> " + prizes[i] + " </li> <br> ";
    }
    final += "</ol>";
    return final;
}
document.getElementById("prize").innerHTML = randArray();

// the second function is the actual onclick function that displays the prize after you press it. i use math.random and math.floor to get the index. i then create a statement that nicely displays the result and prints the prize as well as the picture. here is why i included the apostrophe earlier, it is because of the part next to the img src = 'prizes/ line, where that apostrophe can then be closed by what is in the array.
function winaprize() {
    
    var randomprizeindex = Math.floor(Math.random()*5);
    document.getElementById("prize").innerHTML += "<br> Congratuations! You get a " + prizes[randomprizeindex] + "<br> <img src = 'prizes/" + imagearray[randomprizeindex] + "alt = 'Winning Prize'> ";
    document.getElementById("prizebutton").style = "visibility: hidden;";
}

// Function to swap text. I will use a variable to hold the paragraph 
// elements and then switch them

function swaptxt() {
    
    var temp1 = document.getElementById("p1").innerHTML;
    var temp2 = document.getElementById("p2").innerHTML;
    document.getElementById("p1").innerHTML = temp2;
    document.getElementById("p2").innerHTML = temp1;
    
}


// Function to swap image. It's the same concept as above pretty much except with .src this time

function swapimg() {
    
    var temp3 = document.getElementById("img1").src;
    var temp4 = document.getElementById("img2").src;
    document.getElementById("img1").src = temp4;
    document.getElementById("img2").src = temp3;
    
}

// Function to get a new document

function newDoc() {
    
    // first i create some variables to get the image via ID and its height/width
    var tempimg = document.getElementById("graduation");
    var width = tempimg.clientWidth;
    var height = tempimg.clientHeight;
    
    // i create two arrays with the names of the months and the days of the week
    var montharr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayarr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // here are more variables that capture the day, date, month, and year. they come from the Date() class that i instantiate and name D
    var D = new Date();
    var month = montharr[D.getMonth()];
    var date = D.getDate();
    var year = D.getFullYear();
    var day = dayarr[D.getDay()];
    
    
    // now i use document commands to open and write in a new document, basically using .write with html
    
    document.open();
    document.title = "Graduation: Album by Kanye West";
    document.write('<link rel="stylesheet" type="text/css" href="newdoc.css">');
    
    document.write("<h1>Graduation</h1>");
    document.write("<h3> Kanye West </h3>");
    document.write('<img src="graduation.jpg" alt="Graduation"> </img>');
    
    // i got this blurb from the wikipedia about the album
    document.write("<div><p> Graduation is the third studio album by American rapper Kanye West, released on September 11, 2007 by Roc-A-Fella Records. Recording sessions took place during 2005 to 2007 at Chung King Studios, Sony Music Studios, Chalice Recording Studios, and the Record Plant. It was primarily produced by West himself, with contributions from DJ Toomp, Mike Dean, Nottz, Brian (All Day) Miller, Eric Hudson, Warryn Campbell, Gee Roberson, Plain Pat, and Jon Brion. The album also features guest appearances from recording artists such as Dwele, T-Pain, Lil Wayne, DJ Premier, and Chris Martin of Coldplay. The album's cover art and its interior artwork were designed by Japanese contemporary artist Takashi Murakami, who would also design the cover art for West's collaborative effort with Kid Cudi, eponymously titled Kids See Ghosts (2018). Inspired by stadium tours, house-music and indie rock, Graduation marked a departure from the ornate, soul-based sound of Wests previous releases. He musically progressed to a more anthemic style of composing rap songs that would function well when performing in large arenas. West incorporated layered synthesizers into his hip-hop production and dabbled with electronics while sampling from a wider spectrum of music genres and altering his approach to rapping. Graduation concludes the education theme of Wests first two albums The College Dropout (2004) and Late Registration (2005). Lyrically, the record is introspective in comparison to its predecessors. West dedicated much of his songwriting towards analyzing himself and conveying an ambivalent outlook on his newfound fame and media scrutiny alongside providing inspirational messages of triumph directed at listeners.</p></div>");
    
    // finally, i use the variables i made earlier to display the width, height, and necessary details abt the date
    document.write("<hr>");
    document.write("<div> Width = " + width + " px </div>");
    document.write("<div> Height = " + height + " px </div>");
    document.write("<hr>");
    document.write("<div> You accessed this page on " + day + ", " + month + " " + date + ", " + year + "</div>");
    
}


// here is the last program, which converts miles to feet. i use variables to capture the input and then use math to convert and set the output equal to what i calculated. then i turn it red

function converter() {
    
    var miles = document.getElementById("miles").value;
    var feet = miles * 5280;
    
    var final = feet + "ft";
    document.getElementById("answer").innerHTML = final;
    document.getElementById("answer").style.color = "red";
    
}