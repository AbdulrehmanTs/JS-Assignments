// Assginment Node.6


// chapter#1 task#1
// alert("Hello world");


// chapter#1 task#2
// alert("Error! Please enter a valid password.");


// chapter#1 task#3
// alert("Welcome to JS Land... \n Happy Coding!");


// chapter#1 task#4
// alert("Welcome to JS Land...");
// alert("Happy Coding!")


// chapter#1 task#5
// alert("Hello... I can JS through my web browser's console");


// chapter#1 task#6
// alert("Hello world!");


// ############################ chapter#2 ##########################
// chapter#2 task#1
// var username;


// chapter#2 task#2
// var myName= "AbdulrehmanTahir";


// chapter#2 task#3
// var message = "Hello World!";
// alert(message);


// chapter#2 task#4
// var name = "Jhone Doe";
// var age = "15 years old";
// var diploma = "Certified Mobile Application Developement";
// alert(name);
// alert(age);
// alert(diploma);


// chapter#2 task#5
// var text ="PIZZA";
// for(var i=0; i<text.length; i+=text){
//     for(var j=i; j>text.length-1; j+=text){
//         alert(text[j]);
//     }
//     alert("\n")
// }


// chapter#2 task#6
// var email = "rohi644@gmail.com";
// alert("My email address is "+email);


// chapter#2 task#7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+book);


// chapter#2 task#8
// document.write("Yah! I can write HTML content throgh JavaScript");


// chapter#2 task#9
// var design = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
// alert(design);
// document.write(design)



// ############################ chapter#3 ##########################

// chapter#3 task#1
// var age = 20;
// alert("I am "+ age + " years old");


// chapter#3 task#3
// var birthYear = 2000;
// document.write("My birth year is "+ birthYear);
// document.write("<br>Data type of my declared variable is number");


// chapter#3 task#4 
// var Name = "John Doe";
// var product = "T-shirt";
// var quantity = 5;
// document.write(Name+" ordered "+ quantity+" "+product+"(s)"+"on XYZ Clothing store")



// ############################ chapter#4 ##########################

// chapter#4 task#1
// var name, age, city;


// chapter#4 task#2
// Legal variables
// var myname; // without space
// var my_age; // with underscore
// var $city; // with dollar sign
// var city2; // with number
// var myName; // using camelCase


// illegal variables
// var my name; // with spaces
// var 1name; // with numbers
// var %perscent; // with symbol
// var function; // JavaScript key word
// var 4; // using numbers


// chapter#4 task#3
// document.write("<h1>Rules for naming JS variables</h1><br><br>");
// document.write("Variable names can only contain numbers, $ and _. For example: $my_1stVariable");
// document.write("Variables must begin with a letter, $ or _. For example $name, _name or name");
// document.write("Variable names are case sensitive");
// document.write("Variable names should not be JS keywords");


// ############################ chapter#5 ##########################

// chapter#5 task#1
// Addition
// var num1 = prompt("Enter 1rst number:", "Enter Here");
// var num2 = prompt("Enter 2nd number:", "Enter Here");
// var result = (+num1)+(+num2);
// document.write("Sum of "+num1+" and "+num2+" is "+result);


// chapter#5 task#2
// substraction
// var num1 = prompt("Enter 1rst number:", "Enter Here");
// var num2 = prompt("Enter 2nd number:", "Enter Here");
// var result = (num1)-(num2);
// document.write("Substraction of "+num1+" and "+num2+" is "+result);

// mutiplication
// var num1 = prompt("Enter 1rst number:", "Enter Here");
// var num2 = prompt("Enter 2nd number:", "Enter Here");
// var result = (num1)*(num2);
// document.write("Multiplication of "+num1+" and "+num2+" is "+result);

// division
// var num1 = prompt("Enter 1rst number:", "Enter Here");
// var num2 = prompt("Enter 2nd number:", "Enter Here");
// var result = (num1)/(num2);
// document.write("Division of "+num1+" and "+num2+" is "+result);


