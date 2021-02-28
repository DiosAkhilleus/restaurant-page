const pageLoad = () => {
    let content = document.getElementById('content');
    let header = document.createElement('div')
    let main = document.createElement('div');
    let footer = document.createElement('div');
    header.setAttribute('id', 'header');
    main.setAttribute('id', 'main');
    footer.setAttribute('id', 'footer');
    
    content.appendChild(header);
    header.after(main);
    main.after(footer);
    console.log("pageLoad?");
}

export {  pageLoad  };