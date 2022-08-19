alert("I'm invoked!");

//---------------------------------------------------------

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working

//-------------------------------------------------------

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( 'hello ${name}' ); // "Guvi geek"

//--------------------------------------------------

let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

//--------------------------------------------------

var n = "2" > "12";
//Don't touch below this
if (n) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//---------------------------------------------------------

let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

//------------------------------------

let login = 'Employee';
let message = (login == 'Employee') ?  
(login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '':
console.log(message);

//=-----------------------------------------------

let message1;
if (null || 2 || undefined )
{
 let message1 = "welcome boss";
}
else
{
 let message1 = "Go away";
}
  console.log(message1);

  //-----------------------------------------------

  let i = 3;
  while (i) {
    console.log( --i );
  }

  //------------------------------------------

  let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)

//---------------------------------------------

for (let num = 2; num <= 20; num += 1) {
    console.log(num)
  }

//----------------------------------------------

let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}