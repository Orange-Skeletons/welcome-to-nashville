// Purpose: This file handles event listeners.
import form from "./searchform-manager.js"

const searchEvent = {
attachSearchEvent() {
    const concertsSearchButton = document.querySelector("#concertsSearchButton")
    concertsSearchButton.addEventListener("click", form.searchFormTicketmaster)

    const parksSearchButton = document.querySelector("#parksSearchButton")
    parksSearchButton.addEventListener("click", form.searchFormParks)

    const restaurantsSearchButton = document.querySelector("#restaurantsSearchButton")
    restaurantsSearchButton.addEventListener("click", form.searchFormZomato)

    const meetupsSearchButton = document.querySelector("#meetupsSearchButton")
    meetupsSearchButton.addEventListener("click", form.searchFormEventbrite)


    const restaurantEventFunction = (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.querySelector("#restaurantsSearchButton").click();
        }
    }
    // Selects restaurant input
    let enterKeyHandlerRestaurants = document.getElementById("restaurants-input")
    // Execute a function when the user releases a key on the keyboard
    enterKeyHandlerRestaurants.addEventListener("keyup", restaurantEventFunction);


    const concertsEventFunction = (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.querySelector("#concertsSearchButton").click();
        }
    }
    // Selects restaurant input
    let enterKeyHandlerConcerts = document.getElementById("concerts-input")
    // Execute a function when the user releases a key on the keyboard
    enterKeyHandlerConcerts.addEventListener("keyup", concertsEventFunction);


    const meetupsEventFunction = (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.querySelector("#meetupsSearchButton").click();
        }
    }
    // Selects restaurant input
    let enterKeyHandlerMeetups = document.getElementById("meetups-input")
    // Execute a function when the user releases a key on the keyboard
    enterKeyHandlerMeetups.addEventListener("keyup", meetupsEventFunction);


    const parksEventFunction = (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.querySelector("#parksSearchButton").click();
        }
    }
    // Selects restaurant input
    let enterKeyHandlerParks = document.getElementById("parks-dropdown-box")
    // Execute a function when the user releases a key on the keyboard
    enterKeyHandlerParks.addEventListener("keyup", parksEventFunction);

  }
}

export default searchEvent
