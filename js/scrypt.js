"use strict"

const tictacField = document.querySelectorAll('.tictac__cell');
const tictacBoard = document.querySelector('.main__tictac');
const resultShow = document.querySelector('.main__result');
const winnerField = document.querySelector('.main__winner');
const headerText = document.querySelector('.header__text');


const winCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

{/* <div class="cross"></div>
<div class="circle"></div>
<div class="cross"></div>
<div class="circle"></div> */}

// for (let c of tictacField) {
//     c.addEventListener('click', () => clickTic(c))
// }
// var i = 0;
// function clickTic(cell) {
//     if (cell.innerHTML == '') {
//         cell.innerHTML = ['<div class="cross"></div>', '<div class="circle"></div>'][i % 2]
//         i++;
//     }
//     // ifWinLite(tictacField)
//     ifWinX(tictacField)
// }

// var win = false;



function tictacGame() {
    var i = 0; // счетчик ходов
    var win = false;
    var draw = false;
    for (let c of tictacField) {
        c.addEventListener('click', function (k) {
            if (!win) {
                if (c.innerHTML == '') {
                    c.innerHTML = ['<div class="cross"></div>', '<div class="circle"></div>'][i % 2]
                    i++;
                }
                ifWinX(tictacField)
            } else {
                k.preventDefault()
            }
            ifDraw()
            if (draw) {
                k.preventDefault()
                tictacBoard.classList.add('_win');
                resultShow.classList.add('_show');
                winnerField.innerHTML = `Победила дружба! (ничья)`;
                headerText.innerHTML = `Крестики и нолики, красаучики!`
            }
        })
    }
    function ifWinX(game) {
        for (let q = 0; q < game.length; q++) {
            if (!win) {
                if (game[q].innerHTML != '') {
                    for (let w of winCombinations) {
                        if (game[q].innerHTML == game[w[0]].innerHTML &&
                            game[q].innerHTML == game[w[1]].innerHTML &&
                            game[q].innerHTML == game[w[2]].innerHTML &&
                            game[q].innerHTML != '') {
                            win = true;
                            winGame();
                        }
                    }
                }
            }
        }
    }
    function winGame() {
        tictacBoard.classList.add('_win');
        if (i % 2 == 0) {
            resultShow.classList.add('_show');
            winnerField.innerHTML = `Победили кружки!`;
            headerText.innerHTML = `Кружки, красаучики!`
        } else {
            resultShow.classList.add('_show');
            winnerField.innerHTML = `Победили крестики!`;
            headerText.innerHTML = `Крестики, красаучики!`
        }
    }
    function ifDraw() {
        for (let c of tictacField) {
            if (c.innerHTML != '' && i == 9 && !win) {
                draw = true;
            }
        }
    }
}

tictacGame()









/*------------------------*/

