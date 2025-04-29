// My Key: c5dce6dd
// Main API: "http://www.omdbapi.com/?apikey=c5dce6dd&"
// Poster API: "http://img.omdbapi.com/?apikey=c5dce6dd&"



async function movieSearch() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=c5dce6dd&s=fast")
    const moviesData = await movies.json()
    const borderEl = document.querySelector('.landing__border')
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
            console.log(moviesData)
            const borderEl = document.querySelector('.landing__border')
            const searchedMovies = moviesData.Search
            console.log(searchedMovies)
            if (moviesData.Search !== undefined){
                const slicer = moviesData.Search.slice(0, 6)
                borderEl.innerHTML = slicer.map((movie) => topMovies(movie)).join("")
                const overlay = document.querySelector('.landing__overlay')
                overlay.classList.add('no-display')
            }
            else{
                console.log("Please imput valid search")
            }
        }

        const searchImput = document.querySelector(".nav__search")
        searchImput.addEventListener("imput",onSearchChange)

        function refresh (event) {
            location.reload()
        }

        async function filterTitle(event) {
            const id = (event.target.value)
            console.log(id)
            const movies = await fetch(`https://www.omdbapi.com/?apikey=c5dce6dd&s=${id}`)
            const moviesData = await movies.json()
            console.log(moviesData)
            const borderEl = document.querySelector('.landing__border')
            const searchedMovies = moviesData.Search
            console.log(searchedMovies)
            // const filter = searchedMovies.sort()
            // console.log(filter)
            // const slicer = moviesData.Search.slice(0, 6)
            // borderEl.innerHTML = slicer.map((movie) => topMovies(movie)).join("")
            // filterT = slicer.Sort()
            // console.log(filterT)
        }

        async function filterYear(event) {

        }
