async function main(event){
    const storage = localStorage.getitem("id")
    console.log(storage)
    const mainMovie = await fetch (`https://www.omdbapi.com/?apikey=c5dce6dd&s=${movie}`)
    const mainMovieData = await mainMovie.json()

    console.log(mainMovieData)

    return main(event)
}