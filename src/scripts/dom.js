// Purpose: this file holds the functions for general DOM rendering (page title, results header)

// create main page header
const pageTitle = {
    renderPageTitle() {
    // get empty container element
    let container = document.querySelector("#welcome-title")
    // create HTML element div
    let headerEl = document.createElement("h1");
    // element attributes
    headerEl.id = "title";
    headerEl.innerText = "Welcome to Nashville!"
    // write HTML to dom
    container.appendChild(headerEl)
    }
}

export default pageTitle
