//koppling DOMen och variabler
const header = document.getElementsByTagName("HEADER")[0];
const ul = document.createElement("UL");
header.appendChild(ul);

const main = document.getElementsByTagName("MAIN")[0];
const startPage = document.getElementById("startPage");
const loginPage = document.getElementById("loginPage");
const userPage = document.getElementById("userPage");

//************************ btLogIn  ************************
const btnLogIn = document.getElementById("btnLogIn");
// console.log(btnLogIn);
btnLogIn.addEventListener("click", function (){
    console.log("klick btnLogIn");
    main.innerHTML = `        
    <section id="loginPage">
        <h2>Logga in</h2> 
        <p>Användarnamn<p>
        <input id="inputField" type="text" placeholder="Användarnamn"> 
        <p>Lösenord</p>
        <input type="text" placeholder="Lösenord"> 
        <button id="btnSend">Skicka</button>
        <div id="errorMess">Error</div>
    </section>`;
});







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
