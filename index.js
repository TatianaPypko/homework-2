const firstName = prompt("What's your name?", "");
const patronym = prompt("What's your patronym?", "");
const lastName = prompt("What's your last name?", "");
alert(`You are registered, ${firstName || '_'} ${patronym || '_'} ${lastName || '_'}!`);

let string = prompt("Enter number");
let result = '';
for (const iterator of string) {
  result += iterator + ' '
}
console.log(result);