// My Key: c5dce6dd
// Main API: "http://www.omdbapi.com/?apikey=c5dce6dd&"
// Poster API: "http://img.omdbapi.com/?apikey=c5dce6dd&"

async function movieSearch() {
    const movies = await fetch("http://www.omdbapi.com/?apikey=c5dce6dd&s=fast")
    const moviesData = await movies.json()
    const borderEl = document.querySelector('.border')
    console.log(moviesData.Search)

    borderEl.innerHTML = moviesData.Search.map(
            (movie) => `<div class="border">
                            <figure class="landing__figure">
                                <img src="${movie.Poster}" alt="" class="landing__img">
                            </figure>
                            <h2 class="landing__title">
                                ${movie.Title}
                            </h2>
                            <h2 class="landing__year">
                                ${movie.Year}
                            </h2>
                        </div>`
            ).join("")
        }

movieSearch()
