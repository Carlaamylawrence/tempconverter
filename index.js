function convertCelsius() {
  let celsius = parseInt(document.getElementById("celsius").value);

  console.log(celsius, fahrenheit);
  document.querySelector("#answercelsius").innerHTML;
  let ctemp = (celsius * (9 / 5) + 32).toFixed(0);
  answerincelsius.innerHTML = ctemp + "F";
}

function convertFahrenheit() {
  let fahrenheit = parseInt(document.getElementById("fahrenheit").value);
  document.querySelector("#answerfahrenheit").innerHTML;
  let ftemp = ((fahrenheit - 32) * (5 / 9)).toFixed(0);
  answerinfahrenheit.innerHTML = ftemp + "C";
}
