// ending date-current date
const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minsel = document.getElementById('mins');
const secsel = document.getElementById('secs');



const newYears = "1 1 2022";


function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const diff = newYearsDate - currentDate;

  const secs = (diff / 1000) ;

  const days = Math.floor(secs / 3600 / 24);
  const hours = Math.floor(secs / 3600) % 24;
  const mins = Math.floor(secs / 60) % 60;
  const seconds = Math.floor(secs) % 60 ;

  daysel.innerHTML= days;
  hoursel.innerHTML=hours;
  minsel.innerHTML=mins;
  secsel.innerHTML=seconds;

}
//intial call
countDown();
setInterval(countDown, 1000);
