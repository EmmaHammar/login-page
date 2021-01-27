const main = document.getElementsByTagName("MAIN")[0];
main.id = "main";
const header = document.getElementsByTagName("HEADER")[0];
const divInputHeader = document.createElement("DIV");
header.appendChild(divInputHeader);
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
    {userName: "olle", password: "test3"},
];

// ************************************************************************************
// *************************** new account on START PAGE ******************************
// ************************************************************************************
        // if (localStorage.getItem("newUserName") === null) {
        //     console.log("ingen är inloggad");
        //     printStartPage();
        // } else {
        //     console.log("någon är inloggad");
        //     printUserPage();
        // };
function createNewAccount() {
    const btnRegister = document.getElementById("btnRegister");

    btnRegister.addEventListener("click", function () {
        console.log("klick gå till registrering");
        
        divInputHeader.innerHTML = `
            <h2>Registrera dig</h2> 
            <input id="newInputUserName" type="text" placeholder="Användarnamn"> 
            <input id="newInputPassword" type="text" placeholder="Lösenord"> 
            <button id="btnNewAccount">Skapa konto</button>`
        ;

        const btnNewAccount = document.getElementById("btnNewAccount");

        btnNewAccount.addEventListener("click", function () {
            console.log("klick create new account");

            let newInputUserName = document.getElementById("newInputUserName").value;
            let newInputPassword = document.getElementById("newInputPassword").value;
            console.log(newInputUserName);
            console.log(newInputPassword);

            let newUserList = [
                {userName: newInputUserName, password: newInputPassword}
            ];

            console.log(newUserList, "new userList");
            userList.push(newUserList); //uppdaterar gamla listan med nya namn
            //kör for loop för att hämta alla userName (gamla+nya)
            //sparar i localStorage localStorage.setItem("updatedUserList", JSON.stringify(updatedUserNames));
            //Gör en ny if-sats med 


            // for (i=0; i < newUserList.length; i++) {
            //     console.log(newUserList[i].userName);
            //     console.log(newUserList[i].password);

            //     let newUserNames = newUserList[i].userName; 
            //     let newUserPasswords = newUserList[i].password;
            //     //Hämta gamla arrayen, men userNames finns ej i detta scope

            //     // let getUserList = JSON.parse(localStorage.getItem(userNames));
            //     // getUserList.push(newUserList);

            //     //Nedan skriver över:
            //     localStorage.setItem("newUserName", JSON.stringify(newUserNames));
                
            //     if (newUserNames == newUserList[i].userName && newUserPasswords == newUserList[i].password) {
            //         rightPassword = true;
            //         console.log("visa inloggade vyn");
            //         // localStorage.setItem("userName", JSON.stringify(userNames));
            //         printUserPage();
            //         break;
            //     } else {
            //             errorMess();
            //         };
            // };
        });
    });
};
// ************************************************************************************
// *************************** /new account on START PAGE *****************************
// ************************************************************************************

// ************************************************************************************
// ************************************ START PAGE  ***********************************
// ************************************************************************************
function printStartPage() {
    divInputHeader.innerHTML = `        
        <section>
            <h2>Logga in</h2> 
            <input id="inputUserName" type="text" placeholder="Användarnamn"> 
            <input id="inputPassword" type="text" placeholder="Lösenord"> 
            <button id="btnSend">Skicka</button>
            <div id="errorMess"></div>
            <br>
            <br>
            <button id="btnRegister">Ny användare</button>
        </section>`;
    main.innerHTML = "<h2>Välkommen!</h2>";

    let rightPassword = false; 
    btnSend.addEventListener("click", function () {
        let inputUserName = document.getElementById("inputUserName").value;
        console.log("klick btnSend");
        // console.log(inputUserName);
        let inputPassword = document.getElementById("inputPassword").value;
        // console.log(inputPassword);
        const btnSend = document.getElementById("btnSend");
        
        for (i=0; i < userList.length; i++) {
            console.log(userList[i].userName);
            console.log(userList[i].password);

            let userNames = userList[i].userName; 
            let userPasswords = userList[i].password;

            if (inputUserName === userList[i].userName && inputPassword === userList[i].password) {
                rightPassword = true;
                console.log("visa inloggade vyn");
                localStorage.setItem("userName", JSON.stringify(userNames));
                printUserPage();
                break;
            } else {
                errorMess();
            };
        };
    });
   createNewAccount();
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

    const btnLogOut = document.getElementById("btnLogOut");
    btnLogOut.addEventListener("click", function () {
        console.log("klick logga ut");
        localStorage.clear(); 
        location.reload(); 
        printStartPage();
    });
};

function errorMess() {
    let errorMess = document.getElementById("errorMess");
    errorMess.innerHTML = "Error, vänligen kontrollera att du skrivit rätt användarnamn och lösenord.";
};
// ************************************************************************************
// ************************************ /USER PAGE  ***********************************
// ************************************************************************************

