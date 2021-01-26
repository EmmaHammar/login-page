//koppling DOMen och variabler
const header = document.getElementsByTagName("HEADER")[0];
const ul = document.createElement("UL");
header.appendChild(ul);

const main = document.getElementsByTagName("MAIN")[0];
main.id = "main";
const startPage = document.getElementById("startPage");
const loginPage = document.getElementById("loginPage");
const userPage = document.getElementById("userPage");

//************************ HEADER - btLogIn **********************
const li = document.createElement("LI");
ul.appendChild(li);
// li.insertAdjacentHTML("afterbegin", `<button id="btnLogIn">Logga in</button>`)
// console.log(ul);

//************************ Janne to local storage  
// let userNames = ["janne"];
// // console.log(userNames[0]);
// localStorage.setItem("userName", userNames[0]);

let userList = [ 
    {userName: "janne", password: "test"}
    // {userName: "emma", password: "test2"}
];

let userNames = userList[0].userName; 
let userPasswords = userList[0].password

//************************ check if userName exists  1/2
let isLoggedIn = false; //utloggad vy

function printStartPage() {
main.innerHTML = `        
    <section id="loginPage">
        <h2>Logga in</h2> 
        <p>Användarnamn<p>
        <input id="inputUserName" type="text" placeholder="Användarnamn"> 
        <p>Lösenord</p>
        <input id="inputPassword" type="text" placeholder="Lösenord"> 
        <button id="btnSend">Skicka</button>
        <div id="errorMess"></div>
    </section>`;
};

function printUserPage() {
    main.innerHTML = `
    <section id="userPage">
        <h2>Välkommen till din personliga sida!</h2> 
        <p>Här kan du se dina grejer.</p>
        <button id="btnLogOut">Logga ut</button>
    </section>`;
};


if (isLoggedIn === false) {
    printStartPage();
};


//print welcome page om ngn är inloggad
//default
if (localStorage.getItem("userName") === null) {
    console.log("ingen är inloggad");
}
else {
    console.log("någon är inloggad");

}
   
    let rightPassword = false; // finns ej innan vi har börjat leta

    btnSend.addEventListener("click", function () {
        let inputUserName = document.getElementById("inputUserName").value;
        console.log("klick btnSend");
        // console.log(inputUserName);
        let inputPassword = document.getElementById("inputPassword").value;
        // console.log(inputPassword);

        const btnSend = document.getElementById("btnSend");
        
        //************************ check if userName+password is correct  2/2
        for (i=0; i < userList.length; i++) {
            console.log(userList[0].userName);
            console.log(userList[0].password);

            if (inputUserName == userList[0].userName && inputPassword == userList[0].password) {
                rightPassword = true;
                console.log("visa inloggade vyn");
                localStorage.setItem("userName", JSON.stringify(userNames));
                printUserPage();
                
                let btnLogOut = document.getElementById("btnLogOut");
                btnLogOut.addEventListener("click", function () {
                    console.log("klick logga ut");
                    localStorage.clear(); 
                    location.reload(); //laddar om sidan
                    printStartPage();
                });
            }
            else {
                let errorMess = document.getElementById("errorMess");
                errorMess.innerHTML = "Error, vänligen kontrollera så att du skrivit rätt användarnamn och lösenord.";
            };
        };
    });


//FRÅGOR: 
// 1) Innehålls -vyn skall dynamiskt växla mellan två olika lägen. Var sätta andra if:en alt elsen? (rad 45)
// 2) När jag kommer tillbaka till login page via logga ut-knappen, något fel. Fångar inte klicket på skicka-knappen
// 2) "Inloggning sparas i localStorage." Ska varje gång janne + test loggar in sparas i localStorage? 









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

// let userList = [ 
//     {userName: "janne", password: "test"}
// ];

//let userNames = userList[i].userName;

// localStorage.setItem("userNameList", JSON.stringify(userNameList));
//******** /local storage createNewUser ********


//NÄR KLAR MED OVAN
//(ev första gången du logga in - fält)
//i inloggad vy ser du ex Hej Emma