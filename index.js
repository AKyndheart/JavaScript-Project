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
            console.log(`${id}`)
            localStorage.setItem("id", id)
            const movies = await fetch(`https://www.omdbapi.com/?apikey=c5dce6dd&s=${id}`)
            const moviesData = await movies.json()
            console.log(moviesData)
            const borderEl = document.querySelector('.landing__border')
            const searchedMovies = moviesData.Search
            console.log(searchedMovies)
            if (moviesData.Search !== undefined){
                const slicer = moviesData.Search.slice(0, 6)
                console.log(slicer)
                localStorage.setItem("slicer" , JSON.stringify(slicer))
                borderEl.innerHTML = slicer.map((movie) => topMovies(movie)).join("")
                const overlay = document.querySelector('.landing__overlay')
                overlay.classList.add('no-display')
            }
            else{
                console.log("Please imput valid search")
            }

        }

        function refresh (event) {
            location.reload()
        }

        function filterTitle(event) {

            var slicer = localStorage.getItem("slicer" , slicer)
            console.log("sort by title")
            console.log(slicer)

        }

        function filterYear(event) {

        }


                    // async function onSearchChange(event) {
            //     console.log("filtered")
            //     localStorage.setItem(`movie`, event)
            //     const id = (localStorage)
            //     console.log(localStorage.getitem(movie))
            //     const movies = await fetch(`https://www.omdbapi.com/?apikey=c5dce6dd&s=${id}`)
            //     const moviesData = await movies.json()
            //     console.log(moviesData)
            //     const borderEl = document.querySelector('.landing__border')
            //     const searchedMovies = moviesData.Search
            //     console.log(searchedMovies)
            //     if (moviesData.Search !== undefined){
            //         const slicer = moviesData.Search.slice(0, 6)
            //         const sorter = slicer.sort()
            //         console.log(sorter)
            //         borderEl.innerHTML = slicer.map((movie) => topMovies(movie)).join("")
            //         console.log(sorted)
            //         const overlay = document.querySelector('.landing__overlay')
            //         overlay.classList.add('no-display')
            //     }
            //     else{
            //         console.log("Please imput valid search")
            //     }
            // }

            // return(event)