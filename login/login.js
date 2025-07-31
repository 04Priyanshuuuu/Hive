function data() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("n3").value;
    var d = document.getElementById("n4").value;
    var e = document.getElementById("n5").value;


    if (a == "" || b == "" || c == "" || d == "") {
        alert("All fields are mandatory!!");
        return false;
    }
    else if (b.length > 10 || b.length < 10) {
        alert("Number should be of 10 digits!!Please enter a valid number");
        return false;
    }
    else if (isNaN(b)) {
        alert("Only numbers allowed!!Please enter a valid number");
        return false;
    }
    else if (c != d) {
        alert("Please enter same password!!");
        return false;
    }
    else {
        true;
    }
}