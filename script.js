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
    {userName: "emma", password: "test2"}
];

function printStartPage() {
main.innerHTML = `        
    <section class="loginPage">
        <h2>Logga in</h2> 
        <p>Användarnamn<p>
        <input id="inputUserName" type="text" placeholder="Användarnamn"> 
        <p>Lösenord</p>
        <input id="inputPassword" type="text" placeholder="Lösenord"> 
        <button id="btnSend">Skicka</button>
        <div id="errorMess"></div>
        <br>
        <br>
        <p>Ny användare?</p>
        <button id="btnAccount">Skapa konto</button>
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
            console.log(userList[0].userName);
            console.log(userList[i].userName);
            console.log(userList[0].password);

            let userNames = userList[i].userName; 
            let userPasswords = userList[i].password;

            if (inputUserName == userList[i].userName && inputPassword == userList[i].password) {
                rightPassword = true;
                console.log("visa inloggade vyn");
                localStorage.setItem("userName", JSON.stringify(userNames));
                printUserPage();
            } else {
                let errorMess = document.getElementById("errorMess");
                errorMess.innerHTML = "Error, vänligen kontrollera så att du skrivit rätt användarnamn och lösenord.";
            };
        };
    });

    const btnAccount = document.getElementById("btnAccount");
    btnAccount.addEventListener("click", function () {
        console.log("klick skapa konto");
        printCreateAccountPage();
    });

};

function printUserPage() {
    main.innerHTML = `
    <section id="userPage">
        <h2>Välkommen till din personliga sida!</h2> 
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

function printCreateAccountPage() {
    main.insertAdjacentHTML("beforeend", `
        <section class="signUpPage">
            <h2>Ny användare</h2> 
            <input id="inputUserNameNew" type="text" placeholder="Välj användarnamn"> 
            <p>Lösenord</p>
            <input id="inputPasswordNew" type="text" placeholder="Välj lösenord"> 
            <button id="btnCreateNewUser">Nytt konto</button>
        </section>`);

    const btnCreateNewUser = document.getElementById("btnCreateNewUser");
    btnCreateNewUser.addEventListener("click", function () {
        console.log("klick skicka formuläret");
    });

};