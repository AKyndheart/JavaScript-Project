// My Key: c5dce6dd
// Main API: "http://www.omdbapi.com/?apikey=c5dce6dd&"
// Poster API: "http://img.omdbapi.com/?apikey=c5dce6dd&"

async function movieSearch() {
    const movies = await fetch("http://www.omdbapi.com/?apikey=c5dce6dd&s=fast")
    const moviesData = await movies.json()

    console.log(moviesData.Search)

    console.log(
        moviesData.Search.map(
            (movie) => `<div class="border">
                        <figure class="landing__figure">
                            <img src="./assets/My_Logo.png" alt="" class="landing__img">
                        </figure>
                        <h2 class="landing__title">
                            Title
                        </h2>
                    </div>`
            )
        )
        }
    // const movie = `<div class="border">
    //                     <figure class="landing__figure">
    //                         <img src="./assets/My_Logo.png" alt="" class="landing__img">
    //                     </figure>
    //                     <h2 class="landing__title">
    //                         Title
    //                     </h2>
    //                 </div>`

movieSearch()
