# Welcome to Nashville!


### Search For Things to Do in Music City
![](./src/images/Welcome-To-Nashville.gif)
-----

Welcome to Music City! You can use our application to search for the following Nashville attractions:
* Parks
* Restaurants
* Meetups
* Concerts

Save a result from each search to create a custom itinerary for your visit. Have fun!

### Preface for Instructions
-----
You will need to first create API keys for each of the following subjects:
* [Metro Gov API](https://dev.socrata.com/foundry/data.nashville.gov/xbru-cfzi)
* [Zomato API](https://developers.zomato.com/api)
* [Eventbrite API](https://www.eventbrite.com/developer/v3/)
* [Ticketmaster API](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)

### Download Instructions
-----
1. Clone our repository by clicking the green "Clone or download" button and copying the URL that appears.
2. Open your terminal and choose a directory to clone into.
3. Type the command `git clone [paste copied URL here]`
4. Navigate into the newly-created directory called `welcome-to-nashville`
5. Locate the `api-keys.js.example` file in your scripts folder.
6. Remove `.example` from the file name
7. Open the file and replace `"YOUR_API_KEY_HERE"` with the corresponding API keys that you created earlier.
8. In the terminal, navigate into the `src` folder
9. Type `http-server` to run your server (leave this terminal window running)
10. Open your browser and enter `localhost:8080` in the search bar to use application

### &copy; 2019
-----
Julian Garcia, Ryan Bishop, Sam Pita and Christian Pippin
