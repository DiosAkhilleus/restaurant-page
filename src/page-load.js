const pageLoad = () => { //loads all html elements into the content div of index.html
    let content = document.getElementById('content');
    let header = document.createElement('nav');
        let home = document.createElement('a');
        let menu = document.createElement('a');
        let contact = document.createElement('a');
        let about = document.createElement('a');

    let main = document.createElement('div');
        let title = document.createElement('h1');

    let footer = document.createElement('div');
    
    header.setAttribute('id', 'header');
    main.setAttribute('id', 'main');
    footer.setAttribute('id', 'footer');

    title.setAttribute('id', 'title');
        title.innerHTML = 'Podarkes BBQ';

    home.setAttribute('class', 'nav-list');
    home.setAttribute('href', 'https://google.com');
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

    main.appendChild(title);

    header.appendChild(home);
    home.after(menu);
    menu.after(contact);
    contact.after(about);

    console.log("pageLoad?");
}

export {  pageLoad  };