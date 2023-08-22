var a = document.createElement("div")
a.setAttribute("id","countdown",)

document.body.append(a)
function startTimer(duration, callback) {
  setTimeout(callback, duration);
}

function countdown(number, callback) {
  if (number >= 0) {
    startTimer(1000, function() {
      updateCountdown(number); // Update countdown display
      countdown(number - 1, callback);
    });
  } else {
    callback();
  }
}

function updateCountdown(number) {
  document.getElementById("countdown").innerHTML = number;
}

countdown(10, function() {
  document.getElementById("countdown").innerHTML = "Happy Independence Day!!!";
});