const pageLoad = () => { //loads all html elements into the content div of index.html
    let content = document.getElementById('content');
    let header = document.createElement('nav');
        let home = document.createElement('input');
            let homeLabel = document.createElement('label');
                let contHome = document.createElement('div');
        let menu = document.createElement('input');
            let menuLabel = document.createElement('label');
                let contMenu = document.createElement('div');
        let contact = document.createElement('input');
            let contactLabel = document.createElement('label');
                let contContact = document.createElement('div');
        let about = document.createElement('input');
            let aboutLabel = document.createElement('label');
                let contAbout = document.createElement('div');

    let tab = document.createElement('div');

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
        home.setAttribute('type', 'radio');
            home.setAttribute('id','tab1');
                home.setAttribute('name', 'tab');
                    home.innerHTML = 'Home';
        homeLabel.setAttribute('class', 'tabButton');
            homeLabel.setAttribute('for', 'tab1');
                homeLabel.setAttribute('id', 'tabHome');
                    homeLabel.innerHTML = 'Home';
        tab.setAttribute('class', 'tab');
    menu.setAttribute('class', 'header-nav');
        menu.setAttribute('type', 'radio');
            menu.setAttribute('id', 'tab2');
                menu.setAttribute('name', 'tab');
                    menu.innerHTML = 'Menu';
        menuLabel.setAttribute('class', 'tabButton');
            menuLabel.setAttribute('for', 'tab2');
                menuLabel.setAttribute('id', 'tabMenu');
                    menuLabel.innerHTML = 'Menu';
    contact.setAttribute('class', 'header-nav');
        contact.setAttribute('type', 'radio');
            contact.setAttribute('id', 'tab3')
                contact.setAttribute('name', 'tab');
                    contact.innerHTML = 'Contact';
            contactLabel.setAttribute('class', 'tabButton');
                contactLabel.setAttribute('for', 'tab3');
                    contactLabel.setAttribute('id', 'tabContact');
                        contactLabel.innerHTML = 'Contact';  
    about.setAttribute('class', 'header-nav');
        about.setAttribute('id', 'tab4');
            about.setAttribute('type', 'radio');
                about.setAttribute('name', 'tab');
                    about.innerHTML = 'About';
            aboutLabel.setAttribute('class', 'tabButton');
                aboutLabel.setAttribute('for', 'tab4');
                    aboutLabel.setAttribute('id', 'tabRight');
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
            homeLabel.after(tab);
                tab.appendChild(cont);
                tab.after(menu);
                    
        menu.after(menuLabel);
    menuLabel.after(contact);
        contact.after(contactLabel);
    contactLabel.after(about)
        about.after(aboutLabel);

    main.appendChild(title);
    title.after(img);

    

    footer.appendChild(jobs);
    jobs.after(services);
    

    console.log("pageLoad?");
}

export {  pageLoad  };

{/* <div class="tabsy">
    <input type="radio" id="tab1" name="tab" checked>
    <label class="tabButton" for="tab1">Tab One</label>
    <div class="tab">
    	<div class="content">
    		Content One
    	</div>
    </div>
    <input type="radio" id="tab2" name="tab" checked>
    <label class="tabButton" for="tab2">Tab Two</label>
    <div class="tab">
    	<div class="content">
    		Content Two
    	</div>
    </div>
    <input type="radio" id="tab3" name="tab" checked>
    <label class="tabButton" for="tab3">Tab Three</label>
    <div class="tab">
    	<div class="content">
    		Content Three
    	</div>
    </div>
</div>
 */}
