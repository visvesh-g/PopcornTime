// Function to handle sign out and disable back button
function handleSignOut() {
    // Redirect to the sign out page
    window.location.replace("./index.html");

    // Replace the current history entry with the sign-out page
    window.history.replaceState(null, null, "./index.html");
}

// event listener to the sign out button
document.getElementById("signout").addEventListener("click", handleSignOut);
