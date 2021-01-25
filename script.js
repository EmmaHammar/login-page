console.log("hej");
//koppling DOMen och variabler
const header = document.getElementsByTagName("HEADER")[0];
const ul = document.createElement("UL");
header.appendChild(ul);

const main = document.getElementsByTagName("MAIN")[0];
const startPage = document.getElementById("startPage");
const loginPage = document.getElementById("loginPage");
const userPage = document.getElementById("userPage");



//dynamiskt kunna byta ut alt lägga till/ta bort li i menyn
//dynamiskt kunna byta ut h2 och p i main

//När du trycker på logga in-knappen i menyfältet syns: 
    //logga in-vy: inputfält, knapp, plats för error. Göra en container som syns i vissa läge? 
    //När du trycker på logga in-knappen i main: testar den om användarnamnet/lösen finns -> ja: inloggad vy, nej: error


//Inloggad vy: 
    //meny: logga ut syns (istället för logga in)
    //h2 och p ändrat








//NÄR KLAR MED OVAN
//(ev första gången du logga in - fält)
//i inloggad vy ser du ex Hej Emma. 
