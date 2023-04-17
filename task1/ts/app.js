// const fuction=()=>{
var row = document.querySelector('.row');
var btn = document.querySelectorAll('button');
var startCount = 0;
var endCount = 50;
var myfunction = function () {
    fetch('https://restcountries.com/v3.1/all')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        // console.log(data);
        var card = "";
        for (var i = startCount; i < endCount; i++) {
            card += "\n           <div class=\"col-12 col-sm-6 col-md-4\">\n           <div class=\"card\" >\n            <img src=".concat(data[i].flags.png, " class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(data[i].name.common, "</h5>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">").concat(data[i].capital, "</a>\n                <p>").concat(i + 1, "</p>\n            </div>\n            </div>\n           </div>\n           ");
            row.innerHTML = card;
        }
    });
};
btn[0].onclick = function () {
    startCount = 0;
    endCount = 50;
    myfunction();
};
btn[1].onclick = function () {
    startCount = 50;
    endCount = 100;
    myfunction();
};
btn[2].onclick = function () {
    startCount = 100;
    endCount = 150;
    myfunction();
};
btn[3].onclick = function () {
    startCount = 150;
    endCount = 200;
    myfunction();
};
myfunction();
