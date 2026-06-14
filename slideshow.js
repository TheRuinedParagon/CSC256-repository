        let arrImages = [
            "./images/dance.gif",
            "./images/wave.gif",
            "./images/dawdle.gif",
            "./images/ARMOREDCORE.gif"
        ];

        // variable to keep track of the current image index.
        let currImage = 0;

        //show slide
        function showSlide(index){
            //get a shortcut/nickname to the img element in the HTML
            let image = document.getElementById("imgSlide");
            // change the image source to the relevant address for the array
            image.src = arrImages[index];
        }

        // previous button function click event
        function prevSlide(){
            //when the user clicks the previous button, we want to change currImage to currImage -1
            currImage--;

            // if the user is at the first image in the array and clicks the previous button, it will show the last image in the array to give a sort of loop effect.
            if (currImage < 0){
                // change currImage from -1 to the last index of the array
                currImage = arrImages.length - 1;
            }

            //load the new image
            showSlide(currImage);
        }
            // next button function click event
            function nextSlide(){
            //when the user clicks the Next button, we want to change currImage to currImage +1
            currImage++;

            // if currImage has exceeded the number of images in the array, then reset back to the first.
            if (currImage >= arrImages.length){
                currImage = 0;
            }

            //load the new image
            showSlide(currImage);
        }

        //load an image when the page first loads
        showSlide(currImage);
