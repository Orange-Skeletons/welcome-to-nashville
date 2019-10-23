const itineraryContainer = document.querySelector(".itineraryContainer")
// This function will put the HTML string in the DOM for users to see
const createItineraryContainer = () => {
    // This return contains the string that has the HTML elements
    return `
    <article class="itinerary">
        <h3>Itinerary</h3>
            <h5><strong>Park:</strong></h5>
            <p id="park-itinerary"></p>
            <h5><strong>Restaurant:</strong></h5>
            <p id="restaurant-itinerary"></p>
            <h5><strong>Meetup:</strong></h5>
            <p id="meetup-itinerary"></p>
            <h5><strong>Concert:</strong></h5>
            <p id="concert-itinerary"></p>
    </article>
    `
}
// This places the function inside in the index.html
itineraryContainer.innerHTML = createItineraryContainer()