function hesapla() {
    let urun = document.getElementById("selectOption").value;
    let gün = parseInt(document.getElementById("urun").value);
    let sayfa = parseInt(document.getElementById("sayfa").value);
    let toplam = 0;

    if (urun == "eticaret") {
        toplam = gün * sayfa * 200;
    } else {
        toplam = gün * sayfa * 100;
    }
    document.getElementById("demo").innerHTML = "Toplam Maliyet: " + toplam + " TL";
}
window.onload = hesapla;
