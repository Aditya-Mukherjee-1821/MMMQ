const repeat = () => {
    setTimeout(() => {
        document.getElementById("anm").innerHTML = "_";
    }, 500);

    setTimeout(() => {
        document.getElementById("anm").innerHTML = "";
    }, 1000);

    setTimeout(() => {
        document.getElementById("anm").innerHTML = "_";
    }, 1500);

    setTimeout(() => {
        document.getElementById("anm").innerHTML = "";
    }, 2000);

    setTimeout(() => {
        document.getElementById("anm").innerHTML = "_";
    }, 2500);

    setTimeout(() => {
        document.getElementById("anm").innerHTML = "M_";
    }, 2600);

    setTimeout(() => {
        document.getElementById("anm").innerHTML = "MM_";
    }, 2700);

    setTimeout(() => {
        document.getElementById("anm").innerHTML = "MMM_";
    }, 2800);

    setTimeout(() => {
        document.getElementById("anm").innerHTML = "MMMQ_";
    }, 2900);

    setTimeout(() => {
        document.getElementById("anm").innerHTML = "MMMQ";
    }, 3300);

    // setInterval(() => {
    //     let value = "MMMQ";
    //     if(value == "MMMQ"){
    //         value = "MMMQ_";
    //     }
    //     else{
    //         value = "MMMQ";
    //     }
    //     document.getElementById("anm").innerHTML = value;
    //     console.log(value);
    // }, 3000);
}

const blink = () =>{
    setInterval(() => {
        document.getElementById("anm").innerHTML = document.getElementById("anm").innerHTML == MMMQ? MMMQ_:MMMQ
    }, 1000);
}

const delay = ()=>{
    setTimeout(blink, 3400);
}