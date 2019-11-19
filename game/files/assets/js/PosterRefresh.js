

function changeImg() {
    $('actionImg').src=Math.floor((Math.random() * 2) + 1).toString() + '.jpg';
}
setInterval(changeImg,3000);                     