const pageLoad = () => { //loads all html elements into the content div of index.html
    let content = document.getElementById('content');
    let header = document.createElement('nav');
        let home = document.createElement('input');
            let homeLabel = document.createElement('label');
        let menu = document.createElement('input');
            let menuLabel = document.createElement('label');   
        let contact = document.createElement('input');
            let contactLabel = document.createElement('label');      
        let about = document.createElement('input');
            let aboutLabel = document.createElement('label');
                
    let main = document.createElement('div');

    let footer = document.createElement('div');
        let jobs = document.createElement('a');
        let services = document.createElement('a');
    
    header.setAttribute('id', 'header');
    main.setAttribute('id', 'main');
    footer.setAttribute('id', 'footer');

    home.setAttribute('class', 'header-nav');
        home.setAttribute('type', 'radio');
            home.setAttribute('id','1');
                home.setAttribute('name', 'tab');
                    home.innerHTML = 'Home';
        homeLabel.setAttribute('class', 'tabButton');
            homeLabel.setAttribute('for', '1');
                homeLabel.setAttribute('id', 'tabHome');
                    homeLabel.innerHTML = 'Home';
       
    menu.setAttribute('class', 'header-nav');
        menu.setAttribute('type', 'radio');
            menu.setAttribute('id', '2');
                menu.setAttribute('name', 'tab');
                    menu.innerHTML = 'Menu';
        menuLabel.setAttribute('class', 'tabButton');
            menuLabel.setAttribute('for', '2');
                menuLabel.setAttribute('id', 'tabMenu');
                    menuLabel.innerHTML = 'Menu';

    contact.setAttribute('class', 'header-nav');
        contact.setAttribute('type', 'radio');
            contact.setAttribute('id', '3')
                contact.setAttribute('name', 'tab');
                    contact.innerHTML = 'Contact';
            contactLabel.setAttribute('class', 'tabButton');
                contactLabel.setAttribute('for', '3');
                    contactLabel.setAttribute('id', 'tabRight');
                        contactLabel.innerHTML = 'Contact';  

    about.setAttribute('class', 'header-nav');
        about.setAttribute('id', '4');
            about.setAttribute('type', 'radio');
                about.setAttribute('name', 'tab');
                    about.innerHTML = 'About';
            aboutLabel.setAttribute('class', 'tabButton');
                aboutLabel.setAttribute('for', '4');
                    aboutLabel.setAttribute('id', 'tabAbout');
                        aboutLabel.innerHTML = 'About';

    jobs.setAttribute('class', 'footer-nav');
        jobs.innerHTML = 'Jobs';
    services.setAttribute('class', 'footer-nav');
        services.innerHTML = 'Services';

    content.appendChild(header); 
    header.after(main);
    main.after(footer);

    header.appendChild(home);
        home.after(homeLabel);
    homeLabel.after(menu);
        menu.after(menuLabel);

        menuLabel.after(about);
        about.after(aboutLabel);
        aboutLabel.after(contact);
        contact.after(contactLabel);
    // menuLabel.after(contact);
    //     contact.after(contactLabel);
    // contactLabel.after(about);
    //     about.after(aboutLabel);

    footer.appendChild(jobs);
    jobs.after(services);
}

const createTabs = () => {
    let img = document.createElement('img');
    let img2 = document.createElement('img');
    let title = document.createElement('h1');
        title.setAttribute('id', 'title');
        title.innerHTML = 'Akhos BBQ';
        img.setAttribute('src', 'https://i.ibb.co/mThJR2V/BBQ-Photo.png');
        img2.setAttribute('src', 'https://i.ibb.co/HzLKMY4/menu.png');
        img2.setAttribute('id', 'img2');
    let tabHome = document.createElement('div');
        tabHome.setAttribute('id', 'tab1');
        tabHome.setAttribute('class', 'tabDisp');
        tabHome.appendChild(title);
        title.after(img);
        let subtext = document.createElement('h2');
        subtext.setAttribute('id', 'subtext');
        subtext.innerHTML = '"The best BBQ west of Memphis"'
        img.after(subtext);

    let menuTitle = document.createElement('h1');
        menuTitle.setAttribute('id', 'title');
        menuTitle.innerHTML = 'Menu';
    let tabMenu = document.createElement('div');
        tabMenu.setAttribute('id', 'tab2');
        tabMenu.setAttribute('class', 'tabDisp');
        tabMenu.appendChild(menuTitle);
        menuTitle.after(img2);
    
    let contactTitle = document.createElement('h1');
        contactTitle.setAttribute('id', 'title');
        contactTitle.innerHTML = 'Contact Info';
    let tabContact = document.createElement('div');
        tabContact.setAttribute('id', 'tab3');
        tabContact.setAttribute('class', 'tabDisp');
        tabContact.appendChild(contactTitle);
    let details = document.createElement('p');
    details.setAttribute('id', 'details');
    details.innerHTML = "Phone: &nbsp&nbsp (512) 327-1742<br/><br/>Address: 6500 W. Bee Cave Rd.<br/>   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp   Austin, TX 78746<br/><br/>Email: &nbsp&nbsp akhosbbq@gmail.com "
    contactTitle.after(details);

    let aboutTitle = document.createElement('h1');
        aboutTitle.setAttribute('id', 'title');
        aboutTitle.innerHTML = 'About Us';
    let tabAbout = document.createElement('div');
        tabAbout.setAttribute('id', 'tab4');
        tabAbout.setAttribute('class', 'tabDisp');
        tabAbout.appendChild(aboutTitle);
    let aboutText = document.createElement('p');
    let aboutImg = document.createElement('img');
    aboutImg.setAttribute('src', 'https://i.ibb.co/JjJ7886/smoker.jpg');
    aboutImg.setAttribute('id', 'aboutImg')
        aboutText.setAttribute('id', 'aboutText');
        aboutText.innerHTML = 'When our founder, DiosAkhilleus, was a young lad, he worked every day with his father to try and make better smoked meats than the previous day. He did this every day until he reached the age of 18, at which point he took over his father\'s smokehouse and made a restaurant from it. This is that restaurant.';
    aboutTitle.after(aboutImg);
    aboutImg.after(aboutText);

        document.getElementById('main').appendChild(tabHome);
        document.getElementById('main').appendChild(tabMenu);
        document.getElementById('main').appendChild(tabContact);
        document.getElementById('main').appendChild(tabAbout);
    }

const setTabs = () => {
    document.getElementById('1').addEventListener('click', set);
    document.getElementById('2').addEventListener('click', set);
    document.getElementById('3').addEventListener('click', set);
    document.getElementById('4').addEventListener('click', set);


    function set(e) {
        let targ = e.target.id;
        let tabs = document.getElementsByClassName('tabDisp');
        for(let i = 0; i < tabs.length; i++){
            tabs[i].style.display = 'none';
        }
        document.getElementById(`tab${targ}`).style.display = 'block';
    }
}

export {  pageLoad, createTabs, setTabs  };
