// ####################################### chapter #21-25 ####################################


//   task # 1
// var fname = prompt("Enter your first Name: ");
// var lname = prompt("Enter your last Name: ");
// var fullName = fname + lname;
// document.write(fullName);


//   task # 2
// var input = prompt("write your favorite mobile phone's name;");
// var length = input.length;

// document.write("My favorite phone is: "+input);
// document.write("<br >Length of string: "+length)


//   task # 3
// var string = "pakistani";
// var index = string.indexOf("n");
// document.write("String: "+string);
// document.write("<br> Index of 'n' : "+index);


//   task # 4
// var string = "Hello World";
// var index = string.lastIndexOf("l");
// document.write("String: "+string);
// document.write("<br> Index of 'l' : "+index);


//   task # 5
// var string = "Pakistan";
// var index = string.charAt(2);
// document.write("String: "+string);
// document.write("<br> character at index 3 : "+index);



//   task # 6
// var fname = prompt("Enter your first Name: ");
// var lname = prompt("Enter your last Name: ");
// var fullName = fname.concat(" "+lname);
// document.write(fullName);


//   task # 7
// var city = "Hyderabad";
// document.write("City: "+city);
// var change = city.indexOf("Hyder");
// if (change !== -1){
//     city = city.slice(0, change) + "islam"+ city.slice(change + 5)
// }
// document.write("<br> After replacement: "+ city);


//   task # 8
// var msg = "Ali and Sami are best Freinds. They play cicket and football together.";
// var first = msg.indexOf("and");
// var last = msg.lastIndexOf("and");
// if (first !== -1 && last !== -1){
//     msg = msg.slice(0, first) + "&"+ msg.slice(first, 3) + msg.slice(0, last) + "&"+ msg.slice(last, 3) + " football together";
// }
// document.write(msg);


//   task # 9
// var string = "472";
// document.write("Value: "+string);
// document.write("<br> Type: "+ typeof(string));
// var number = +string;
// document.write("<br> Value: "+ number)
// document.write("<br> Type: "+ typeof(number));


//   task # 10
// var input = prompt("input something: ");
// document.write("User input: "+input);
// document.write("<br>Upper Case: "+input.toUpperCase());


//   task # 11
// var input = prompt("input something: ");
// document.write("User input: "+input);
// document.write("<br>Title Case: "+ (input = input.charAt(0).toUpperCase() + input.slice(1, input.length)));


//   task # 12
// var num = 35.36;
// var string = num.toString();
// document.write("Number: "+ num);
// string = string.replace(".","")
// document.write("<br>Result: "+ string);

//   task # 13
// var username = prompt("Enter your User name:");
// username = username.toString();
// if(username.indexOf("@") !== -1){
//     alert("Please enter a valid username")
// }
// else if(username.indexOf("!") !== -1){
//     alert("Please enter a valid username")
// }
// if(username.indexOf(".") !== -1){
//     alert("Please enter a valid username")
// }
// if(username.indexOf(",") !== -1){
//     alert("Please enter a valid username")
// }
// else{
//     alert("Hi "+username+"\n type anysymbol [@.,!] with your name and check;")
// }



//   task # 14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcom to My bakery. What do you want to order Sir/Ma'am?");
// search = search.toLowerCase();
// if (items.indexOf(search) !== -1){
//     alert(search+" is available at index "+items.indexOf(search)+" in our bakery")
// }
// else{
//     alert("We are sorry. "+search+" is not availale is our bakery");
// }



//   task # 15
// var pass = prompt("What is your password?");
// for (var i = 0; i<pass.length; i++){
//     if (pass.charCodeAt(i)+1 >=! 97 || pass.charCodeAt(i)+1 <=! 122 || pass.charCodeAt(i)+1 >=! 48 || pass.charCodeAt(i)+1 <=! 57){
//     alert("password must be contain numbers and alphabets");
//     break;
//     }
// }

// if (pass.charAt(0) == 0  || pass.charAt(0) > 0 || pass.charAt(0) < 0){
//     alert("can't begin with a number. Please Enter a valid password")
// }
// else if (pass.length < 6){
//     alert("password must be at least 6 characters!")
// }
// else{
//     alert("Correct!")
// }


//   task # 16
// var university = "University of karachi";
// university = university.split("");
// for (var i =0; i<university.length; i++){
//     document.write("<br>"+university[i])
// }


//   task # 17
// var input = prompt("Enter any name: ");
// document.write("User input: "+input)
// document.write("<br> Last charachter of input: "+input[input.length-1])


//   task # 18
// var string = "The quick brown fox jumps over the lazy dog";
// document.write("Text: "+ string)
// string = string.toLowerCase();
// if ( string.indexOf("the") !== -1 && string.lastIndexOf("the") !== -1){
//     document.write("<br>There are 2 occurrence(s) of word 'the' ");
// }