// chapter#5 task#3
// var num; 
// document.write("Value after variable declaration is "+num);
// num = 5;
// document.write("<br>initial value: "+num);
// num++;
// document.write("<br>Value after increament is: "+num);
// num+=7;
// document.write("<br>Value after addition is: "+num);
// num--;
// document.write("<br>Value after decreament is: "+ num);
// num %= 3;
// document.write("<br>The reminder is: "+num);


// chapter#5 task#4
// var cost = 600;
// var quantity = 5;
// var totalCost = cost*quantity;
// document.write("Total cost to buy "+quantity+" tickets to a movies is "+totalCost+"PKR.")


// chapter#5 task#5
// document.write("<h1> Table of 4</h1>");
// var i = 1;
// var result = "";
// for (i = 1; i<=10; i++){
//     result = 4*i;
//     document.write("4 x "+i+" = "+result);
//     document.write("<br>")
// }

// chapter#5 task#6
// var celsius = 25;
// convertToF= (celsius *9 /5)+32;
// document.write(celsius +"°C is "+convertToF+"°F");

// var fahrenheit= 70;
// convertToC = (fahrenheit - 32) * 5 / 9;
// document.write("<br>"+fahrenheit +"°F is "+convertToC+"°C");


// chapter#5 task#7

// document.write("<h1>Shopping Cart</h1>");
// var p1 = 650;
// var p2 = 100;
// var Q1 = 3;
// var Q2 = 7;
// var sp = 100;
// var total = (p1*Q1)+(p2*Q2)+sp;

// document.write("Price of item 1 is "+p1);
// document.write("<br>Quantity of item 1 is "+ Q1);
// document.write("<br>Price of item 2 is "+p2);
// document.write("<br>Quantity of item 2 is " +Q2);
// document.write("<br>Shipping Charges "+sp);
// document.write("<br><br>Total cost of youyr order is "+total)


// chapter#5 task#8
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = 804/980*100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("<br>Total marks: "+totalMarks);
// document.write("<br>Marks Obtained"+obtainedMarks);
// document.write("<br>Percentage"+percentage);


// chapter#5 task#9
// var usd = 10;
// var usRate = 104.80;
// var riyal = 25;
// var riyalRate = 28;
// var calculation = (10*104.80)+(25*28)

// document.write("<h1>Currency in PKR</h1>");
// document.write("<br><br><br>Total currency in PKR"+calculation);


// chapter#5 task#10
// var num = ((10 + 5) *10)/2;
// console.log(num)


// chapter#5 task#11
// var currYear = 2020;
// var BirYear = 1999;
// var age = currYear-BirYear;
// document.write("<h1>Age Calculator</h1>")
// document.write("<br>Current Year: "+currYear)
// document.write("<br>Birth Year: "+BirYear)
// document.write("<br>your Age is: "+age)


// chapter#5 task#12
// var raduis = 20;
// var pi = 3.142;
// var circumference = 2*pi*raduis;
// var area = pi*raduis**2;
// document.write("<h1>The Geometrizer</h1>")
// document.write("<br>Raduis of a circle: "+raduis);
// document.write("<br>The circumference is: "+circumference);
// document.write("<br>The area is: "+area);


// chapter#5 task#13

// var snack = "lays";
// var myAge = 20;
// var maxAge = 70;
// var amount = 2;
// var calculation = (maxAge-myAge)*365*2;
// document.write("<h1>The lifetime supply calculator </h1>")
// document.write("<br><br>Favorite snack: "+ snack);
// document.write("<br>Current Age: "+ myAge);
// document.write("<br>Estimated maximum Age: "+ maxAge);
// document.write("<br>Amount of snacks per day: "+ amount);
// document.write("<br>you will need "+calculation+" "+snack+" to last you until the ripe old age of "+maxAge );



// ############################ chapter#6-9 ##########################

