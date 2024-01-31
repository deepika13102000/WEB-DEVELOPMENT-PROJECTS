let string = "";
let inputField = document.querySelector('input');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerHTML) {
      case '=':
        try {
          string = eval(string);
          inputField.value = string;
        } catch (error) {
          inputField.value = 'Error';
        }
        break;


      case 'C':
        string = "";
        inputField.value = string;
        break;

-[]
        
      

      default:
        string = string + e.target.innerHTML;
        inputField.value = string;
        break;
    }
  });
});