// ####################################### chapter #26-30 ####################################
// Task #1
// var number = prompt("input a positive floating number ");
// document.write("Number: "+number);
// document.write("<br>Round off value: "+Math.round(number));
// document.write("<br>Floor value: "+Math.floor(number));
// document.write("<br>Ceil value: "+Math.ceil(number));


// Task #2
// var number = prompt("input a negative floating number ");
// document.write("Number: "+number);
// document.write("<br>Round off value: "+Math.round(number));
// document.write("<br>Floor value: "+Math.floor(number));
// document.write("<br>Ceil value: "+Math.ceil(number));


// Task #3
// var number = prompt("input a negative number");
// document.write("The absolute value of "+number+" is "+ Math.abs(number));



// Task #4
// var dice = Math.random()*6;
// document.write("Random Dice Value: "+Math.ceil(dice));


// Task #5
// var coin = Math.random()*2;
// coin = Math.ceil(coin);
// if (coin === 1 ){
//     document.write(coin+"<br> Random coin value: Tails");
// }
// else{
//     document.write(coin+"<br> Random coin value: Heads");
// }

// Task #6
// var num = Math.random()*100;
// num = Math.ceil(num);
// document.write("Random number between 1 an 100: "+ num)


// Task #7
// var weight = prompt("Enter your weight in kgs");
// document.write("The weight of user is "+ weight);


// Task #8
// var Rnum = Math.random()*10;
// Rnum = Math.ceil(Rnum);
// var input = prompt("Enter a number between 1 and 10")
// if (Rnum === input){
//     alert("congrats! your number matches")
// }
// else {
//     alert("Try again")
// }





// ####################################### chapter #31-34 ####################################
// Task #1
// var time = new Date()
// document.write(time)


// Task #2
// var monthNames = ["January" , "Fabruary", "March", "April", "May", "June", "July", "Aughust", "September", "Octuber", "November", "December"];
// var time = new Date();
// var month = time.getMonth();
// var thisMonth = monthNames[month]
// document.write(thisMonth)


// Task #3
// var dayNames = ["Sun", "Mon", "Thu", "Wed", "Thu", "Fri", "Sat"];
// var day = new Date();
// var today = day.getDay();
// document.write(dayNames[today]);


// Task #4
// var day = prompt("what day is today?, Enter first 3 character of day name");
// if (day === "sat" || day === "sun"){
//     alert("It's Fun day")
// }
// else{
//     alert("It's not a fun day")
// }


// Task #5
// var day = new Date();
// var day1 = day.getDay();
// document.write(day1);
// if (day1 <= 15){
//     alert("first fifteen days of the month")
// } 
// else{
//     alert("Last days of the mont")
// }


// Task #6
// var current = new Date();
// document.write("Current Date: "+current);
// var milliSeconds = current.getTime();
// document.write("<br> Elapsed milliSeconds since jan 1, 1970: "+ milliSeconds)
// var minutes = milliSeconds/(1000 * 60 * 60);
// document.write("<br> Elapsed minutes since jan 1, 1970: "+ minutes)


// task #7
// var time = new Date();
// var hour = time.getHours();
// if (hour <= 12 ){
//     alert("It's Am")
// }
// else{
//     alert("It's Pm")
// }


// Task #8
// var Laterdate = new Date("Dec 31, 2020");
// document.write(Laterdate)


// Task#9
// var now = new Date();
// var todaymilli = now.getTime();
// var ramzan = new Date("April 24, 2020");
// var raDaymilli = ramzan.getTime();
// var diff = todaymilli - raDaymilli;
// diff = diff/(1000 * 60 * 60 * 24)
// document.write(Math.floor(diff)+" days have been passed since Ramzan (april 24, 2020)");


// Task #10
// var refDate = new Date("Sat Dec 05, 2015 22:50:16");
// document.write("On referance date "+ refDate)
// var tillref = refDate.getTime();
// var date2 = new Date("Jan 1, 2015")
// var till2015 = date2.getTime()
// var elapsed = tillref - till2015;
// var absElapsed = elapsed / (1000*60);
// document.write("<br>"+Math.ceil(absElapsed)+" seconds have been passd since 2015");


// Task #11
// var date = new Date("jun 21, 2020 22:30:15");
// document.write("Current Date: "+ date );
// var date2 = new Date("jun 21, 2020 21:30:15");
// document.write("<br> One hour age, it was "+ date2 );


// Task #12
// var date = new Date("jun 21, 2020 22:38:18")
// document.write("Current Date: "+ date);
// var date100yback = new Date("21 jun, 1920 22:38:18");
// document.write("<br> 100 years back, it was "+ date100yback);


