# PopcornTime

Kindly access the website link in the about section of the github page. (Website hosted using Netlify)

index.html-Main starter file:
Main HTML file containing the login and signup forms.
Input fields for email and password for both signup and login


style_signup_login.css:
Stylesheet for customizing the appearance of the login/signup forms.


style.css:
Stylesheet for customizing the appearance  of all the html files except index.html


button.js script file:
The main submit button changes to login/signup depending upon the radio button clicked(signup or login)



index_firebase.js:
This JS file handles Firebase configuration and user authentication for the MovieSearch application. It initializes Firebase with the provided configuration and sets up functionality for user signup and login.
Features:
Firebase Configuration: Initializes Firebase with the provided API keys and project credentials.
User Signup: Allows new users to create an account by providing their email address and password.
User Login: Enables existing users to log in by providing their email address and password.
Input Validation: Validates user input for email addresses and passwords to ensure data integrity.
Database Integration: Stores user data, including email and login timestamps, in the Firebase Realtime Database.
Redirect after Login: Redirects users to the MovieSearch page upon successful login.
Usage:
Ensure that the Firebase configuration object (firebaseConfig) is correctly set up with  Firebase project credentials.
Open the HTML file containing the signup and login forms in browser.
Choose between the "Login" and "Sign Up" options using the radio buttons.
Fill in the required fields (email address and password) in the selected form.
Click the "Login" or "Sign Up" button to proceed.
Upon successful login, the user will be redirected to the MovieSearch page.
For new users signing up, their account information will be stored in the Firebase Realtime Database.
Upon logging in, the email and passowrd given by user will be checked with the credentials stored in firebase database.
Dependencies: (firebase-app.js, firebase-auth.js, firebase-database.js)



movieSearch.html:
This html file contains search button to search for movies. When a movie of a specific title is searched, user will be able to see the corresponding list of movies.
Along with thge search button, the page also contains other buttons such as Toprated and genre buttons to filter out movies, re-direct to toprated.html and genre.html and display filtered out movies accordingly.
movieSearch.html page contains list of movies, that users can scroll through and see the  movie image, decription and other details.



script.js
This JS file fetches movie data from The Movie Database (TMDb) API. It provides functionality to display a list of popular movies, search for movies, and load more movie results dynamically as the user scrolls. Additionally, it includes features for displaying movie details and navigating to other pages within the application.
Features:
Fetch Movie Data: Retrieve movie data from TMDb API using fetch requests.
Display Popular Movies: Shows a list of popular movies sorted by popularity.
Search Movies: Allows users to search for movies by entering keywords.
Load More Results: Dynamically loads additional movie results as the user scrolls down the page.
Display Movie Details: Provides movie details such as title, release date, and overview(description).
Navigation: Supports navigation to other pages within the application, such as "Top Rated Movies" and "Genres".
Usage:
Ensure that the apiKey variable is correctly set to the user's TMDb API key.
Open the HTML file associated with this JavaScript file in a web browser.
The application will automatically load popular movies on initial page load.
Use the search bar to search for specific movies by entering keywords and pressing Enter.
Scroll down the page to load more movie results dynamically.
Click on a movie to view its details or navigate to other pages using the provided buttons.
Dependencies: (TDMI API, HTML and CSS files)


toprated.html:
Page that displays all toprated movies according to TDMI.


genre.html:
Page that displays movies based on different genres (Romance, Thriller, family, comedy, horror).
Movies are displayed based on a specific genre, which are segregated as sections.


toprated.js:
This JS file is responsible for fetching and displaying top-rated movies from The Movie Database (TMDb) API. It fetches data from the API and dynamically generates HTML elements to display information about each movie, including its title, release date, overview, and poster image. Same feautures, usage and dependencies like script.js


genre.js:
fetches and displays movies based on different genres from The Movie Database (TMDb) API. It fetches data for each genre and dynamically generates HTML elements to display information about each movie, including its title, release date, overview, and poster image.
Featues:
Fetch Movies by Genre: Retrieves data for movies belonging to specific genres(Romance, Thriller, family, comedy, horror) from the TMDb API.
Display Movie Information: Renders HTML elements to display details about each movie, such as title, release date, and overview.
Handle Missing Data: Handles cases where certain movie details, such as poster image or overview, are unavailable.
Organized by Genre: Displays movies categorized under different genres, each with its own section on the page.
Usage:
Ensure that the apiKey variable is correctly set to your TMDb API key.
Open the HTML file associated with this JavaScript file in a web browser.
Upon loading the page, the application will automatically fetch and display movies for each genre specified in the genreIDs object.
Scroll through each genre section to view the list of movies belonging to that genre.
Dependencies same as script.js.


scrollToMovies.js:
Features:
Button Navigation: Provides buttons for each genre (e.g., Romance, Thriller, Comedy, Family, Horror).
Smooth Scrolling: Utilizes smooth scrolling to navigate to the respective section displaying movies for each genre.
Event Listeners: Attaches click event listeners to each button to trigger the scrolling action.
Usage:
To ensure that each button has an id corresponding to its genre (e.g., romance-btn for Romance, thriller-btn for Thriller, etc.).
Click on any button to navigate to the respective section displaying movies for that genre.
The page will scroll smoothly to the selected genre section.


signout.js:
handleSignOut Function: This function is triggered when the user clicks on the sign-out button. It performs two main tasks:
    Redirect: It redirects the user to the sign-out page (index.html) using window.location.replace().
    History Replacement: It replaces the current history entry with the sign-out page URL using window.history.replaceState(). This prevents the user from navigating back to the previous page (e.g., movieSearch.html) using the browser's back button.
Event Listener: An event listener is added to the sign-out button. When the button is clicked, it calls the handleSignOut function, initiating the sign-out process.



