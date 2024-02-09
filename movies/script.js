const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const moviesBox=document.querySelector(".contentBox");

    const getmovies=async(api)=>{
        const res=await fetch(api);
        const data=await res.json();

        showMovies(data.results);
    }
    getmovies(APIURL);
        const showMovies=(data)=>{
            moviesBox.innerHTML="";
            console.log(data);
            data.forEach((movie) => {
                let newmovie=document.createElement("div");
                newmovie.classList.add("movies");
                newmovie.innerHTML=`
                <img src="${IMGPATH+movie.poster_path}" alt="">
                <div class="overlay">
                    <div class="title">
                        <div>${movie.title}</div>
                        <div class="rating">${movie.vote_average.toFixed(1)}</div>
                    </div>
                    <div class="overview">
                        <div class="t">Overview</div>
                        <div class="desc">
                        ${movie.overview}</div>
                    </div>
                </div>
                ` 
                moviesBox.appendChild(newmovie);
            });
        }

        document.querySelector(".search input").addEventListener(
            "keyup",
            function(event){
                console.log(event.key);
                if(event.key=="Enter")
                {
                    getmovies(SEARCHAPI+event.target.value);
                }
                else
                {
                    getmovies(APIURL);
                }
            }
        );