// Task #13
// var age = prompt("What is your age");
// var currentYear = 2020;
// var birthYear = currentYear - age;
// document.write("Your age is: "+age);
// document.write("<br>Your birth year is: "+birthYear);


// Task #14
// var custName = "Abdullah";
// var month = "Jun";
// var units = 300;
// var chargesPUnit = 25;
// var netPayable = units * chargesPUnit;
// var surCharges =  netPayable/100*10 ;
// var duePayable = netPayable + surCharges

// document.write("<h1>K-Electric bill</h1>")
// document.write("<br> <br><br> Customer Name: "+custName)
// document.write("<br> Month: "+month);
// document.write("<br> Number of units: "+units);
// document.write("<br> Charges per unit: "+chargesPUnit);
// document.write("<br><br> Net Amount Payable (Within Due Date): "+netPayable);
// document.write("<br> Late Payment surcharges (10%): "+surCharges);
// document.write("<br> Gross Amount Payable (After Due Date): "+duePayable);



// ####################################### chapter #35-38 ####################################
// Task #1
// function time(){
//     var date = new Date();
//     document.write(date)
// }
// time();


// Task #2
// function greeting(){
//     var fname = prompt("Enter first Name");
//     var lname = prompt("Enter last name");
//     document.write("Hi! "+fname+" "+lname+".")
// }
// greeting();



// Task #3
// function add(){
//     var num1 = prompt("Enter a number");
//     var num2 = prompt("Enter another number");
//     document.write(num1 +" + "+num2+ " = "+ ((+num1)+(+num2)));
// }
// add();


// Task #4
// function calc(){
//     var num1 = prompt("Enter a number:");
//     var operator = prompt("Select operator");
//     var num2 = prompt("Enter second number");

//     switch (operator){
//         case '+':
//             document.write(num1 +" + "+num2+ " = "+ ((+num1)+(+num2)));
//             break;
//         case '-':
//             document.write(num1 +" - "+num2+ " = "+ (num1-num2));
//             break;
//         case '/':
//             document.write(num1 +" / "+num2+ " = "+ (num1/num2));
//             break;
//         case '*':
//             document.write(num1 +" x "+num2+ " = "+ (num1*num2));
//             break;
//         default:
//             document.write("plz select a valid aperator")
//     }
// }
// calc();


// Task #5
// function sqr(a){
//     b = a**2;
//     document.write(b);
// }
// sqr(5);

// Task #6
// function fact(){
//     var input = prompt("Enter a number");
//     var fact= 0;
//     if (input == 0){
//         alert("Plz Enter a valid number")
//     }
//     else{
//         for(var i = 0; i<= input.length; i++){
//             fact = input -1; 
//         }
//         document.write(fact)
//     }
// }
// fact()



// Task #7
// function count(){
//     var a = prompt("Enter starting number")
//     var b = prompt("Enter Ending number")
//     for (var i = a; i<=b; i++){
//         document.write(i +"<br>")
//     }
// }
// count()


// Task#9
// function area(width , height){
//     var area = width*height;
//     document.write("area of ractangle is: "+area)
// }
// area(20, 30);


// Task #10
// function palindrome(){
//     var x = prompt("Enter a word");
//     var check = "";
//     for (var i = x.length -1; i>=0; i--){
//         check += x[i];
//     }
//     if (check == x){
//         document.write(x+" is a palindrome word")
//     }
//     else{
//         document.write(x+" is not a palindrome word")
//     }

// }
// palindrome()


// Task #11
// function TitleCase(){
//     var input = prompt("Enter any text");
//     var split = input.split(" ");
//     var titleCase = [];
//     for (var i = 0; i<split.length; i++){
//         titleCase.push(split[i].slice(0,1).toUpperCase() + split[i].slice(1,split[i].length).toLowerCase());
//     }
//     titleCase = titleCase.join(" ")
//     document.write(titleCase)
// }
// TitleCase()


// Task #12
// function longestWord(input){
//     var split = input.split(" ");
//     var word = split[0];
//     for (var i = 1; i<split.length; i++){
//         if (word.length < split[i].length){
//             word = split[i];
//         }    
//     }
//     document.write(word)
// }
// longestWord("Web Development Tutorial")


// Task #14
// document.write("<h1>The Geometrizer</h1><br><br><br>")

// function calcCircumference(raduis){
//     var Circumference = 2*Math.PI*raduis;
//     document.write("The circumference is "+Math.floor(Circumference))
// }

// function calcArea(raduis){
//     var area = Math.PI*(raduis**2);
//     document.write("The Area is "+Math.floor(area))
// }
// calcCircumference(20);
// calcArea(10);

