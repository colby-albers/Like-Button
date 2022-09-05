var Addlikes = document.getElementById("add");
var likeCount = 3;


function increase() {
    likeCount++;

    Addlikes.innerText = likeCount +  " like(s)";
console.log(Addlikes);
}
