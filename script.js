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