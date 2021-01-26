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
    {userName: "janne", password: "test"}
    // {userName: "emma", password: "test2"}
];

let userNames = userList[0].userName; 
let userPasswords = userList[0].password

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
            console.log(userList[0].password);

            if (inputUserName == userList[0].userName && inputPassword == userList[0].password) {
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
};

function printUserPage() {
    main.innerHTML = `
    <section>
        <h2>Välkommen till din personliga sida!</h2> 
        <p>Här kan du se dina grejer.</p>
        <button id="btnLogOut">Logga ut</button>
    </section>`;

    let btnLogOut = document.getElementById("btnLogOut");
    btnLogOut.addEventListener("click", function () {
        console.log("klick logga ut");
        localStorage.clear(); 
        location.reload(); //laddar om sidan
        printStartPage();
    });
};