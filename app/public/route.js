let route = () => {
    let path = window.location.pathname.split('/');
    render(path);
}

let render = (path) => {
    let rootPath = path[1];
    let template = templates[rootPath];

    document.getElementsByTagName('app-root')[0].innerHTML = template;
}

let templates = {
    page1: `
        <h1> This is the page 01 </h1>
    `,

    page2: `
        <h1> This is the page 02 </h1>
    `
}

route();