
import { createTabs, pageLoad, setTabs } from './page-load';
console.log("Connected");

window.addEventListener('load', loadAll);

function loadAll() {
    pageLoad();
    createTabs();
    check();
    setTabs();
}

function check() {
    document.getElementById('1').checked = true;
}