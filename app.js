// DOM ruu handav lessen 41

// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdegley

var activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch

var scores = [0, 0];

// Toglogchiin eeljin deer tsugluulj bga onoog hadgalah huvisagch

var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei. 1-6 gsn utgiig ene huivsagchid sanamsarguigeer uusgej ugnu.

var dice = Math.floor( Math.random() * 6 ) + 1;

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";    // Window bol globol object fuknts dotor gadna bugded ni haragddag uchraas zaaval window. gej bichih albagui zugeer shuud bichihed bolno.


// Programm ehlehed beltgey :
// Toglogchiin tsuguulj baigaa onoog 00lov
document.querySelector("#score-0").textContent = 0;  
document.querySelector("#score-1").textContent = 0;

// Toglogchiin odoo idevhtei baigaa onoog 00lov
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

// Shoog baihgui bolgov
document.querySelector(".dice").style.display = "none";

console.log("Shoo: " + dice);