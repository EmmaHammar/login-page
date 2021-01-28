const main = document.getElementsByTagName("MAIN")[0];
main.id = "main";
const header = document.getElementsByTagName("HEADER")[0];
const divInputHeader = document.createElement("DIV");
header.appendChild(divInputHeader);
const divRegisterHeader = document.createElement("DIV");
header.appendChild(divRegisterHeader);
// console.log(divInputHeader);

//Shift pages logged in vs logged out
if (localStorage.getItem("userName") === null) {
    console.log("ingen är inloggad");
    printStartPage();

} else {
    console.log("någon är inloggad");
    printUserPage();
};

let userList = [ 
    {userName: "janne", password: "test"},
    {userName: "emma", password: "test2"},
    {userName: "olle", password: "test3"}
];

function btnCreateAccount() {
    const btnNewAccount = document.getElementById("btnNewAccount");

    btnNewAccount.addEventListener("click", function () {
        let newInputUserName = document.getElementById("newInputUserName").value;
        let newInputPassword = document.getElementById("newInputPassword").value;
        console.log(newInputUserName);
        console.log(newInputPassword);

        //ny array med nytt namn+lösen
        let newUser= [{userName: newInputUserName, password: newInputPassword}];
        console.log(newUser, "new user");
        
        if (localStorage.getItem("userList") === null) {
            console.log("UserList TOM lägger vi till o sparar");
            
            // userList.push(newUser);
            // console.log("efter push newUser", userlist);
            localStorage.setItem("userList", JSON.stringify(newUser));
            console.log("userlist om userlist tom");
        
            
        } else {
            console.log("UserList FINNS hämtar, lägger till o sparar");

            //hämta
            let getFirstNewUser = JSON.parse(localStorage.getItem("userList"));

            //ändra
            console.log("första nya användaren ", getFirstNewUser); 
            console.log("andra nya användaren", newUser); 
            let allNewUsers = newUser.concat(getFirstNewUser);
            console.log(allNewUsers);

            //spara
            localStorage.setItem("userList", JSON.stringify(allNewUsers));
            };

        divRegisterHeader.innerHTML = "";
    });
}

// ************************************************************************************
// ************************************ START PAGE  ***********************************
// ************************************************************************************
function printCreateAccount() {
    const btnRegister = document.getElementById("btnRegister");

    btnRegister.addEventListener("click", function () {
        console.log("klick gå till registrering");
        
        //vill att btnContainer ska bli tom: 
        btnContainer.innerHTML = "";

        divRegisterHeader.innerHTML = `
            <h2>Registrera dig</h2> 
            <input id="newInputUserName" type="text" placeholder="Användarnamn"> 
            <input id="newInputPassword" type="text" placeholder="Lösenord"> 
            <button id="btnNewAccount">Skapa konto</button>
        `;
        btnCreateAccount();
    });
};

function printStartPage() {
    login();
    main.innerHTML = "<h2>Välkommen!</h2>";

    let rightPassword = false; 
    btnSend.addEventListener("click", function () {
        divRegisterHeader.innerHTML = "";
        let inputUserName = document.getElementById("inputUserName").value;
        console.log("klick btnSend");
        // console.log(inputUserName);
        let inputPassword = document.getElementById("inputPassword").value;
        // console.log(inputPassword);
        const btnSend = document.getElementById("btnSend");
        
        //Kolla inloggningen mot senaste datan från localStorage:
        //hämtar senaste versionen av "JSON arrayen" från localStorage
        let getNewUserList = JSON.parse(localStorage.getItem("userList"));
        console.log(getNewUserList); 

        //lägger till
        let fullList = userList.concat(getNewUserList); //OBS måste ta bort dubbletter sen
        console.log(userList);
        console.log(fullList);

        //logincheck 
        for (i=0; i < fullList.length; i++) {
            // console.log(fullList[i].userName);
            // console.log(fullList[i].password);
            // console.log(fullList, "uppdaterad old userList innifrån forloope");

            let userNames = fullList[i].userName; // OBS blir felmeddelande om jag skriver in fel namn vid login: Uncaught TypeError: Cannot read property 'userName' of null at HTMLButtonElement.<anonymous> (script.js:109)
            
            let userPasswords = fullList[i].password;

            if (inputUserName === fullList[i].userName && inputPassword === fullList[i].password ) {
                rightPassword = true;
                console.log("visa inloggade vyn");
                //om lyckad inlogg sparas userName i localStorage. Det som reglerar inloggad eller utloggad vy.
                localStorage.setItem("userName", JSON.stringify(userNames));
                printUserPage();
                break;
            } else {
                errorMess();
            };
        };
    });
   printCreateAccount();
};

function login() {
    divInputHeader.innerHTML = `        
        <section>
            <h2>Logga in</h2> 
            <input id="inputUserName" type="text" placeholder="Användarnamn"> 
            <input id="inputPassword" type="text" placeholder="Lösenord"> 
            <button id="btnSend">Skicka</button>
            <div id="errorMess"></div>
            <div id=btnContainer>
                <button id="btnRegister">Ny användare</button>
            </div>
        </section>
    `;
};

function errorMess() {
    let errorMess = document.getElementById("errorMess");
    errorMess.innerHTML = "Error, vänligen kontrollera att du skrivit rätt användarnamn och lösenord.";
};
// ************************************************************************************
// ************************************ /START PAGE  **********************************
// ************************************************************************************

// ************************************************************************************
// ************************************ USER PAGE  ************************************
// ************************************************************************************
function printUserPage() {
    divInputHeader.innerHTML = `<button id="btnLogOut">Logga ut</button>`;
    main.innerHTML = `
    <h2>Välkommen ${localStorage.getItem("userName")} till din personliga sida!</h2> 
    <p>Här kan du se dina grejer.</p>`;
    logout();
};

function logout() {
    const btnLogOut = document.getElementById("btnLogOut");
    btnLogOut.addEventListener("click", function () {
        console.log("klick logga ut");
        localStorage.removeItem("userName"); //så finns nya användare med men i annan nyckel
        location.reload(); 
        printStartPage();
    });
};
// ************************************************************************************
// ************************************ /USER PAGE  ***********************************
// ************************************************************************************

