

let timer = document.querySelector('.timer');
let interval 


stopTimer =()=>{
    clearInterval(interval);
   
    timer.innerHTML =
    `00:00:00`;

}

startTimer = () => {
  clearInterval(interval)

  let hour = 0;
  let minute = 0;
  let second = 0;

  interval = setInterval(() => {
    //we start the timer

    timer.innerHTML = 
    `${hour < 10 ? `0${hour}` : `${hour}`}:${minute < 10 ? `0${minute}` : `${minute}`}:${second < 10 ? `0${second}` : `${second}`}`;

    // increment seconds
    second++;
    if(second == 60){
      minute++;
      second = 0;
    }

    if(minute == 60){
      hour++;
      minute = 0;
    }

  },1000);
}