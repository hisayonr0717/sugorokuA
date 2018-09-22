var interval;
function startSugoroku(){
  var sugorokuNumber = document.getElementById('sugoroku-number');
  var numbers = [1,2,3,4,5,6];
  interval = setInterval(function(){
    sugorokuNumber.innerHTML = numbers[Math.floor(Math.random() * numbers.length)];
  }, 50);
}
function stopSugoroku(){
  clearInterval(interval);
}
