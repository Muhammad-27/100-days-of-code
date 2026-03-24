const time = document.getElementById("time");
const nowDataTeg = document.getElementById("now-data-teg");

function addZero(num) {
    return num < 10 ? "0" + num : num;
}

function updataTime() {
    const now = new Date();
    const h = now.getHours()
    const m = now.getMinutes()
    const s = now.getSeconds()
    time.innerHTML = addZero(h) + ":" + addZero(m) + ":" + addZero(s);
    time.setAttribute("datetime", now.toISOString())
    nowDataTeg.innerHTML = now.toLocaleDateString();
}
updataTime()
setInterval(updataTime, 1000)
