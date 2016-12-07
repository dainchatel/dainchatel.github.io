const buttonNodeList = document.querySelectorAll('div div div');
  for (let aButton of buttonNodeList) {
    aButton.addEventListener('click', becomeX);
}


const didXWin = function isItX() {
  if ((buttonNodeList[0].className == buttonNodeList[1].className && buttonNodeList[0].className == buttonNodeList[2].className && buttonNodeList[0].className == 'xsquare') || (buttonNodeList[3].className == buttonNodeList[4].className && buttonNodeList[3].className == buttonNodeList[5].className && buttonNodeList[3].className == 'xsquare') || (buttonNodeList[6].className == buttonNodeList[7].className && buttonNodeList[6].className == buttonNodeList[8].className && buttonNodeList[6].className == 'xsquare') || (buttonNodeList[0].className == buttonNodeList[3].className && buttonNodeList[0].className == buttonNodeList[6].className && buttonNodeList[0].className == 'xsquare') || (buttonNodeList[1].className == buttonNodeList[4].className && buttonNodeList[1].className == buttonNodeList[7].className && buttonNodeList[1].className == 'xsquare') || (buttonNodeList[2].className == buttonNodeList[5].className && buttonNodeList[2].className == buttonNodeList[8].className && buttonNodeList[2].className == 'xsquare') || (buttonNodeList[0].className == buttonNodeList[4].className && buttonNodeList[0].className == buttonNodeList[8].className && buttonNodeList[0].className == 'xsquare') || (buttonNodeList[2].className == buttonNodeList[4].className && buttonNodeList[2].className == buttonNodeList[6].className && buttonNodeList[2].className == 'xsquare') ) {
    document.getElementById('xwins').setAttribute('class', 'slide');
  }
  else if ((buttonNodeList[0].className != 'unit') && (buttonNodeList[1].className != 'unit') && (buttonNodeList[2].className != 'unit') && (buttonNodeList[3].className != 'unit') && (buttonNodeList[4].className != 'unit') && (buttonNodeList[5].className != 'unit') && (buttonNodeList[6].className != 'unit') && (buttonNodeList[7].className != 'unit') && (buttonNodeList[8].className != 'unit')  ){

    document.getElementById('scratch').setAttribute('class', 'slide');
  }

}

const didOWin = function isItO() {
  if ((buttonNodeList[0].className == buttonNodeList[1].className && buttonNodeList[0].className == buttonNodeList[2].className && buttonNodeList[0].className == 'osquare') || (buttonNodeList[3].className == buttonNodeList[4].className && buttonNodeList[3].className == buttonNodeList[5].className && buttonNodeList[3].className == 'osquare') || (buttonNodeList[6].className == buttonNodeList[7].className && buttonNodeList[6].className == buttonNodeList[8].className && buttonNodeList[6].className == 'osquare') || (buttonNodeList[0].className == buttonNodeList[3].className && buttonNodeList[0].className == buttonNodeList[6].className && buttonNodeList[0].className == 'osquare') || (buttonNodeList[1].className == buttonNodeList[4].className && buttonNodeList[1].className == buttonNodeList[7].className && buttonNodeList[1].className == 'osquare') || (buttonNodeList[2].className == buttonNodeList[5].className && buttonNodeList[2].className == buttonNodeList[8].className && buttonNodeList[2].className == 'osquare') || (buttonNodeList[0].className == buttonNodeList[4].className && buttonNodeList[0].className == buttonNodeList[8].className && buttonNodeList[0].className == 'osquare') || (buttonNodeList[2].className == buttonNodeList[4].className && buttonNodeList[2].className == buttonNodeList[6].className && buttonNodeList[2].className == 'osquare') ) {
    document.getElementById('owins').setAttribute('class', 'slide');
  }
}


const differentColors = setInterval(function discoBoard() {
  const allDivs = document.querySelectorAll('.unit');
  for (let myDiv of allDivs) {
  const randomRGB = ('rgb(' + Math.floor(255*Math.random())) + ',' + (Math.floor(255*Math.random())) + ',' + (Math.floor(255*Math.random())) + ')';
  myDiv.style.backgroundColor = randomRGB;
  }
  }, 0750);









function becomeX(aButton) {
  this.innerHTML = 'X';
  this.setAttribute('class', 'xsquare');
  this.removeEventListener('click', becomeX);
  const buttonNodeList = document.querySelectorAll('.unit');
    for (let aButton of buttonNodeList) {
    aButton.removeEventListener('click', becomeX);
    aButton.addEventListener('click', becomeO);
    }
  didXWin();
}

function becomeO(aButton) {
  this.innerHTML = 'O';
  this.setAttribute('class', 'osquare');
  this.removeEventListener('click', becomeO);
  const buttonNodeList = document.querySelectorAll('.unit');
    for (let aButton of buttonNodeList) {
    aButton.removeEventListener('click', becomeO);
    aButton.addEventListener('click', becomeX)
    }
  didOWin();
}

function reLoad() {
  window.location.reload();
}

const playAgain = document.querySelectorAll('button');
  for (let aPlayAgain of playAgain) {
    aPlayAgain.addEventListener('click', reLoad);
  }


