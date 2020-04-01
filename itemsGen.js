var searchBarPc = document.querySelector('.searchWarp');
var searchBarMob = document.querySelector('.searchWarpMob');

var arrLinks = ["test.html", "test.html", "test.html", "test.html", "test.html", "test.html", "test.html", "test.html", "test.html", "test.html", "test.html", "test.html"],
  arrImgs = ["img//Show/img (1).jpg", "img//Show/img (2).jpg", "img//Show/img (3).jpg", "img//Show/img (4).jpg", "img//Show/img (5).jpg", "img//Show/img (6).jpg", "img//Show/img (7).jpg", "img//Show/img (8).jpg", "img//Show/img (9).jpg", "img//Show/img (10).jpg", "img//Show/img (11).jpg", "img//Show/img (12).jpg"],
  arrNames = ["Chernobyl", "Dark", "You", "Dracula", "Game Of Thrones", "The Witcher", "La Case De Papel", "The 100", "Mr Robot", "13 Reasons Why", "Stranger Things", "Breaking Bad"];
console.log(arrNames.length);

for (var i = 0; i < arrNames.length; i++) {
  searchBarPc.innerHTML += "<a href=\'" + arrLinks[i] + "\'>" +
    "<li>" +
    "<img src='" + arrImgs[i] + "'>" +
    "<p>" + arrNames[i] + "</p>" +
    "</li>" +
    "</a>"
}

for (var i = 0; i < arrNames.length; i++) {
  searchBarMob.innerHTML += "<a href=\'" + arrLinks[i] + "\'>" +
    "<li>" +
    "<img src='" + arrImgs[i] + "'>" +
    "<p>" + arrNames[i] + "</p>" +
    "</li>" +
    "</a>"
}