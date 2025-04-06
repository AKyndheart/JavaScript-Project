// My Key: c5dce6dd
// Main API: "http://www.omdbapi.com/?apikey=c5dce6dd&"
// Poster API: "http://img.omdbapi.com/?apikey=c5dce6dd&"



async function movieSearch() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=c5dce6dd&s=fast")
    const moviesData = await movies.json()
    const borderEl = document.querySelector('.landing__border')
    // console.log(moviesData.Search)
    borderEl.innerHTML = moviesData.Search.slice(0 , 6).map((movie) => topMovies(movie)).join("")
}

movieSearch()

        function topMovies (movie) {
            return`<div class="border">
                        <figure class="landing__figure">
                        <img src="${movie.Poster}" alt="" class="landing__img">
                            <h2 class="landing__title">
                                ${movie.Title}
                            </h2>
                            <h2 class="landing__year">
                                ${movie.Year}
                            </h2>
                        </figure>
                    </div>`
        }

        async function onSearchChange(event) {
            const id = (event.target.value)
            const movies = await fetch(`https://www.omdbapi.com/?apikey=c5dce6dd&s=${id}`)
            const moviesData = await movies.json()
            const borderEl = document.querySelector('.landing__border')
            borderEl.innerHTML = moviesData.Search.slice(0 , 6).map((movie) => topMovies(movie)).join("")
        }

        onSearchChange(event)