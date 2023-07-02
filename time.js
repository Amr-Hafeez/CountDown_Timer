function play() {
    let audio = new Audio("sound/AlarmSound.mp3");
    setTimeout(() => {
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        alert("Time's up!");
      }, 3000);
    }, 0);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    let countDownInterval;
  
    document.querySelector("#reset").addEventListener("click", function (event) {
      clearInterval(countDownInterval);
      document.querySelector("#hours input").value = "00";
      document.querySelector("#minutes input").value = "00";
      document.querySelector("#seconds input").value = "00";
    });
  
    document.querySelector("#stop").addEventListener("click", function (event) {
      clearInterval(countDownInterval);
    });
  
    document.querySelector("#start").addEventListener("click", function (event) {
      let startHour = parseInt(document.querySelector("#hours input").value);
      let startMinute = parseInt(document.querySelector("#minutes input").value);
      let startSecond = parseInt(document.querySelector("#seconds input").value);
      startTimer(startHour, startMinute, startSecond);
    });
  
    function startTimer(startHour, startMinute, startSecond) {
      let totalSeconds = startHour * 3600 + startMinute * 60 + startSecond;
  
      countDownInterval = setInterval(() => {
        let remainingHours = Math.floor(totalSeconds / 3600);
        let remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
        let remainingSeconds = Math.floor((totalSeconds % 3600) % 60);
        remainingMinutes = remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
        remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
       // console.log(remainingHours + " " + remainingMinutes + " " + remainingSeconds);
  
        document.querySelector("#hours input").value = remainingHours;
        document.querySelector("#minutes input").value = remainingMinutes;
        document.querySelector("#seconds input").value = remainingSeconds;
  
        if (totalSeconds === 0) {
          clearInterval(countDownInterval);
          document.querySelector("#hours input").value = "00";
          document.querySelector("#minutes input").value = "00";
          document.querySelector("#seconds input").value = "00";
          play(); // play Alarm sound
          //   alert("Time's up!"); // this will block the playing sound so I moved it into the function play()
        }
        totalSeconds--;
      }, 1000);
    }
  });
  