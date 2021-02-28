const pageLoad = () => {
    let content = document.getElementById('content');
    let header = document.createElement('nav');
    let home = document.createElement('li');
    let menu = document.createElement('li');
    let contact = document.createElement('li');
    let about = document.createElement('li');
    let main = document.createElement('div');
    let footer = document.createElement('div');
    header.setAttribute('id', 'header');
    main.setAttribute('id', 'main');
    footer.setAttribute('id', 'footer');

    home.setAttribute('class', 'nav-list');
    home.innerHTML = 'Home';
    menu.setAttribute('class', 'nav-list');
    menu.innerHTML = 'Menu';
    contact.setAttribute('class', 'nav-list');
    contact.innerHTML = 'Contact';
    about.setAttribute('class', 'nav-list');
    about.setAttribute('id', 'about');
    about.innerHTML = 'About';

    content.appendChild(header);
    header.after(main);
    main.after(footer);

    header.appendChild(home);
    home.after(menu);
    menu.after(contact);
    contact.after(about);

    console.log("pageLoad?");
}

export {  pageLoad  };