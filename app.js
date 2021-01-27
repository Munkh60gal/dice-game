// Lessen 41 DOM ruu handav 
// Lesson 42 Event, callback, anonymous function
// Lesson 43 Onoog uurchilj toglogchiin eelj solih

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

// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function()
    {
        // 1-6 dotorh sanamsargui neg toog gargaj avna 
         // Үүсгэж байгаа санамсаргүй тоо нь өөрөө 1-6 хооронд байгаа бас файлын нэрийг албаар dice-X-png гэж нэрлэсэн зэрэг аргуудыг харах юм бол нөхцөл шалгах шаардлагггүй шууд буусан шооны тоог Х тооны оронд тавьж өгөөд шооны зураг үүсээд байгаа юм.   
        var diceNumber = Math.floor( Math.random() * 6 ) + 1;  

        // Shoonii zurgiig web deer gargaj irne
        diceDom.style.display = "block";
        // Buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
        diceDom.src = "dice-" + diceNumber + ".png";

        // Buusan too ni 1-ees yalgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulne.

        if(diceNumber !==1 )
        {
            // 1-ees yalgaatai too buulaa. Buusan toog toglogchid nemj ugnu.
            roundScore = roundScore + diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        }
        else
        {
            // 1 buusan tol toglogchiin eeljiig ene hesegt solij ugnu

            // Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono. 
            roundScore = 0; 
            document.getElementById("current-" + activePlayer).textContent =0;
            
            // Toglogchiin eeljiig nuguu toglogch ruu shiljuulne.
            
            // Herev idevhtei toglogch ni 0 bol idevhtei toglogchiig 1 bolgo.
            // Ugui bol idevhtei toglogchiig 0 bolgo.
            activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

            // Ulaan tsegiig shiljuuleh
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");

            // if(activePlayer === 0)   // Ingej bichij boloh ch heterhii ih zai ezlne,tsag avna tiimees deerhees bichihed bolno.
            // {
            //     activePlayer = 1;
            // }
            // else
            // {
            //     activePlayer = 0;
            // }


            // Shoog tur alga bolgono.
            diceDom.style.display = "none";
        }
    }
);