// chapter#6-9 task#1
// var a = 10;
// document.write("Result:")
// document.write("<br> The value of a is "+a);
// document.write("<br>.............................")
// document.write("<br><br> The value of ++a is: "+(++a));
// document.write("<br>Now the value of a is: "+a);
// document.write("<br><br>The value of a++ is:"+(a++));
// document.write("<br>Now the value of a is: "+a);
// document.write("<br><br>The value of --a is: "+(--a));
// document.write("<br>Now the value of a is: "+a);
// document.write("<br><br> The value of a-- is: "+(a--));
// document.write("<br>Now the value of a is: "+a);


// chapter#6-9 task#2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<br>a = 2");
// document.write("<br>b = 1");
// document.write("<br>result = "+ "--a - --b + ++b + b--")
// document.write("<br><br> Explaning the stages: ")
// document.write("<br>--a is: "+a);
// document.write("<br>--a - --b is: "+(--a - --b));
// document.write("<br>--a - --b + ++b is: "+(--a - --b + ++b));
// document.write("<br>--a - --b + ++b + b-- is: "+(--a - --b + ++b + b--));


// chapter#6-9 task#3
// var name = prompt("What is your name?","type here");
// alert("Hi "+name);


// chapter#6-9 task#4
// var num = prompt("Enter your number: ");
// var i = 1;
// var result = "";
// if(num >=1){
//     for (i = 1; i<=10; i++){
//         result = num*i;
//         document.write( num +" x "+i+" = "+result);
//         document.write("<br>")
//     }
// }
//     else {
//         for (i = 1; i<=10; i++){
//             result = 5*i;
//             document.write( "5 x "+i+" = "+result);
//             document.write("<br>")
//         }
//     }  


// chapter#6-9 task#5
// var subj1 = prompt("enter subject 1: ");
// var subj2 = prompt("enter subject 2: ");
// var subj3 = prompt("enter subject 3: ");

// var total = 100;
// var obSubj1 = prompt("Enter marks obtained in "+subj1)
// var obSubj2 = prompt("Enter marks obtained in "+subj2)
// var obSubj3 = prompt("Enter marks obtained in "+subj3)

// document.write("<table><tr><th>Subject</th><th>Total marks</th><th>Obtained marks</th><th>Percentage</th></tr><tr><td>"+subj1+"</td><td>"+total+"</td><td>"+obSubj1+"</td><td>"+obSubj1/total*100+"%</td></tr><tr><td>"+subj2+"</td><td>"+total+"</td><td>"+obSubj2+"</td><td>"+obSubj2/total*100+"%</td></tr><tr><td>"+subj3+"</td><td>"+total+"</td><td>"+obSubj3+"</td><td>"+obSubj3/total*100+"%</td></tr><tr><th></th><th>300</th><th>"+((+obSubj1)+(+obSubj2)+(+obSubj3))+"</th><th>"+((+obSubj1)+(+obSubj2)+(+obSubj3))/300*100+"%</th></tr></table>")



// ############################ chapter#9-11 ##########################


// chapter#9-11 task#1
// var city = prompt("Enter any city name of pakistan: ");
// if (city == "karachi"){
//     alert("welcom to city of lights!");
// }
// else if(city == "lahore"){
//     alert("welcom to city of Happiness!");
// }
// else {
//     alert("welcom to "+city+"!");
// }



// chapter#9-11 task#2
// var gender = prompt("What is your Gender?");
// if(gender == "male"){
//     alert("Good Morning Sir!");
// }
// else if (gender == "female"){
//     alert("Good Morning Ma'am!")
// }
// else{
//     alert("Only Enter \"Male\" or \"female\"")
// }



// chapter#9-11 task#3
// var color = prompt("what is the color of traffic signal?", "red or yellow or green?");
// if(color == "red"){
//     alert("must stop");
// }
// else if (color == "yellow"){
//     alert("ready to move")
// }
// else if (color == "green"){
//     alert("move now")
// }
// else{
//     alert("Only Enter \"red\" , \"yellow\" or \"green\" or check spelling")
// }





// chapter#9-11 task#4

// var petStat = prompt("how much fuil available in the car?"):
// if (petStat < 0.25){
//     alert("Please refill the petrol in your car!")
// }

// chapter#9-11 task#5
//a
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
// }

//b
// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }

//c
// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } 
// if (c === 13){ alert("condition 2 is true");
 
