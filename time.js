let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");

setInterval(() => {
  let CurrentTime= new Date();
  hrs.innerHTML=CurrentTime.getHours();
  mins.innerHTML=CurrentTime.getMinutes();
  sec.innerHTML=CurrentTime.getSeconds();
}, 1000);
