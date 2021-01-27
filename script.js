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
// ************************************ START PAGE  ***********************************
// ************************************************************************************
function createNewAccount() {
    const btnRegister = document.getElementById("btnRegister");

    btnRegister.addEventListener("click", function () {
        console.log("klick gå till registrering");
        
        divInputHeader.insertAdjacentHTML("beforeend", `
            <h2>Registrera dig</h2> 
            <input id="newInputUserName" type="text" placeholder="Användarnamn"> 
            <input id="newInputPassword" type="text" placeholder="Lösenord"> 
            <button id="btnNewAccount">Skapa konto</button>`);
        ;

        const btnNewAccount = document.getElementById("btnNewAccount");

        btnNewAccount.addEventListener("click", function () {
            console.log("klick create new account");

            let newInputUserName = document.getElementById("newInputUserName").value;
            let newInputPassword = document.getElementById("newInputPassword").value;
            console.log(newInputUserName);
            console.log(newInputPassword);

            let newUserList = {userName: newInputUserName, password: newInputPassword};
            console.log(newUserList, "new userList");

            let newUsersList = userList.concat(newUserList);
            console.log(newUsersList);

            //deklarerar ny variabel/array och hämtar userList från localStorage. Ex kan en ny användare ha reggat sig så behöver hämta det.
            // let getUserList = JSON.parse(localStorage.getItem("userList")); 
            // console.log(getUserList);
            
            localStorage.setItem("userList", JSON.stringify(newUsersList));

            // getUserList.push(resultList); //uppdaterar listan från localStorage med nytt namn //FÅR ERROR Uncaught TypeError: Cannot read property 'push' of null at HTMLButtonElement.<anonymous> 
            // console.log(getUserList);
            //Sparar nya listan med nytt namn i localStorage
            // localStorage.setItem("userList", JSON.stringify(getUserList));

        });
    });
};
// *************************** /new account 

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
        </section>
    `;
    main.innerHTML = "<h2>Välkommen!</h2>";

    let rightPassword = false; 
    btnSend.addEventListener("click", function () {
        let inputUserName = document.getElementById("inputUserName").value;
        console.log("klick btnSend");
        // console.log(inputUserName);
        let inputPassword = document.getElementById("inputPassword").value;
        // console.log(inputPassword);
        const btnSend = document.getElementById("btnSend");
        
        let getNewUserList = JSON.parse(localStorage.getItem("userList"));
        console.log(getNewUserList);
        let fullList = userList.concat(getNewUserList); //OBS måste ta bort dubbletter sen
        console.log(userList);
        console.log(fullList);
        for (i=0; i < fullList.length; i++) {
            // console.log(fullList[i].userName);
            // console.log(fullList[i].password);
            // console.log(fullList, "uppdaterad old userList innifrån forloope");

            let userNames = fullList[i].userName; 
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
   createNewAccount();
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

