
import { pageLoad } from './page-load';
console.log("Webpack Connected");

window.addEventListener('load', loadAll);
window.addEventListener('load')

function loadAll() {
    pageLoad();
    check()
}

function check() {
    document.getElementById('tab1').checked = true;
}