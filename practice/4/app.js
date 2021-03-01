var save = this;
let fileNames = ["index.html", "ajax_info.html"]
function Ajax(file) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("display").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", fileNames[file], true);
    xhttp.send();

}





