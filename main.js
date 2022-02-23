
const countdown = () => {
  const clock = document.querySelector('.countdown');
  const numbers = document.querySelectorAll('.txt');
  const countDate = new Date("February 28, 2023 00:00:00").getTime();
  const currentTime = new Date().getTime();
  
  const gap = countDate - currentTime;
  
  
  //Calculations
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  
  //countdown
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute) ;
  const textSecond = Math.floor((gap % minute) / second);
  
  //insert to DOM
  document.querySelector('.day').innerText = textDay;
  document.querySelector('.hour').innerText =
  textHour;
  document.querySelector('.minute').innerText =
  textMinute;
  document.querySelector('.second').innerText = 
  textSecond;
  
  //round off to tenth
  numbers.forEach((number)=>{
    if(number.innerText < 10){
      number.innerText = `0${number.innerText}`;
    }
  });
  if (gap < 0){
    clearInterval(countdown);
    clock.style.display = 'none';
    const article = document.querySelector('.article');
    const section = document.querySelector('.container');
    section.style.marginTop = '-80px';
    article.innerHTML = `
           <div>
      <h1>Babawale Al-Ameen O.</h1>
      <h1>Happy Birthday</h1>
      <p style='font-weight:600;'>
      It's another day with a greatful heart🥰. Being me all year long is far too much to celebrate😍. Getting up for a greater task🔥. Dare to think different; be as unique as you are 💯. Take your own journey, step by step you'll go far 🕌. Today is your birthday💃! A new chapter for a new age 😌. A new story to live by 🥺; the greatest chance to turn the page🔥🔥🔥. Ride on, Champion!👊 Have a blast.
      </p>
    </div>

    `;
    
  }
  
  
  
}
function bubbles(){
  const count = 200;
  const section = document.querySelector('section');
  
  let i = 0;
  while(i < count){
    let bubble = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let size = Math.random() * 10;
    bubble.style.left = x + 'px';
    bubble.style.top = y + 'px';
    bubble.style.width = 1 + size + 'px';
    bubble.style.height = 1 + size + 'px';
    
    section.appendChild(bubble);
    i++
  }
};
bubbles();
setInterval(countdown, 1000);
