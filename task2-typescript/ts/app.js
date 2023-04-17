var row = document.querySelector('.row');
var men = document.querySelector('.men');
var jew = document.querySelector('.jew');
var elec = document.querySelector('.elec');
var women = document.querySelector('.women');
var startCount = 0;
var endCount = 4;
var myfunction = function () {
    fetch('https://fakestoreapi.com/products')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        var card = "";
        for (var i = startCount; i < endCount; i++) {
            card += "<div class=\"col-12 col-sm-6 col-md-3\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=".concat(data[i].image, " class=\"card-img-top\" alt=\"...\" >\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(data[i].title, "</h5>\n            <p class=\"card-text\">").concat(data[i].price, "$</p>\n            <a href=\"#\" class=\"btn btn-primary\">Buy Now</a>\n        </div>\n        </div>\n      </div>\n      ");
            row.innerHTML = card;
        }
    });
};
men.onclick = function () {
    startCount = 0;
    endCount = 4;
    myfunction();
};
jew.onclick = function () {
    startCount = 4;
    endCount = 8;
    myfunction();
};
elec.onclick = function () {
    startCount = 12;
    endCount = 16;
    myfunction();
};
women.onclick = function () {
    startCount = 16;
    endCount = 20;
    myfunction();
};
myfunction();
