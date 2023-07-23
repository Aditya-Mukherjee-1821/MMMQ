//setting up of firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCvLdyCWo0t_vuxYY4Lt8whmPIx-Qu0qp4",
    authDomain: "mmmq-5467c.firebaseapp.com",
    databaseURL: "https://mmmq-5467c-default-rtdb.firebaseio.com",
    projectId: "mmmq-5467c",
    storageBucket: "mmmq-5467c.appspot.com",
    messagingSenderId: "594970541031",
    appId: "1:594970541031:web:501ada9a55034a55309b42",
    measurementId: "G-TFWKHMGT3E"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Signup function
const signUp = () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const clientname = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const roomno = document.getElementById("room-no").value;
    if (clientname == '' || phone == '' || password == '' || roomno == '' || email == '') {
        alert("Please fill in all the fields");
    }
    else if (password.length < 8) {
        alert("password must be 8 or more characters");
    }
    else {
        // console.log(email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user);
                window.location.href = "student.html";
                // ...
            })
            .catch((error) => {
                document.getElementById("errorAlert").style.display = "block";
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
        
    }
}

//Signup for workers

const signUpWorker = () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const clientname = document.getElementById("name").value;
    if (clientname == '' || password == '' || email == '') {
        alert("Please fill in all the fields");
    }
    else if (password.length < 8) {
        alert("password must be 8 or more characters");
    }
    else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user);
                window.location.href = "query.html";
                // document.write("Worker signed up");
                // ...
            })
            .catch((error) => {
                document.getElementById("errorAlert").style.display = "block";
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
        // console.log(email, password);
    }

    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         var user = userCredential.user;
    //         console.log(user);
    //         window.location.href = "/build/html files/query.html";
    //         // document.write("Worker signed up");
    //         // ...
    //     })
    //     .catch((error) => {
    //         document.getElementById("errorAlert").style.display = "block";
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         console.log(errorCode, errorMessage);
    //         // ..
    //     });
    // console.log(email, password);
}

//login function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (password == '' || email == '') {
        alert("Please fill in all the fields");
    }
    else {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                window.location.href = "student.html";
                // document.write("By chance this is running");
                // ...
            })
            .catch((error) => {
                document.getElementById("errorAlert").style.display = "block";
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

}

//login function for workers
const signInWorker = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (password == '' || email == '') {
        alert("Please fill in all the fields");
    }
    else {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                window.location.href = "query.html";
                // document.write("Worker signed in");
                // ...
            })
            .catch((error) => {
                document.getElementById("errorAlert").style.display = "block";
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

}

//signout user

const logout = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "index.html";
    }).catch((error) => {
        // An error happened.
    });
}

//close button functionality

// const close = () => {
//     document.getElementById("errorAlert").style.display = "none";
// }


// document.getElementById("password").addEventListener("input", () => {
//     const pwd = document.getElementById("password").value;
//     const mes = document.getElementById("message");
//     if (pwd.length < 8) {
//         mes.style.display = "block";
//     }
// });