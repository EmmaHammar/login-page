//koppling DOMen och variabler
const header = document.getElementsByTagName("HEADER")[0];
const ul = document.createElement("UL");
header.appendChild(ul);

const main = document.getElementsByTagName("MAIN")[0];
const startPage = document.getElementById("startPage");
const loginPage = document.getElementById("loginPage");
const userPage = document.getElementById("userPage");

//************************ HEADER - btLogIn **********************
const li = document.createElement("LI");
ul.appendChild(li);
li.insertAdjacentHTML("afterbegin", `<button id="btnLogIn">Logga in</button>`)
// console.log(ul);


//************************ Janne to local storage  
// let userNames = ["janne"];
// // console.log(userNames[0]);
// localStorage.setItem("userName", userNames[0]);

////testing 
let userList = [ 
    {userName: "janne", password: "test"}
    // {userName: "emma", password: "test"}
];


// console.log(userList[0].userName + userList[0].password );
let userNames = userList[0].userName; 
let userPasswords = userList[0].password

// localStorage.setItem("userName", JSON.stringify(userNames));

//************************ check if userName exists  1/2
let userNameExist = false; //userName finns ej innan vi har börjat leta

btnLogIn.addEventListener("click", function (){
    console.log("klick btnLogIn");
    main.innerHTML = `        
    <section id="loginPage">
        <h2>Logga in</h2> 
        <p>Användarnamn<p>
        <input id="inputFieldName" type="text" placeholder="Användarnamn"> 
        <p>Lösenord</p>
        <input id="inputFieldPassword" type="text" placeholder="Lösenord"> 
        <button id="btnSend">Skicka</button>
        <div id="errorMess"></div>
    </section>`;
   
    
    btnSend.addEventListener("click", function () {
        let inputUserName = document.getElementById("inputFieldName").value;
        console.log(inputFieldName.value);
        const btnSend = document.getElementById("btnSend");
        
        //************************ check if userName exists  2/2

//         console.log(userList[0].userName + userList[0].password );
// let userNames = userList[0].userName;
// let userPasswords = userList[0].password

        for (i=0; i < userList.length; i++) {
            console.log(userList[0].password);

            if (inputUserName == userList[0].userName && userList[0].password) {
                userNameExist = true;
                console.log("visa inloggade vyn");
                localStorage.setItem("userName", JSON.stringify(userNames));
                main.innerHTML = `
                    <section id="userPage">
                        <h2>Välkommen till din personliga sida!</h2> 
                        <p>Här kan du se dina grejer.</p>
                    </section>`;
                li.innerHTML = `<button id="btnLogOut">Logga ut</button>`;
                
                let btnLogOut = document.getElementById("btnLogOut");
                btnLogOut.addEventListener("click", function () {
                    console.log("klick logga ut");
                    main.innerHTML = `  
                    <section id="startPage">
                        <h2>Välkommen!</h2>
                        <p>Logga in i menyn för att se din personliga sida.</p>
                  </section>`;
                });
            }

            else {
                let errorMess = document.getElementById("errorMess");
                errorMess.innerHTML = "Error, vänligen kontrollera så att du skrivit rätt användarnamn och lösenord.";
                inputFieldName.value = "";
                inputFieldPassword.value = "";
            }
        }
        

    });
});

//FRÅGOR: 
// 1) Innehålls -vyn skall dynamiskt växla mellan tre olika lägen. Tips?
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