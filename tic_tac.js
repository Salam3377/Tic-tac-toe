const playerX = "X"
const playerO = 'O'
                                                                     // _______incomplete______
let winner_p = document.querySelector('.winner > p');
const c1 = document.getElementById('0')
const c2 = document.getElementById('1')
const c3 = document.getElementById('2')
const c4 = document.getElementById('3')
const c5 = document.getElementById('4')
const c6 = document.getElementById('5')
const c7 = document.getElementById('6')
const c8 = document.getElementById('7')
const c9 = document.getElementById('8')


let win = () => {
 
    if(c1.textContent === c2.textContent && c2.textContent === c3.textContent && c1.textContent !='' ) {
      return true;
    }
    else if(c4.textContent === c5.textContent && c5.textContent === c6.textContent && c4.textContent != '') {
      return true;
    }
    else if(c7.textContent === c8.textContent && c8.textContent === c9.textContent && c7.textContent != '') {
      return true;
    }
    else if(c1.textContent === c4.textContent && c4.textContent === c7.textContent && c1.textContent != '') {
      return true;
    }
    else if(c2.textContent === c5.textContent && c5.textContent === c8.textContent && c2.textContent != '') {
      return true;
    }
    else if(c3.textContent === c6.textContent && c6.textContent === c9.textContent && c3.textContent != '') {
      return true;
    }
    else if(c1.textContent === c5.textContent && c5.textContent === c9.textContent && c1.textContent != '') {
      return true;
    }
    else if(c3.textContent === c5.textContent && c5.textContent === c7.textContent && c3.textContent != '') {
      return true;
    } else {return false}
}


// to start the game with first move of 'X'
let start = () => {
  let next = 0;
  let cells = document.querySelectorAll('td');
	for(let cell of cells) {
		cell.addEventListener('click',function func() {
			this.textContent = (['X', 'O'][next % 2]);		
			next++;
			this.removeEventListener('click', func);
        if(win()) {
         winner_p.innerHTML = this.textContent + " Won!"
          // incomplete
        } else if(next === 9) {
          winner_p.innerHTML= "It's a draw"
        //incomplete
      }
      })
	}
}
  
start()



// reset btn clears table starts over
const res = () => {
  let cell = document.getElementsByClassName('cell')
  Array.from(cell).forEach((element) => {
    element.innerText = ""
    if(element.innerText == "") {
      winner_p.innerHTML = ""
      return start()
    }
  })
};
reset.addEventListener('click', res)