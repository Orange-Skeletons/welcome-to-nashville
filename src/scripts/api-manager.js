// Purpose: The point of this file is to handle all API requests.

const data = {
    
    getTicketmasterData(searchString) {
    const ticketmasterApiBaseUrl = "https://app.ticketmaster.com/discovery/v2/"
    return fetch(`${ticketmasterApiBaseUrl}events.json?classificationName=${searchString}&dmaId=343&city=nashville&size=6&apikey=${ticketmasterApiKey}`)
    .then(concerts => concerts.json())
},




getEventbriteData(searchString) {
    /* TODO: UNCOMMENT BELOW WHEN EVENTBRITE-API 'EVENTS' ENDPOINT IS CONFIRMED WORKING */
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchString}&location.address=nashville&token=${eventbriteApiKey}`, {
        "headers": {
            "Accept": "application/json"
        }
    }).then(r => r.json())
},


getZomatoData(searchString) {
    return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchString}&count=6&apikey=${zomatoApiKey}`)
    .then(restaurants => restaurants.json())

},
getParksData(searchString) {

    const parksApiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json"
    return fetch(`
${parksApiBaseUrl}?${searchString}=Yes`, {
            "headers": {
                "Accept": "application/json",
                "X-App-Token": parksApiKey
            }
        })
        .then(response => response.json());
    }
}

export default data