function ifWin(f) {
    console.log('+')
    if (f[0].innerHTML != '') {
        if (f[0].innerHTML == f[1].innerHTML && f[0].innerHTML == f[2].innerHTML) {
            console.log('win 012')
        } else if (f[0].innerHTML == f[3].innerHTML && f[0].innerHTML == f[6].innerHTML) {
            console.log('win 036')
        } else if (f[0].innerHTML == f[4].innerHTML && f[0].innerHTML == f[8].innerHTML) {
            console.log('win 048')
        }
    }
    if (f[1].innerHTML != '') {
        if (f[1].innerHTML == f[0].innerHTML && f[1].innerHTML == f[2].innerHTML) {
            console.log('win 012')
        } else if (f[1].innerHTML == f[4].innerHTML && f[1].innerHTML == f[7].innerHTML) {
            console.log('win 147')
        }
    }
    if (f[2].innerHTML != '') {
        if (f[2].innerHTML == f[0].innerHTML && f[2].innerHTML == f[1].innerHTML) {
            console.log('win 012')
        } else if (f[2].innerHTML == f[5].innerHTML && f[2].innerHTML == f[8].innerHTML) {
            console.log('win 258')
        } else if (f[2].innerHTML == f[4].innerHTML && f[2].innerHTML == f[6].innerHTML) {
            console.log('win 246')
        }
    }
    if (f[3].innerHTML != '') {
        if (f[3].innerHTML == f[0].innerHTML && f[3].innerHTML == f[6].innerHTML) {
            console.log('win 036')
        } else if (f[3].innerHTML == f[4].innerHTML && f[3].innerHTML == f[5].innerHTML) {
            console.log('win 345')
        }
    }
    if (f[4].innerHTML != '') {
        if (f[4].innerHTML == f[0].innerHTML && f[4].innerHTML == f[8].innerHTML) {
            console.log('win 048')
        } else if (f[4].innerHTML == f[1].innerHTML && f[4].innerHTML == f[7].innerHTML) {
            console.log('win 147')
        } else if (f[4].innerHTML == f[2].innerHTML && f[4].innerHTML == f[6].innerHTML) {
            console.log('win 246')
        }
        else if (f[4].innerHTML == f[3].innerHTML && f[4].innerHTML == f[5].innerHTML) {
            console.log('win 345')
        }
    }
    if (f[5].innerHTML != '') {
        if (f[5].innerHTML == f[3].innerHTML && f[5].innerHTML == f[4].innerHTML) {
            console.log('win 345')
        } else if (f[5].innerHTML == f[2].innerHTML && f[5].innerHTML == f[8].innerHTML) {
            console.log('win 258')
        }
    }
    if (f[6].innerHTML != '') {
        if (f[6].innerHTML == f[0].innerHTML && f[6].innerHTML == f[3].innerHTML) {
            console.log('win 036')
        } else if (f[6].innerHTML == f[4].innerHTML && f[6].innerHTML == f[2].innerHTML) {
            console.log('win 246')
        } else if (f[6].innerHTML == f[7].innerHTML && f[6].innerHTML == f[8].innerHTML) {
            console.log('win 678')
        }
    }
    if (f[7].innerHTML != '') {
        if (f[7].innerHTML == f[1].innerHTML && f[7].innerHTML == f[4].innerHTML) {
            console.log('win 147')
        } else if (f[7].innerHTML == f[6].innerHTML && f[7].innerHTML == f[8].innerHTML) {
            console.log('win 678')
        }
    }
    if (f[8].innerHTML != '') {
        if (f[8].innerHTML == f[2].innerHTML && f[8].innerHTML == f[5].innerHTML) {
            console.log('win 258')
        } else if (f[8].innerHTML == f[6].innerHTML && f[8].innerHTML == f[7].innerHTML) {
            console.log('win 678')
        } else if (f[8].innerHTML == f[0].innerHTML && f[8].innerHTML == f[4].innerHTML) {
            console.log('win 048')
        }
    }
}
function ifWinLite(f) {
    console.log('+')
    if (f[0].innerHTML != '') {
        if (f[0].innerHTML == f[1].innerHTML && f[0].innerHTML == f[2].innerHTML) {
            console.log('win 012')
        } else if (f[0].innerHTML == f[3].innerHTML && f[0].innerHTML == f[6].innerHTML) {
            console.log('win 036')
        } else if (f[0].innerHTML == f[4].innerHTML && f[0].innerHTML == f[8].innerHTML) {
            console.log('win 048')
        }
    }
    if (f[1].innerHTML != '') {
        if (f[1].innerHTML == f[4].innerHTML && f[1].innerHTML == f[7].innerHTML) {
            console.log('win 147')
        }
    }
    if (f[2].innerHTML != '') {
        if (f[2].innerHTML == f[5].innerHTML && f[2].innerHTML == f[8].innerHTML) {
            console.log('win 258')
        } else if (f[2].innerHTML == f[4].innerHTML && f[2].innerHTML == f[6].innerHTML) {
            console.log('win 246')
        }
    }
    if (f[3].innerHTML != '') {
        if (f[3].innerHTML == f[4].innerHTML && f[3].innerHTML == f[5].innerHTML) {
            console.log('win 345')
        }
    }
    if (f[6].innerHTML != '') {
        if (f[6].innerHTML == f[7].innerHTML && f[6].innerHTML == f[8].innerHTML) {
            console.log('win 678')
        }
    }
}