// ************************************************************************************
// ************************************ GLOBAL      ***********************************
// ************************************************************************************
const body = document.getElementsByTagName("BODY")[0];
const header = document.createElement("HEADER");
const main = document.createElement("main");
main.id = "main";

body.insertAdjacentElement("afterbegin", main);
body.insertAdjacentElement("afterbegin", header);
header.insertAdjacentHTML("afterbegin", "<h1>Logo</h1>");

const divLoginHeader = document.createElement("DIV");
header.appendChild(divLoginHeader);
const divRegisterHeader = document.createElement("DIV");
header.appendChild(divRegisterHeader);

let userList = [ 
    {userName: "janne", password: "test"},
    {userName: "emma", password: "test2"},
    {userName: "olle", password: "test3"}
];

//Om userList i localStorage är tom sparas userList dit (ej skriva över ev nya användare)
if (JSON.parse(localStorage.getItem("userList")) === null) {
    console.log("userList ursprung sparas i localStorage");
    localStorage.setItem("userList", JSON.stringify(userList));
};

//Om userName i localStorage är tom så visas StartPage. Om den inte är tom så visas UserPage.
if (localStorage.getItem("userName") === null) {
    console.log("ingen är inloggad");
    printStartPage();

} else {
    console.log("någon är inloggad");
    printUserPage();
};

// ************************************************************************************
// ************************************ START PAGE  ***********************************
// ************************************************************************************
function printStartPage() {
    login();
    main.innerHTML = "<h2>Välkommen!</h2>";

    let loginOk = false; 
    const btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener("click", function () {
        divRegisterHeader.innerHTML = "";
        let valueUserName = document.getElementById("inputUserName").value;
        let valuePassword = document.getElementById("inputPassword").value;
        
        //hämtar senaste "JSON arrayen" userList 
        let updatedUserList = JSON.parse(localStorage.getItem("userList"));

        //logincheck 
        for (i=0; i < updatedUserList.length; i++) {

            let userNames = updatedUserList[i].userName; 
            let userPasswords = updatedUserList[i].password;

            if (valueUserName === userNames && valuePassword === userPasswords ) {
                loginOk = true;
                
                //om loginOk sparas key userName (reglerar vy startPage eller userPage)
                localStorage.setItem("userName", JSON.stringify(userNames));
                printUserPage();
                break;
            } else {
                errorDiv();
            };
        };
    });
   printRegisterDiv();
};

function login() {
    divLoginHeader.innerHTML = `        
        <section>
            <h2>Logga in</h2> 
            <input id="inputUserName" type="text" placeholder="Användarnamn"> 
            <input id="inputPassword" type="text" placeholder="Lösenord"> 
            <button id="btnLogin">Logga in</button>
            <div id="errorDiv"></div>
            <div id="btnContainer" class="btnContainer">
                <button id="btnPrintRegisterDiv">Gå till registrering</button>
            </div>
        </section>
    `;
};

function errorDiv() {
    let errorDiv = document.getElementById("errorDiv");
    errorDiv.innerHTML = `<br><p>Du har fyllt i fel användarnamn eller lösenord, försök igen.</p>`;
};

function printRegisterDiv() {
    const btnPrintRegisterDiv = document.getElementById("btnPrintRegisterDiv");

    btnPrintRegisterDiv.addEventListener("click", function () {
        console.log("klick gå till registrering");
        
        btnContainer.innerHTML = "";

        divRegisterHeader.innerHTML = `
            <h2>Registrera dig</h2> 
            <input id="registerUserName" type="text" placeholder="Användarnamn"> 
            <input id="registerPassword" type="text" placeholder="Lösenord"> 
            <button id="btnRegister">Registrera dig</button>
        `;
        register();
    });
};

function register() {
    const btnRegister = document.getElementById("btnRegister");

    btnRegister.addEventListener("click", function () {
        let registerUserName = document.getElementById("registerUserName").value;
        let registerPassword = document.getElementById("registerPassword").value;
        
        // hämtar senaste versionen userList
        let getUserList = JSON.parse(localStorage.getItem("userList"));

        // ny array med nytt namn+lösen
        let newUser= {userName: registerUserName, password: registerPassword};
        
        //endast om det finns något i fältet, dvs det är true (annars error)
        if (registerUserName && registerPassword) {
            console.log("jaa, du har fyllt i ett användarnamn och ett lösenord");

            //pushar nya medlemmen in i senaste versionen av userList
            getUserList.push(newUser);

            //sparar nya versionen av userList
            localStorage.setItem("userList", JSON.stringify(getUserList));
            divRegisterHeader.innerHTML = "";
        } else {
            console.log("error, du måste fylla i ett användarnamn och lösenord");
            divRegisterHeader.insertAdjacentHTML("beforeend","<br><p>Vänligen, fyll i ett användarnamn och ett lösenord</p>")
        }
    });
};
// ************************************************************************************
// ************************************ /START PAGE  **********************************
// ************************************************************************************

// ************************************************************************************
// ************************************ USER PAGE  ************************************
// ************************************************************************************
function printUserPage() {
    divLoginHeader.innerHTML = `<button id="btnLogOut">Logga ut</button>`;
    main.innerHTML = `
        <h2>Välkommen ${localStorage.getItem("userName")} till din personliga sida!</h2> 
        <p>Här kan du se dina grejer.</p>
    `;
    logout();
};

function logout() {
    const btnLogOut = document.getElementById("btnLogOut");
    btnLogOut.addEventListener("click", function () {
        localStorage.removeItem("userName"); //så finns nya användare med men i annan nyckel
        location.reload(); 
        printStartPage();
    });
};
// ************************************************************************************
// ************************************ /USER PAGE  ***********************************
// ************************************************************************************

