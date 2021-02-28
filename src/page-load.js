const pageLoad = () => { //loads all html elements into the content div of index.html
    let content = document.getElementById('content');
    let header = document.createElement('nav');
        let home = document.createElement('a');
        let menu = document.createElement('a');
        let contact = document.createElement('a');
        let about = document.createElement('a');

    let main = document.createElement('div');
        let title = document.createElement('h1');
        let img = document.createElement('img');

    let footer = document.createElement('div');
        let jobs = document.createElement('a');
        let services = document.createElement('a');

    
    header.setAttribute('id', 'header');
    main.setAttribute('id', 'main');
    footer.setAttribute('id', 'footer');

    title.setAttribute('id', 'title');
        title.innerHTML = 'Podarkes BBQ';

    img.setAttribute('src', 'https://jesspryles.com/wp-content/uploads/2020/12/pork-belly-sliders-1440x900.jpg')

    home.setAttribute('class', 'header-nav');
    home.setAttribute('href', '#');
        home.innerHTML = 'Home';
    menu.setAttribute('class', 'header-nav');
    menu.setAttribute('href', '#');
        menu.innerHTML = 'Menu';
    contact.setAttribute('class', 'header-nav');
    contact.setAttribute('href', '#');
        contact.innerHTML = 'Contact';
    about.setAttribute('class', 'header-nav');
    about.setAttribute('id', 'about');
    about.setAttribute('href', '#');
        about.innerHTML = 'About';

    jobs.setAttribute('class', 'footer-nav');
        jobs.innerHTML = 'Jobs';
    services.setAttribute('class', 'footer-nav');
        services.innerHTML = 'Services';

    content.appendChild(header);
    header.after(main);
    main.after(footer);

    main.appendChild(title);
    title.after(img);

    header.appendChild(home);
    home.after(menu);
    menu.after(contact);
    contact.after(about);

    footer.appendChild(jobs);
    jobs.after(services);
    

    console.log("pageLoad?");
}

export {  pageLoad  };