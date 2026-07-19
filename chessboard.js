      // function to build a chessboard
        function buildChessboard(){
            // nickname shortcut to the html div
            let chessBoard = document.getElementById("divChessboard");

            // loop to create 8 rows 
            for (let i=0; i <8; i++){
                // inner loop to create 8 columns
                for (let j=0; j < 8; j++){
                    // create a div for each chessboard squares
                    let chessSquare = document.createElement('div');

                    // add the css class to the div
                    chessSquare.className = 'chessSquare';

                    // use modulus to alternate the colors of our squares
                    // divide the number by two and if the number is 0 then the number is even
                    if ((i+j) % 2 == 0){
                        // change every other square to have a black background
                        chessSquare.style.backgroundColor = "black";
                    }
                    // add the square to the board
                    chessBoard.appendChild(chessSquare);
                }

            }
        }

        