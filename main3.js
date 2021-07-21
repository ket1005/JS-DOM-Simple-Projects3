/*
3) Counter project
-create a HTML page with 2 buttons (with + and - names) and a label that will display current value
- when user clicks on the button with "+" name the counter value should be increased by one
- when user clicks on the button with "-" name the counter value should be decreased by one
- Counter value should always be greater than zero
*/
(function (){
  const buttons = document.querySelectoAll(".counterBtnr");
  let count =0;

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
    if (button.classList.contains(".incrBtn")) {
        count--;
    }else if(button.classList.contains(".decrBtn")) {
        count++;
    }
    const counter = document.querySelector("#counter");
    counter.textContent = count;

    if(count<0){
        conter.style.color = "red";
    }else if(count>0){
        conter.style.color = "green";
    }else{
        conter.style.color = "#3333";
    }
  })
});