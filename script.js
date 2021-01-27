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
        
        divInputHeader.innerHTML = `
            <h2>Registrera dig</h2> 
            <input id="newInputUserName" type="text" placeholder="Användarnamn"> 
            <input id="newInputPassword" type="text" placeholder="Lösenord"> 
            <button id="btnNewAccount">Skapa konto</button>`;
        

        const btnNewAccount = document.getElementById("btnNewAccount");

        btnNewAccount.addEventListener("click", function () {
            console.log("klick create new account");

            let newInputUserName = document.getElementById("newInputUserName").value;
            let newInputPassword = document.getElementById("newInputPassword").value;
            console.log(newInputUserName);
            console.log(newInputPassword);

            let newUserList = {userName: newInputUserName, password: newInputPassword};
            console.log(newUserList, "new userList");
            userList.push(newUserList); //uppdaterar gamla listan med nya namn
            console.log(userList, "uppdaterad old userList");

            //skriver över i localStorage med uppdaterade listan
            localStorage.setItem("updatedUserList", JSON.stringify(userList));

            //hämtar uppdaterade listan från localStorage
            let getNewUserList = JSON.parse(localStorage.getItem("updatedUserList"));
            console.log(getNewUserList, "get new user list finish");
            console.log(userList); // samma som getNewUserList, varför? pga har pushat?
            
            //NU ÄR USERLIST DEN DU KAN KÖRA MOT VID INLOGGNING

            //spara nya arrayen getNewUserList i localStorage
            localStorage.setItem("userList", JSON.stringify(getNewUserList)); 

            //checka log in mot userList också.

            //vill skapa en ny array som användarnamn+lösen kan köras mot? (lägga till i befintlig eller göra en helt ny?)
            // for (i=0; i < getNewUserList.length; i++) {
            //     console.log(getNewUserList[i].userName);

            //     let allUserNames = localStorage.setItem("userName", JSON.stringify(getNewUserList)); //Denna vill jag ska sparas när vi loggar ut?? 
            // };

            divInputHeader.innerHTML = `        
            <section>
                <h2>Logga in med nya kontot</h2> 
                <input id="inputNameFirst" type="text" placeholder="Användarnamn"> 
                <input id="inputPasswordFirst" type="text" placeholder="Lösenord"> 
                <button id="btnSendFirst">Skicka</button>
                <div id="errorMess"></div>
                <br>
                <br>
                <button id="btnRegister">Ny användare</button>
            </section>`;

            let rightPasswordFirst = false;
            const btnSendFirst = document.getElementById("btnSendFirst");

            btnSendFirst.addEventListener("click", function () {
                let inputNameFirst = document.getElementById("inputNameFirst").value;
                console.log("klick btnSendFirst");
                console.log(inputNameFirst);
                let inputPasswordFirst = document.getElementById("inputPasswordFirst").value;
                console.log(inputPasswordFirst);
            

                //new users 
                let newUserListLogin = JSON.parse(localStorage.getItem("updatedUserList"));

                console.log(newUserListLogin);

                for (i=0; i < newUserListLogin.length; i++) {
                    console.log(newUserListLogin[i].userName);
                    console.log(newUserListLogin[i].password);
                    console.log(newUserListLogin, "uppdaterad old userList innifrån forloope");

                    let userNames = newUserListLogin[i].userName; 
                    // return userNames;
                    let userPasswords = newUserListLogin[i].password;

                    if (inputNameFirst === newUserListLogin[i].userName && inputPasswordFirst === newUserListLogin[i].password) {
                        rightPassword = true;
                        console.log("visa inloggade vyn");
                        //hämta, ändra, skicka upp igen
                        // localStorage.setItem("userName", JSON.stringify(userNames));
                        printUserPage();
                        break;
                    } else {
                        errorMess();
                    };
                };
            });


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
        
        // //new users 
        // let newUserListLogin = JSON.parse(localStorage.getItem("updatedUserList"));

        // console.log(newUserListLogin);

        // for (i=0; i < newUserListLogin.length; i++) {
        //     console.log(newUserListLogin[i].userName);
        //     console.log(newUserListLogin[i].password);
        //     console.log(newUserListLogin, "uppdaterad old userList innifrån forloope");


        //     let userNames = newUserListLogin[i].userName; 
        //     // return userNames;
        //     let userPasswords = newUserListLogin[i].password;

        //     if (inputUserName === newUserListLogin[i].userName && inputPassword === newUserListLogin[i].password) {
        //         rightPassword = true;
        //         console.log("visa inloggade vyn");
        //         //hämta, ändra, skicka upp igen
        //         localStorage.setItem("userName", JSON.stringify(userNames));
        //         printUserPage();
        //         break;
        //     } else {
        //         errorMess();
        //     };
        // };

        // old users
        for (i=0; i < userList.length; i++) {
            console.log(userList[i].userName);
            console.log(userList[i].password);
            console.log(userList, "uppdaterad old userList innifrån forloope");

            let userNames = userList[i].userName; 
            // return userNames;
            let userPasswords = userList[i].password;

            if (inputUserName === userList[i].userName && inputPassword === userList[i].password) {
                rightPassword = true;
                console.log("visa inloggade vyn");
                //hämta, ändra, skicka upp igen
                localStorage.setItem("userName", JSON.stringify(userNames));
                printUserPage();
                break;
            } else {
                errorMess();
            };
        };
    });
   createNewAccount();//denna bör väl köras innan själva start pages for loop??
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
        localStorage.clear();         //vill eg bara cleara currentuser - userName[i].userName
        // localStorage.removeItem("userName");
        // location.reload(); 
        printStartPage();
    });
};
// ************************************************************************************
// ************************************ /USER PAGE  ***********************************
// ************************************************************************************