// randomizer
function rand() {
    var r = 1 - 0.5 + Math.random() * (21 - 1 + 1);
    r = Math.round(r);
    return r;
}

function AddImg(useRandom) {
    var r;
    var img;
    var ElementName;
    var ShortName;
    var FullWay;

    if (localStorage.getItem("PictureName") !== null && !useRandom) {
        var string = localStorage.getItem("PictureName");
    }else{
       r = rand(); 
    }




    // Создание поля картинки
    img = document.createElement("IMG");
    img.id = "ImageBox";

    // Присвоение номера
    if (r > 9) {
        img.src = "lesson2/img/Image-" + r + ".jpg";
        FullWay = img.src;
    } else if (r < 10) {
        img.src = "lesson2/img/Image-0" + r + ".jpg";
        FullWay = img.src;
    } else if (!r) {
        img.src = string;
    }

    addEvent(img, ShortName, ElementName, FullWay);
    // Запись картинки
    ImageBig.appendChild(img);

    var Str = img.src;
        localStorage.setItem("PictureName", Str);

}



function addEvent(img, ShortName, ElementName, FullWay) {
    img.onclick = function(event) {



        var ElementName = document.createElement("a");
        ElementName.class = "nameIMG";
        ElementName.id = "FullName";
        // var FullWay = img.src;
        ShortName = event.currentTarget.src.substr(event.currentTarget.src.length - 12);


        ImName.innerHTML = ShortName;

        ImageBig.removeChild(img);
        AddImg(true);
    }

}

// Смена картинки по клику

function BackImg(event){
    document.getElementById('ImageBox').src = "lesson2/img/" + event.currentTarget.innerHTML
    
}
