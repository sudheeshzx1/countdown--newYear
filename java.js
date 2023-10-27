const day = document.querySelector("#days")
const hurs = document.querySelector("#hours")
const mint = document.querySelector("#minutes")
const scnd = document.querySelector("#second")


function countDown(){
    const currentYear = new Date().getFullYear();
const newDate = new Date(`january 1 ${currentYear+1} 00:00:00`);
const currentDate = new Date();
console.log(newDate);
console.log(currentDate);

const diffrence = newDate-currentDate;
console.log(diffrence/1000/60/60/24);
const days = Math.floor(diffrence/1000/60/60/24);
console.log(days);
const hours = Math.floor((diffrence/1000/60/60)%24);
console.log(hours);
const minutes = Math.floor((diffrence/1000/60)%60);
console.log(minutes);
const second = Math.floor((diffrence/1000)%60);
console.log(second);

day.innerHTML=days;
hurs.innerHTML=hours;
mint.innerHTML=minutes;
scnd.innerHTML=second;



}
setInterval(countDown,1000);

