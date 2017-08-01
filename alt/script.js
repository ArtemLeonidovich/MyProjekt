var nick = false;
var email = false;
var text = false;

function validateNick() {
    var nickimg = document.getElementById("img1");
    if (!inpunNick.value) {
        nickimg.style.display = 'block';
        nickimg.style.backgroundPosition = 'right';
        nick = false;
    } else if (inpunNick.value.length < 4) {
        nickimg.style.display = 'block';
        nickimg.style.backgroundPosition = 'center';
        nick = false;


    } else {
        nickimg.style.display = 'block';
        nickimg.style.backgroundPosition = 'left';
        nick = true;
    }
}

function validateEmail() {
    var emailImg = document.getElementById("img2");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!inputEmail.value) {
        emailImg.style.display = 'block';
        emailImg.style.backgroundPosition = 'right';
        email = false;
    } else if (!filter.test(inputEmail.value)) {
        emailImg.style.display = 'block';
        emailImg.style.backgroundPosition = 'center';
        email = false;
    } else {
        emailImg.style.display = 'block';
        emailImg.style.backgroundPosition = 'left';
        email = true;
    }
}

function validateArea() {
    var textImg = document.getElementById("img3");
    if (!inputText.value) {
        textImg.style.display = 'block';
        textImg.style.backgroundPosition = 'right';
        text = false;
    } else if (inputText.value.length < 30) {
        textImg.style.display = 'block';
        textImg.style.backgroundPosition = 'center';
        text = false;


    } else {
        textImg.style.display = 'block';
        textImg.style.backgroundPosition = 'left';
        text = true;
    }
}


// валидация всей формы для отправки //
function sendForm() {

    var currentDate;
    var clearForm;

    if (nick !== false && email !== false && text !== false) {
        var newDiv = document.createElement("div");
        newDiv.className = "messblock";



        var NameDiv = document.createElement("p");
        NameDiv.className = "nameblock";
        var timeDiv = document.createElement("p");
        timeDiv.className = "timeblock";
        timeDiv.id = "timer";
        var TextDiv = document.createElement("p");
        TextDiv.className = "textblock";
        var MailDiv = document.createElement("p");
        MailDiv.className = "mailblock";




        var userName = inpunNick.value;
        var userMail = inputEmail.value;
        var userText = inputText.value;

        currentDate = getCurrDate();

        newDiv.appendChild(NameDiv);
        newDiv.appendChild(timeDiv);
        newDiv.appendChild(TextDiv);
        newDiv.appendChild(MailDiv);        


        NameDiv.appendChild(document.createTextNode(userName + ":"));
        TextDiv.appendChild(document.createTextNode(userText));
        MailDiv.appendChild(document.createTextNode(userMail));
        timeDiv.appendChild(document.createTextNode(currentDate));
        usermessage.appendChild(newDiv);
        
        clearForm = ClearInput();


    }    

}


// Date
function getCurrDate() {


    var Ndate = new Date();
    var hours = Ndate.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    var minutes = Ndate.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var day = Ndate.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var month = Ndate.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var year = Ndate.getFullYear();
    var CurrentDate = (hours + ":" + minutes + "  " + day + "." + month + "." + year)
    return CurrentDate;
}

// очищение инпутов, блокировка отправки
function ClearInput() {
        inpunNick.value = "";
        var nickimg = document.getElementById("img1");
        nickimg.style.display = 'none';

        inputEmail.value = "";
        var emailImg = document.getElementById("img2");
        emailImg.style.display = 'none';

        inputText.value = "";
        var textImg = document.getElementById("img3");
        textImg.style.display = 'none';

        nick = false;
        email = false;
        text = false;
}


//
//
//
//             Lesson 2 
//
//
//
//


var i = 0;
var arr = [];
var length = arr.length;


function showFace() {

    var value = num.value;
    if (value <= 10) {
        for (i = 0; i <= value; i++) {
            arr[i] = [];
            for (m = 0; m < i; m++) {
                var BoolFace = document.createElement("div");
                BoolFace.setAttribute("class", "face");
                BoolFace.id = "face-" + m;

                arr[i].push(BoolFace);
                // алерт на клик по фотке
                BoolFace.onclick = function(event) {
                    // var str = BoolFace.id;
                    var NumFace = event.target.id;
                    var arr = NumFace.split('-');
                    alert("Щачло Буля № " + (+arr[1] + 1));
                }
            }

            for (k = arr.length - 1; k > 0; k--) {
                var BoolFacenew = document.createElement("div");
                BoolFacenew.setAttribute("class", "face-container");
                for (l = 0; l < arr.length; l++) {
                    if (arr[k][l]) {
                        BoolFacenew.appendChild(arr[k][l]);
                    }
                }
                globalDiv.appendChild(BoolFacenew);
                num.value = "";
            }

        }

    } else {
        num.value = "";
        alert("Введите число от '1\' до '10\' !");
    }

}
//
//