// } 
// if (++c < 14){ alert("condition 3 is true");
 
// } 
// if(c === 14){ 
//     alert("condition 4 is true");
// }


// d
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ alert("The cost equals");
// }

//e
// if (true){ 
//     alert("True");
// } 
// if (false){ 
//     alert("False"); 
// }



// chapter#9-11 task#6

// var obMarks = prompt("what is your obtained marks?")
// var tMarks = 300;
// var percentage = obMarks/tMarks*100;
// document.write("<h1>Marks Sheet</h1>")
// document.write("<br><br>Total Marks: 300")
// document.write("<br>Marks obtained: "+obMarks);
// document.write("<br>Percentage: "+percentage+"%");
// if(percentage <60){
//     document.write("<br>Grade: Fail")
//     document.write("<br>Remarks: Sorry")
// }
// else if(percentage >=60 && percentage< 70){
//     document.write("<br>Grade: B")
//     document.write("<br>Remarks: You need to improve")
// }
// else if(percentage >=70 && percentage <80){
//     document.write("<br>Grade: A")
//     document.write("<br>Remarks: Good")
// }
// else if (percentage >=80){
//     document.write("<br>Grade: A-one")
//     document.write("<br>Remarks: Excellent")
// }



// chapter#9-11 task#7

// var num = Math.floor(Math.random()*10)+1;
// var guess = prompt("Guess a number from 1 to 10: ");
//  if (guess == num){
//      alert("Bingo! Correct answer>>!")
//  }
//  else if(guess == num+1){
//      alert("Close enough to the correct answer>>!")
//  }
//  else{
//      alert("Try again")
//  }



// chapter#9-11 task#8

// var num = prompt("Enter a number: ");
// var result = num % 3;
// if (result == 0 ){
//     alert(num+" is divisible by 3")
// }
// else{
//     alert(num+" is not divisible by 3");
// }



// chapter#9-11 task#9

// var num = prompt("Enter a number: ");
// var result = num % 2;
// if (result == 0 ){
//     alert(num+" is an even number")
// }
// else{
//     alert(num+" is an odd number");
// }




// chapter#9-11 task#10

// var temp = prompt("What is the tempreture now??", "type here");
// if (temp >10 && temp < 20){
//     alert("OMG! Today's weather is so cool.")
// }
// else if (temp >=20 && temp < 30){
//     alert("Today's weather is cool.")
// }
// else if (temp >=30 && temp < 40){
//     alert("The Weather today is normal.")
// }
// else if (temp >=40 && temp < 50){
//     alert("Tt is too hot outside.")
// }


// chapter#9-11 task#11
// Calculator

// var num1 = prompt("Enter first Number: ", "Here")
// var num2 = prompt("Enter Second Number: ", "Here")
// var operator = prompt("Enter any operator (+,-,*,/,%) ", "Here")
// if(operator == '+'){
//     alert(num1+" + "+num2+" = "+((+num1)+(+num2)));
// }
// else if(operator == '-'){
//     alert(num1+" - "+num2+" = "+(num1-num2));
// }
// else if(operator == '*'){
//     alert(num1+" x "+num2+" = "+(num1*num2));
// }
// else if(operator == '/'){
//     alert(num1+" / "+num2+" = "+(num1/num2));
// }
// else if(operator == '%'){
//     alert(num1+" % "+num2+" = "+Math.floor((num1/num2*100))+"%");
// }



// ############################ chapter#12-13 ##########################


// chapter12-13 task#1
// var char = prompt("Enter a number or a letter to check:");
// if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
//     alert("You entered an upperCase letter");
// }
// else if (char.charCodeAt() >= 97 && char.charCodeAt() <=122){
//     alert("You entered a lowerCase letter")
// }
// else if (char.charCodeAt() >= 48 && char.charCodeAt() <=57){
//     alert("You entered number")
// }
// else{
//     alert("Enter only one character or a number");
// }

