// DOM ruu handav lessen 41

// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdegley

var activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch

var scores = [0, 0];

// Toglogchiin eeljin deer tsugluulj bga onoog hadgalah huvisagch

var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei. 1-6 gsn utgiig ene huivsagchid sanamsarguigeer uusgej ugnu.
// var diceNumber = Math.floor( Math.random() * 6 ) + 1;  // Ene hesgiig door Roll dice deer ashiglasan.


// Programm ehlehed beltgey :
// Toglogchiin tsuguulj baigaa onoog 00lov

document.getElementById("score-0").textContent = 0;  
document.getElementById("score-1").textContent = 0;

// Toglogchiin odoo idevhtei baigaa onoog 00lov
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// Shoog baihgui bolgov
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Roll dice tovch
document.querySelector(".btn-roll").addEventListener("click", function()
    {
         // Үүсгэж байгаа санамсаргүй тоо нь өөрөө 1-6 хооронд байгаа бас файлын нэрийг албаар dice-X-png гэж нэрлэсэн зэрэг аргуудыг харах юм бол нөхцөл шалгах шаардлагггүй шууд буусан шооны тоог Х тооны оронд тавьж өгөөд шооны зураг үүсээд байгаа юм.   
        var diceNumber = Math.floor( Math.random() * 6 ) + 1;  
        diceDom.style.display = "block";
        diceDom.src = "dice-" + diceNumber + ".png";
    }
);

