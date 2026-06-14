        // create an empty array to hold the list of movies!
        let arrMovies = [];

        // this function will take input from user and add it to the div.
        function addMovie(){
            // shortcut name for text input
            let txtMovie = document.getElementById("txtMovie");
            // get the movie name, removing any leading or trailing spaces.
            let movieName = txtMovie.value.trim();

            // check to see the movie name is empty.
            if (movieName != ""){
                // since the user added a name, push it to the end of the array using .push
                arrMovies.push(movieName);
                //clear out the textbox for user ease
                txtMovie.value = "";
                // she made it to show the updated movie list now, so we will do it too because im lazy.
                showMovies();
            }
        }

        // function to show the movies in the array in the div
        function showMovies(){
            // shortcut for movies div
            let divMovies = document.getElementById("divMovies");
            // sort movie list here to make sure its always a sorted list
            arrMovies.sort();
            // convert the array of movies to a string, separated by HTML linebreak
            divMovies.innerHTML = arrMovies.join("<BR>");

            
        }
        // function to erase movies and update div to be empty
        function resetMovieList(){
            // reset array by setting it equal to [] brackets
            arrMovies = [];

            // reload the movie div
            showMovies();
        }