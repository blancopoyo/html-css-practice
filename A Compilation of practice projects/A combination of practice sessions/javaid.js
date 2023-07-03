// const box = document.getElementById ('box')
// box.innerText ='checking if the id is working with javascript'
// box.innerHTML = '<u>checking if this will be underlined <u/>'


// function myFunction(){
// let person = prompt ('Please enter your name',); 
// if(person == null || person == "")
// { console.log( "user cancelled the prompt,"); } else {console.log('Hello' + person +'! How are you today?') } document.getElementById("demo"). innerHTML = text;}


function addNumbers(...num) { return num1 * num2}
let addedTotal = addNumbers (10, 10)
let addedTotal2 = addNumbers (4,4)

const {firstName, lastName, ...others} = {
firstName: 'tobi',
lastName: 'jide',
companyName: 'Ejiventures',
location: 'Venezia'}
console.log('others')

function addNumberss(greetingName, ... numbers) {
let total = 0;
for(index in numbers) {total = total + numbers [index];}
return `${greetingName}: the total is ${total}`;
}
const newTotal = addNumberss("Nne", 1, 4, 7, 13);
console.log(newTotal);