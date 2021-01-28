// Lessen 41 DOM ruu handav 
// Lesson 42 Event, callback, anonymous function
// Lesson 43 Onoog uurchilj toglogchiin eelj solih
// Lesson 44 Hold tovchiig ajilaladag bolgon onoog tsugluulah
// Lesson 45 New game heseg

// Togloomiin buh gazar aashiglagdah global huvisagchdiig end zarlay
 
// Togloom duussan esehiig hadgalah tuluviin huvisagch
var isNewGame;


var activePlayer;   // Ali toglogch shoo shideh ve gedgiig end hadgalna

var scores;         // Hoyr toglogchiin tsugluulsan onoonuud

var roundScore;       // Idevhtei toglogchiin tsugluulj baigaa eeljiin onoo

var diceDom = document.querySelector(".dice");    // Shoonii zurgiig uzuuleh elementiig DOM_oos haij olood end hadgalay (Global huvisagch)

// Togloomiig ehluulne
initGame();

// Togloomiig shineer ehlehed beltgene.
function initGame()
{
    // Togloom ehellee gedeg tuluvt oruulna.
    isNewGame = true;

    // Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdegley
    activePlayer = 0;

    // Toglogchdiin tsugluulsan onoog hadgalah huvisagch
    scores = [0, 0];

    // Toglogchiin eeljin deer tsugluulj bga onoog hadgalah huvisagch
    roundScore = 0;

    // Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei. 1-6 gsn utgiig ene huivsagchid sanamsarguigeer uusgej ugnu.
    // var diceNumber = Math.floor( Math.random() * 6 ) + 1;  // Ene hesgiig doorr Roll dice deer ashiglasan.


    // Programm ehlehed beltgey :
    // Toglogchiin tsuguulj baigaa onoog 00lov
    document.getElementById("score-0").textContent = 0;  
    document.getElementById("score-1").textContent = 0;

    // Toglogchiin odoo idevhtei baigaa onoog 00lov
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    // Toglogchdiin neriig butsaaj gargah
    document.getElementById("name-0").textContent = "Player 1"
    document.getElementById("name-1").textContent = "Player 2"

    // New game darsnii daraa yalsan toglogchiin winneriig arilgaj player bolgoh
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    // Shoog baihgui bolgono
    diceDom.style.display = "none";
}


// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function() 

{
    if (isNewGame === true)       
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
    else
    {
        alert("Togloom duussan baina. NEW GAME tovchiig darj shineer ehlene uu.")
    }
});


// HOLD tovchnii event listener

document.querySelector(".btn-hold").addEventListener("click", function() 
{
   if(isNewGame === true) 
   {
        // Ug toglogchiin tsugluusan eeljnii onoog global onoon deer ni nemj ugnu.


        // if(activePlayer === 0)
        // {
        //     scores[0] = scores[0] + roundScore;
        // }
        // else
        // {
        //     scores[1] = scores[1] + roundScore;
        // }

        // Deerh nuhstul shalgah uildliig ingej hyalbarchilj bolno.
        scores[activePlayer] =  scores[activePlayer] + roundScore;

        // Delgets deer onoog ni uurchulnu
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        // Ug toglogch hojson esehiig (onoo ni 100-aas ih eseh) shalgah 
        if(scores[activePlayer] >= 100)
        {
            // Togloomiig duussan tuluvt oruulna
            isNewGame = false;

            // Yalagch gesen textiig nerniih ni orond gargana.
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!"
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner")

            // Yalsnii daraa ulaan tsegiig baihguu bolgoh
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active")
        }
        else
        {
            // Toglogchiin eeljiig solino
            switchToNextPlayer();
        }        
   }
   else
   {
       alert("Togloom duussan baina. NEW GAME tovchiig darj shineer ehlene uu.")
   }
});




// Ene function ni togloh eeljiig daraagiin toglogch ruu shiljuuldeg.
function  switchToNextPlayer()
{
    // Eeljindee tsugluulsan onoog 0 bolgono
    roundScore = 0; 
    document.getElementById("current-" + activePlayer).textContent =0;
        
    // Toglogchiin eeljiig nuguu toglogch ruu shiljuulne.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Shoog tur alga bolgono.
    diceDom.style.display = "none";
}


// New Game buyu Shine togloom ehluuleh tovchnii event listener

document.querySelector(".btn-new").addEventListener("click" , initGame);

