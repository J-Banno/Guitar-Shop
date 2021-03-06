let element = document.getElementsByTagName('h2')
element[1].style.fontSize = "50px";
element[1].style.color = "red";


let titre = document.getElementsByClassName("entry-title");
titre[0].style.backgroundColor = "green";
titre[0].innerHTML = "Apprendre le DOM!!!!!!";


let liste = document.getElementsByTagName('ul');
liste[2].style.backgroundColor="red";

let fond = document.getElementsByTagName('body');
fond[0].style.fontFamily="arial";



// MODIF PROJET////////

let all = document.getElementsByTagName('body');
all[0].style.backgroundColor = "black";
all[0].style.color = "white";



let fond = document.getElementsByClassName('text');
fond[0].style.backgroundImage = "url('https://i.pinimg.com/originals/b2/00/31/b200315b640de2e19d0228172560209d.jpg')";

let titre = document.getElementsByTagName("h1");
titre[0].innerHTML="DEVENIR DEV";
titre[0].style.backgroundColor="grey";


let img = document.querySelector('img');
img.remove("logo");


let test = document.getElementsByClassName("grattes");
test[0].remove("img");
test[1].remove("img");
