const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyCvLdyCWo0t_vuxYY4Lt8whmPIx-Qu0qp4",
    authDomain: "mmmq-5467c.firebaseapp.com",
    databaseURL: "https://mmmq-5467c-default-rtdb.firebaseio.com",
    projectId: "mmmq-5467c",
    storageBucket: "mmmq-5467c.appspot.com",
    messagingSenderId: "594970541031",
    appId: "1:594970541031:web:501ada9a55034a55309b42",
    measurementId: "G-TFWKHMGT3E"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
// var contactFormDB = firebase.database().ref("contactForm/ + userName");

// const getElementVal = (id) => {
//     return document.getElementById(id).value;
// };

// const saveMessages = () => {
//     var nameUser = getElementVal("name");
//     var emailid = getElementVal("email");
//     var newContactForm = contactFormDB.push();

//     newContactForm.set({
//         name: nameUser,
//         emailid: emailid
//     });
// };

var currUser = "";

const addQuery = () => {
    console.log("addquery called");
    console.log(currUser);

    var query = document.getElementById("query").value;
    var rn = document.getElementById("rn").value;
    database.ref('myUsers/' + rn).update({
        query: query
    });

    // query.reset();
    // rn.reset();
    document.getElementById("queryAlert").style.display = "block";

    setTimeout(() => {
        document.getElementById("queryAlert").style.display = "none";
    }, 5000);
    


    // console.log(userId);

    // console.log(database.ref('myUsers/' + rn));

}

//trial code - success from docs

const database = firebase.database();

function saveMessages() {
    var nameUser = document.getElementById("name").value;
    var emailid = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone").value;
    var roomnumber = document.getElementById("room-no").value;
    if (nameUser == '' || emailid == '' || phoneNumber == '' || roomnumber == ''){
        console.log("Please fill in all fields");
    }
    else{
        database.ref('myUsers/' + roomnumber).set({
            username: nameUser,
            email: emailid,
            room: roomnumber,
            contact: phoneNumber,
            query: ""
        });
    }

    // console.log(userId);

    // currUser = userId;
}

//for worker sign up

function saveMessagesWorker() {
    var nameUser = document.getElementById("name").value;
    var emailid = document.getElementById("email").value;
    if (nameUser == '' || emailid == '') {
        console.log("Please fill in all fields!");
    }
    else {
        database.ref('myWorker/' + nameUser).set({
            username: nameUser,
            email: emailid
        });
    }

    // console.log(userId);

    // currUser = userId;
}

// displaying etc.

var object = {};
const showQueries = () => {
    // window.location.href = "/html files/query.html"
    database.ref('myUsers/')
        .on('value', (snapshot) => {
            var data = snapshot.val();
            // console.log(data);
            for (const key in data) {
                console.log(key.query + '\n');
                const node = document.createElement("li");
                node.classList.add("list-group-item");
                const textnode = document.createTextNode([key] + ": " + data[key].query);
                node.appendChild(textnode);
                document.getElementById("myList").appendChild(node);
            }
            // object = data;
            // console.log(data["N-210"].query);
        });

    // console.log(object);
    for (const key in object) {
        // console.log(key.query+'\n');
        const node = document.createElement("li");
        const textnode = document.createTextNode(key.query);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);

    }

}


