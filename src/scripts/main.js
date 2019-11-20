// import 'bootstrap';
import pageTitle from "./dom.js" 
import form from "./searchform-manager.js"
import searchEvent from "./event-manager.js"
import itinerary from "./itinerary-manager.js"
import results from "./searchresults-manager.js"

pageTitle.renderPageTitle();

form.buildSearchForm();

searchEvent.attachSearchEvent();

results.renderResultsContainer();

itinerary.createItineraryContainer();



