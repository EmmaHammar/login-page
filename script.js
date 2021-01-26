const main = document.getElementsByTagName("MAIN")[0];
main.id = "main";

//print welcome page om ngn är inloggad, default | print userPage om ngn är inloggad (i localStorage)
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

//HÄR LÅG let userNames = userList[0].userName; 
// let userPasswords = userList[0].password


function printStartPage() {
main.innerHTML = `        
    <section>
        <h2>Logga in</h2> 
        <p>Användarnamn<p>
        <input id="inputUserName" type="text" placeholder="Användarnamn"> 
        <p>Lösenord</p>
        <input id="inputPassword" type="text" placeholder="Lösenord"> 
        <button id="btnSend">Skicka</button>
        <div id="errorMess"></div>
        <br>
        <br>
        <div id="register">
            <p>Har du inget konto? Registrera dig här:</p>
            <button id="btnRegister">Gå till registrering</button>
        </div>
    </section>`;

    let rightPassword = false; // finns ej innan vi har börjat leta
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
            let userPasswords = userList[i].password

            if (inputUserName == userList[i].userName && inputPassword == userList[i].password) {
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
    const btnRegister = document.getElementById("btnRegister");
    const register = document.getElementById("register");
    btnRegister.addEventListener("click", function () {
        console.log("klick gå till registrering");
        createNewAccount();
    });
};

function printUserPage() {
    main.innerHTML = `
    <section>
        <h2>Välkommen ${localStorage.getItem("userName")} till din personliga sida!</h2> 
        <p>Här kan du se dina grejer.</p>
        <button id="btnLogOut">Logga ut</button>
    </section>`;

    const btnLogOut = document.getElementById("btnLogOut");
    btnLogOut.addEventListener("click", function () {
        console.log("klick logga ut");
        localStorage.clear(); 
        location.reload(); //laddar om sidan
        printStartPage();
    });
};

function errorMess() {
    let errorMess = document.getElementById("errorMess");
    errorMess.innerHTML = "Error, vänligen kontrollera att du skrivit rätt användarnamn och lösenord.";
};

function createNewAccount() {
    register.innerHTML = `
    <h2>Skapa nytt konto</h2> 
    <p>Användarnamn<p>
    <input id="newUserName" type="text" placeholder="Användarnamn"> 
    <p>Lösenord</p>
    <input id="newPassword" type="text" placeholder="Lösenord"> 
    <button id="btnNewAccount">Skapa nytt konto</button>`;

    const btnNewAccount = document.getElementById("btnNewAccount");
    btnNewAccount.addEventListener("click", function () {
        console.log("klick create new account");
        let newUserName = document.getElementById("newUserName").value;
        let newPassword = document.getElementById("newPassword").value;
        console.log(newUserName);
        console.log(newPassword);
    });

};