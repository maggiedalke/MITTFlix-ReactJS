# MITTFlix 

This is a movie search engine where you can enter in names or genres of movies and the appropriate results will appear. 

## Development Process

### Main Page

- movies are grouped by genre.
- genre headings only show up if there are movies that belong to that genre.
- movies can belong to 1 or more genres and show up multiple times on the page.
- genres are displayed in alphabetical order.
- all the genres that have movies are displayed.

### Search (Filter)

Located on all pages, search has the following functionality:

- The search will apply to the list of movies displayed on any of the pages the user is currently visiting.
- The search filters the results down based on the input provided
- The results are filtered based on the finding matching text either within the title or the overview
- Whenever the text content of the input changes, a new filter is performed. This is dependent upon keystrokes, not submit events.
- The amount of results found are displayed below the search field.
- The search query being used is displayed below the search field.
- Don't worry about the filter NOT working on backspace.

### My List

Located at /my-list, this page has the following functionality:

- Users can see all the movies that have been added to their list
- Movies are not sorted by genres or any other specification

- Users can choose to view and interact with their list in a table view that includes the title, rating, and genres of each movie. It should be possible to remove items from the list in this view as well.
- Add appropriate navigation and styles such that the list view fits well with the aesthetic of the rest of the app.

### Adding to My List

Located on all pages, Adding to My List has the following functionality:

- Users can hover over a movie and see a + sign. Clicking on this button will add a movie to their List.
- Once a movie is added to the user's list, it will show up under the My List section
- This update must be made in a way so that the information persists even if the browser is reloaded. This means you'll have to update the API.
- If a movie is added to the user's list, it must include a red check mark icon.
- Clicking on the check mark icon of a movie that is in the user's list will remove it from that list.

## MovieAPI

The MovieAPI has the following methods available:

- `MovieAPI.getAll()`: This will return to you all the movies in the database.
- `MovieAPI.genre()`: This will return to you all the genres in the database.
- `MovieAPI.addToList(movie)`: Accepts 1 parameter, a movie object. It will update a movies my_list attribute to true and save it to the database for you.
- `MovieAPI.removeFromList(movie)`: Accepts 1 parameter, a movie object. It will update a movies my_list attribute to false and save it to the database for you.

All API endpoints return promises, so you can freely chain a `.then()` on to them. They already provide you the results in a JSON format, so you'll simply have to accept a parameter into your `then()`.