// chapter12-13 task#2
// var num1 = +prompt("Enter a number: ");
// var num2 = +prompt("Enter another number: ");
// if (num1 > num2){
//     alert(num1 +" is greater than "+num2+".")
// }
// else if(num2 > num1){
//     alert(num2 +" is greater than "+num1+".")
// }
// else if(num1 == num2){
//     alert(num1 +" and "+num2+ " are same.")
// }
// else{
//     alert("Plz enter Numbers only! ")
// }



// chapter12-13 task#3
// var num = prompt("Enter your number: ");
// if (num == 0){
//     alert("you entered Zero.")
// }
// else if(num < 0){
//     alert("your number is negative")
// }
// else if(num > 0){
//     alert("your number is positive")
// }



// chapter12-13 task#4
// var char = prompt("Enter a character");
// var vowel = "aeiou"
// for (var i = 0; i<=vowel.length; i++){
//     if (char == vowel[i]){
//         alert("True");
//         break;
//     }
//     else{
//         alert("False")
//     }break;
// }



// chapter12-13 task#5
// var pass = "mypassword1234";
// var userPass = prompt("Enter your password: ");
// userPass = userPass.toLowerCase();
// if (userPass===""){
//     alert("Please Enter Your Password")
// }
// else if(userPass === pass){
//     alert("Correct! The password you entered matches the original password.")
// }
// else if (userPass !=  pass){
//     alert("Not correct! ")
// }



// chapter12-13 task#6
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day"; 
// } 
// else{
//     greeting = "Good evening"; 
// }


// chapter12-13 task#7
// var time = +prompt("What is the time now?\n(hint: 1900 = 7pm)");
// if (time >=0000 && time <1200){
//     alert("Good Morning")
// }
// else if(time >= 1200 && time <1700){
//     alert("Good After Noon")
// }
// else if(time >= 1700 && time <2100){
//     alert("Good Evening")
// }
// else if(time >= 2100 && time <=2359){
//     alert("Good night")
// }
// else{
//     alert("Enter correct formate")
// }




// ############################ chapter#14-16 ##########################


// chapter14-16 task#1
// var student = new Array();

// chapter14-16 task#2
// var student = [];

// chapter14-16 task#3
// var arr = ["mango", "graps", "strawberry","banana"];


// chapter14-16 task#4
// var nums = [1,2,3,4,5,6,7,8,9,0];


// chapter14-16 task#5
// var boolean = [true,false];


// chapter14-16 task#6
// var mixArr = [5,"khan", true,];



// chapter14-16 task#7
// document.write("<h1>Qualifications:</h1><br >")
// var qualifications = ["","SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil","PhD"];
// for (var i = 1; i < qualifications.length; i++){
//     document.write("<br >"+i+") "+qualifications[i]);
// }


// chapter14-16 task#8
// var students = ["Amjad", "Saqib", "Saad"];
// var nums = [430, 390, 460];
// var total = 500;
// document.write("Score of "+students[0]+" is "+nums[0]+". Percentage: "+nums[0]/total*100+"%");
// document.write("<br >Score of "+students[1]+" is "+nums[1]+". Percentage: "+nums[1]/total*100+"%");
// document.write("<br >Score of "+students[2]+" is "+nums[2]+". Percentage: "+nums[2]/total*100+"%");


// chapter14-16 task#9

// A
// var colors = ["red", "green", "blue", "yellow","pink", "purple"];
// document.write(colors)
// var newColor = prompt("hey what color do you want to add to the beginning?")
// colors.unshift(newColor);
// document.write("<br ><br >"+colors);

// B
// var colors = ["red", "green", "blue", "yellow","pink", "purple"];
// document.write(colors)
// var newColor = prompt("hey what color do you want to add to the end?")
// colors.push(newColor);
// document.write("<br ><br >"+colors);


// C
// var colors = ["red", "green", "blue", "yellow","pink", "purple"];
// document.write(colors)
// colors.unshift("black", "orange");
// document.write(colors);

// D
// var colors = ["red", "green", "blue", "yellow","pink", "purple"];
// document.write(colors)
// colors.shift();
// document.write("<br ><br >"+colors);


