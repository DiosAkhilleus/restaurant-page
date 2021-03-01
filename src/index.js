
import { createTabs, pageLoad, setTabs } from './page-load';
console.log("Webpack Connected");

window.addEventListener('load', loadAll);
window.addEventListener('load')

function loadAll() {
    pageLoad();
    createTabs();
    check()
    setTabs();
}

function check() {
    document.getElementById('1').checked = true;
}