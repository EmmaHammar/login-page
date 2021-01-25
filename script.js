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
//************************ Janne to local storage  
let userNames = ["janne"];
// console.log(userNames[0]);
localStorage.setItem("userName", userNames[0]);

//************************ check if userName exists  
let userNameExist = false; //userName finns ej innan vi har börjat leta

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

    
    btnSend.addEventListener("click", function () {
        let inputUserName = document.getElementById("inputField").value;
        console.log(inputField.value);
        const btnSend = document.getElementById("btnSend");
        

        for (i=0; i < userNames.length; i++) {
            console.log(userNames[i]);
            if (inputUserName == userNames[i]) {
                userNameExist = true;
                console.log("visa inloggade vyn");
            }

            else {
                console.log("error");
            }
            
            // if (inputUserName == (userNames[i]) {
            // userNameOk = true;
            // console.log("komma till inloggade vyn");
            // }
        }

    });
});

//Grunden
//1) localStorage.setItem("userName", "Janne");

//2)Kunna se Janne i loggen
//2a) let userName = localStorage.getItem("userName", "Janne");
//2b) console.log(userName);


//******** local storage createNewUser ********
// let inputUserName = inputField.value;
//         let allUserNames = [
//             {"userName": "Janne"},
//             // {"userName": inputUserName}
//         ];
//         console.log(allUserNames);
//         localStorage.setItem("allUserNames", JSON.stringify(allUserNames));
//ELLER
// let userNameList = [ 
//     {userName: "James"}
// ];
// localStorage.setItem("userNameList", JSON.stringify(userNameList));
//******** /local storage createNewUser ********








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
//i inloggad vy ser du ex Hej Emma