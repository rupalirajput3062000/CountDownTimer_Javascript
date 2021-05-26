const calcFunction = () => {
  let calDate = new Date("29 may, 2021 14:00:00").getTime();
  let curDate = new Date().getTime();
  const mainData = document.getElementById("main_data");
  let diff = calDate - curDate;

  let day = Math.floor(diff / (24 * 60 * 60 * 1000));
  let hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((diff % (60 * 1000)) / 1000);
  mainData.innerHTML = ` ${day} d : ${hours} hr :  ${minutes} min : ${seconds} sec `;
};

calcFunction();
setInterval(calcFunction, 1000);
