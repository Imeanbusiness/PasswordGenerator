var device = "null"

const ua = navigator.userAgent
if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
  device = "phone"
} else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
  device = "tablet"
} else {
  device = "dektop"
}



function generate() {
    var Name = document.getElementById("Name");
    var Sport = document.getElementById("Sport");
    var Food = document.getElementById("Food");
    var Birth = document.getElementById("Birthday");
    var Surname = document.getElementById("Surname");
    var number;
    number = Math.floor(Math.random() * 9999);
    var chance = Math.floor(Math.random() * 15);
    if (chance == 0) {
        var password = Name.value+Sport.value+Birth.value;
    } else if (chance == 1) {
        var password = Name.value+Food.value+Birth.value;
    } else if (chance == 2) {
        var password = Name.value+Birth.value;
    } else if (chance == 3) {
        var password = Name.value+Food.value+Birth.value;
    } else if (chance == 4) {
        var password = Name.value+Birth.value+number;
    } else if (chance == 5) {
        var password = Name.value+"@"+Birth.value;
    } else if (chance == 6) {
        var password = Name.value+Birth.value+"!";
    } else if (chance == 7) {
        var password = Name.value+Surname.value+Birth.value;
    } else if (chance == 8) {
        var password = Name.value+Surname.value+Birth.value+"!";
    } else if (chance == 9) {
        var password = Surname.value+Name.value+Birth.value;
    } else if (chance == 10) {
        var password = Sport.value+Birth.value;
    } else if (chance == 11) {
        var password = Sport.value+"!"+Birth.value;
    } else if (chance == 12) {
        var password = Sport.value+number;
    } else if (chance == 13) {
        var password = Sport.value+number+Name.value;
    } else if (chance == 14) {
        var password = Name.value+number;
    } else if (chance == 15) {
        var password = Birth.value+Name.value;
    } else if (chance == 16) {
        var password = Name.value+Birth.value+"?";
    } else if (chance == 17) {
        var password = Name.value+"-"+Sport.value+"-"+number+Food.Value;
    } else if (chance == 18) {
        var password = Name.value+"-"+Sport.value+"-"+Birth.value+Food.Value;
    } else if (chance == 19) {
        var password = Surname.value+"-"+Sport.value+"-"+Birth.value+Food.Value;
    } else if (chance == 20) {
        var password = Name.value+Surname.value+"!"+Birth.value;
    } else if (chance == 21) {
        var password = Name.value+Surname.value+"!"+number;
    } else if (chance == 21) {
        var password = Name.value+Surname.value+"!"+number;
    } else if (chance == 22) {
        var password = Surname.value+"@"+Birth.value+"!";
    } else if (chance == 23) {
        var password = Surname.value+Name.value+"@"+Birth.value+"!";
    } else if (chance == 24) {
        var password = Name.value+Birth.value+"!";
    } else if (chance == 25) {
        var password = Name.value+"%"+Birth.value+"/";
    } else if (chance == 26) {
        var password = "{"+Name.value+"}"+Birth.value+"!";
    } else if (chance == 27) {
        var password = Name.value+"!"+Birth.value+"?";
    } else if (chance == 28) {
        var password = number+Name.value+Birth.value+"#";
    } else if (chance == 29) {
        var password = "%"+number+Name.value+Sport.value+"@";
    } else {
        var password = Surname.value+"@"+Name.value+Birth.vaule;
    }
    document.getElementById("password").innerHTML = password
}