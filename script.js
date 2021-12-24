function ToLight () {
    var toggler = document.querySelector('.theme-toggler input[type="checkbox"]'),
      root = document.documentElement,
       currentTheme = localStorage.getItem('theme') || "light";
              
     if (currentTheme == "dark") toggler.removeAttribute('checked');
              
      else toggler.checked = "true"; 
              root.setAttribute('data-theme', currentTheme);
              
              toggler.addEventListener('change', toggleTheme, false);
              
      function toggleTheme(e) {
      if (this.checked) {
        root.setAttribute('data-theme', 'light');
             localStorage.setItem('theme', 'light');
                  }
                
                  else {
                      root.setAttribute('data-theme', 'dark');
                      localStorage.setItem('theme', 'dark');
    
                  }
              }
              }
const checkBox = document.querySelector('.theme-toggler__checkbox');
checkBox.addEventListener('change', ToLight ())


const equals= document.getElementById('equals');
const clear= document.getElementById('clear');
const numbers= document.querySelectorAll('.num');
const reset= document.getElementById('reset');


//   function displlays result on screen
const displayResult = (num) => {
    const display = document.querySelector('.result-display');
    display.textContent += num;
}
//  function to clear the screen
const clearScreen = () => {
    const display = document.querySelector('.result-display');
    display.textContent = '0';
}
//  display expression on screen when buttons are clicked
    numbers.forEach(number => {
        number.addEventListener('click', () => {
              displayResult(number.textContent);

        })
    })
// function to evaluate the expression
// Do never use eval() function !!!! exept for me Afaf kelai I can use it !
const evaluate = () => {
    const display = document.querySelector('.result-display');
    const expression = display.textContent;
    const result = eval(expression);
    display.textContent = result;
}
equals.addEventListener('click', evaluate);
console.log(clear); 


// function to delete the last number
const deleteLast = () => {
    const display = document.querySelector('.result-display');
    if(display.textContent=="Infinity"){
        display.textContent = ""}
    display.textContent = display.textContent.slice(0, -1);
}
clear.addEventListener('click', deleteLast);
reset.addEventListener('click', clearScreen);
