
let results = document.getElementById("results");


let form = document.getElementById("searchForm");



form.addEventListener("submit", function (e) {

    
    e.preventDefault();

    
    let keyword = document.getElementById("searchInput").value;

    
    if (keyword === "") {
        alert("Please enter a search keyword");
        return; 
    }

    
    results.innerHTML = "Loading...";


    fetch(`https://api.giphy.com/v1/gifs/search?api_key=QIZfXq6LnAVOVYxkmHWK7dG7WEbu31B3=${keyword}&limit=12`)

        
        