function getEverything() {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hours = date.getHours();
    if (hours<10) hours = "0"+hours;

    let minutes = date.getMinutes();
    if (minutes<10) minutes = "0"+minutes

    let sec = date.getSeconds();
    if (sec<10) sec = "0"+sec

    document.getElementById("zegar").innerHTML = day+"."+month+"."+year+" "+hours+":"+minutes+":"+sec;
    setTimeout("getEverything()",1000);
}
