window.onload = function () {
  var buttons = document.getElementsByTagName('span'),
      result = document.querySelectorAll('.result p')[0],
      clear = document.getElementsByClassName('clear')[0];
  
  for (var i = 0; i < buttons.length; i += 1) {
    if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } else {
      buttons[i].addEventListener("click", addValue(i));
    }
  }
  
  clear.onclick = function () {
    result.innerHTML = '';
  };  
  
  function addValue(i) {
    return function () {
      if (buttons[i].innerHTML === '÷') {
         result.innerHTML  += '/';
      } else if (buttons[i].innerHTML === 'x') {
         result.innerHTML  += '*'; 	
      } else if(buttons[i].innerHTML === 'x<sup>2</sup>'){
			   result.innerHTML  =Math.pow(result.innerHTML,2);
			} else if(buttons[i].innerHTML === 'sqrt'){
				 result.innerHTML = Math.sqrt(result.innerHTML);
			}	else if(buttons[i].innerHTML === '+/-'){
				 result.innerHTML +='-';
			} else {
					result.innerHTML += buttons[i].innerHTML;
			}
    };
  }
 
  function calculate(i) {
    return function () {
			var final_res = result.innerHTML;

			var finalresult = final_res.replace(/\d+/g, function(numb){ 
				return parseInt(numb, 10);
			});
			
			  
      result.innerHTML = eval(finalresult);
    };
  }
};