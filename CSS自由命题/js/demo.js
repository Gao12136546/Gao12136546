window.setInterval("changeTime()", 1000)

function changeTime() {
    var time = new Date();
    var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
    var minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
    var second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
    document.getElementById("time").innerText = hour + ":" + minutes + ":" + second;
}

var dis_1 = document.getElementById("dis_1");
var dis_2 = document.getElementById("dis_2");
var dis_3 = document.getElementById("dis_3");
var dis_4 = document.getElementById("dis_4");
var dis_5 = document.getElementById("dis_5");
var div = document.getElementById("dis_img")
dis_1.onmouseover = function () {
    div.src = "image/image1.png";
}
dis_1.onmouseout = function () {
    div.src = "";
}
dis_2.onmouseover = function () {
    div.src = "image/image4.png";
}
dis_2.onmouseout = function () {
    div.src = "";
}
dis_3.onmouseover = function () {
    div.src = "image/image5.png";
}
dis_3.onmouseout = function () {
    div.src = "";
}
dis_4.onmouseover = function () {
    div.src = "image/image2.jpg";
}
dis_4.onmouseout = function () {
    div.src = "";
}
dis_5.onmouseover = function () {
    div.src = "image/image3.png";
}
dis_5.onmouseout = function () {
    div.src = "";
}

var head_1 = document.getElementById("head_dis_1");
var head_2 = document.getElementById("head_dis_2");
var head_3 = document.getElementById("head_dis_3");
var head_4 = document.getElementById("head_dis_4");
var head_5 = document.getElementById("head_dis_5");

var rea_1 = document.getElementById("head_1");
var rea_2 = document.getElementById("head_2");
var rea_3 = document.getElementById("head_3");
var rea_4 = document.getElementById("head_4");
var rea_5 = document.getElementById("head_5");

head_1.onmouseover = function () {
    rea_1.style.visibility = "visible";
}
rea_1.onmouseover = function () {
    rea_1.style.visibility = "visible";
}
head_1.onmouseout = function () {
    rea_1.style.visibility = "hidden";
}
rea_1.onmouseout = function () {
    rea_1.style.visibility = "hidden";
}

head_2.onmouseover = function () {
    rea_2.style.visibility = "visible";
}
rea_2.onmouseover = function () {
    rea_2.style.visibility = "visible";
}
head_2.onmouseout = function () {
    rea_2.style.visibility = "hidden";
}
rea_2.onmouseout = function () {
    rea_2.style.visibility = "hidden";
}

head_3.onmouseover = function () {
    rea_3.style.visibility = "visible";
}
rea_3.onmouseover = function () {
    rea_3.style.visibility = "visible";
}
head_3.onmouseout = function () {
    rea_3.style.visibility = "hidden";
}
rea_3.onmouseout = function () {
    rea_3.style.visibility = "hidden";
}

head_4.onmouseover = function () {
    rea_4.style.visibility = "visible";
}
rea_4.onmouseover = function () {
    rea_4.style.visibility = "visible";
}
head_4.onmouseout = function () {
    rea_4.style.visibility = "hidden";
}
rea_4.onmouseout = function () {
    rea_4.style.visibility = "hidden";
}

head_5.onmouseover = function () {
    rea_5.style.visibility = "visible";
}
rea_5.onmouseover = function () {
    rea_5.style.visibility = "visible";
}
head_5.onmouseout = function () {
    rea_5.style.visibility = "hidden";
}
rea_5.onmouseout = function () {
    rea_5.style.visibility = "hidden";
}