// E
// var colors = ["red", "green", "blue", "yellow","pink", "purple"];
// document.write(colors)
// colors.pop();
// document.write("<br ><br >"+colors);


// F
// var colors = ["red", "green", "blue", "yellow","pink", "purple"];
// document.write(colors)
// var newColor = prompt("what color do you want to add to the array?")
// var index = prompt("In which index?")
// colors.splice(index, 0, newColor);
// document.write("<br ><br >"+colors);


// G
// var colors = ["red", "green", "blue", "yellow","pink", "purple"];
// document.write(colors)
// var index = prompt("from which index delete the color??")
// colors.splice(index, 1);
// document.write("<br ><br >"+colors);



// chapter14-16 task#10

// var scores = [320, 230, 480, 120];
// document.write("Scores of Students: "+scores)
// scores.sort();document.write("Cities list: <br>"+cities);


// scores.sort();document.write("Cities list: <br>"+cities);// document.write("<br > <br >Oredered Scores of Students: "+scores)

// chapter14-16 task#11
// var cities = ["karachi", "lahore", "islamabad", "multan", "pishawar", "gilgit", "hederabad"];
// document.write("Cities list: <br>"+cities);
// var selcCities = cities.slice(1,4)
// document.write("<br><br>Selected Cities list: <br>"+selcCities);


// chapter14-16 task#12
// var arr = ["This", "is" , "my", "cat"];
// document.write("Array: <br >"+arr);

// var arr1 = arr.join(" ");
// document.write("<br ><br >String: <br >"+arr1);


// chapter14-16 task#15
// var arr1 = ["Apple", "Samsung", "motorola", "Nokia", "Sony", "Haier"];

// document.write("<select> ");
// for (var i =0; i<arr1.length; i++){
//     document.write("<option>"+arr1[i]+"</option>");
// }
// document.write("</select> ");







// ############################ chapter#17-20 ##########################

// chapter#17-20 task#3
// for (var i = 1; i<=10; i++){
//     document.write("<br>"+i)
// }

// chapter#17-20 task#4
// var num = +prompt("Enter a number to show its multiplication table");
// var num2 = prompt("Enter length multiplication table")
// document.write("<h1> Table of number "+ num+" Length"+num2 +" </h1>");
// var result = "";
// for (i = 1; i<=num2; i++){
//     result = num*i;
//     document.write(num+" x "+i+" = "+result);
//     document.write("<br>")
// }


// chapter#17-20 task#5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i = 0; i <fruits.length; i++){
//     document.write("<br>"+fruits[i])
// }

// for(var i = 0; i <fruits.length; i++){
//     document.write("<br><br> Element at index "+i+" is "+fruits[i])
// }


// chapter#17-20 task#6
// A
// var num = [];
// document.write("<b>Counting: </b><br >")
// for (var i =0; i <=15; i++){
//     num.push(i);
// }
// document.write(num);

// B
// var num = [];
// document.write("<b>Reverse counting: </b><br >")
// for (var i =0; i <=10; i++){
//     num.push(i);
// }
// var rnum = num.reverse();
// document.write(rnum);


// C
// var num = [];
// document.write("<b>Even: </b><br >")
// for (var i =0; i <=20; i += 2){
//     num.push(i);
// }
// document.write(num);


// D
// var num = [];
// document.write("<b>Odd: </b><br >")
// for (var i =1; i <=20; i += 2){
//     num.push(i);
// }
// document.write(num);


// E
// var num = [];
// document.write("<b>Series: </b><br >")
// for (var i =2; i <=20; i += 2){
//     num.push(i+"k");
// }
// document.write(num);



// chapter#17-20 task#7
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcom to My bakery. What do you want to order Sir/Ma'am?");
// if (items.indexOf(search) !== -1){
//     alert(search+" is available at index "+indexOf(search)+" in our bakery")
// }
// else{
//     alert("We are sorry. "+search+" is not availale is our bakery");
// }

// document.write(a.indexOf(search));



// chapter#17-20 task#10
// var arr = [];
// for (var i =5; i<=100; i+=5){
//     arr.push(i);
// }
// document.write(arr);
