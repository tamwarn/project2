
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

       
        .then(function (response) {
            return response.json();
        })

        
        .then(function (data) {

            
            results.innerHTML = "";

            
            data.data.forEach(function (gif) {

                
                let img = document.createElement("img");

                
                img.src = gif.images.fixed_height.url;

                
                results.appendChild(img);
            });


        })

        
        .catch(function (error) {

            
            results.innerHTML = "Something went wrong.";

            
            console.log("Error:", error);
        });

        $(document).ready(()=>{
        })
        })
        

    
$(document).ready(()=>{

    $("#submit").click(()=>{
        let userInput = $("#search").val()
        alert('clicked!')
    })
    $.ajax({
       url:`https://api.giphy.com/v1/gifs/search?api_key=QIZfXq6LnAVOVYxkmHWK7dG7WEbu31B3=${keyword}&limit=12`
    })
    .done((res)=>{
        let movies = res.Search;
        $.each(movies,(i, e)=>{
            let poster = e.Poster
        console.log("poster", poster)
        $("body").append(`<img src="${poster}" alt="movie poster"/>`)
    })

    })
})

        