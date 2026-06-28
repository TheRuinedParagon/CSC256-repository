        // javascript - 10
        // cascading - 9
        /*
            <table>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        */

        function buildPuzzle(cols, rows){
            // create a shortcut to the table in the HTML
            let puzzle = document.getElementById("puzzle");

            // nested loop to build out the table rows and columns
            for (let i = 0; i < rows; i++){
                // build a row each time we loop through the outer loop
                let tr = document.createElement("tr");

                // build an inner loop to create each column / cell / td
                for (let j = 0; j < cols; j++){
                    // build a column in the table every time this loop runs
                    let td = document.createElement("td");
                    // then add the column to the row in the outer loop
                    tr.appendChild(td);
                }

                // after the inner loop, but before the end of the outer loop, add the row to the table
                puzzle.appendChild(tr);
            }
        }

        // call the function to build the puzzle table structure
        // 10 columns because JavaScript has 10 letters
        // 9 rows because cascading has 9 letters
        buildPuzzle(10, 9);
        // funciton will build a textbox for each letter in teh word, starting at the specified area
        function buildLetters(startingRow, startingCol, direction, word, table, showAnswer, clueNumber){
            // we need to loop through the word to build out each letter text box
            for (let i=0; i<word.length; i++){
                // set up variables to keep track of what row/column we are working with
                let rowIndex = 0;
                let colIndex = 0;

                // configure the row or column 
                if (direction == "across"){
                    // if the word is across, we keep the same starting row number for the whole build
                    rowIndex = startingRow;
                    // colIndex needs to increase by 1 every time the loop runs
                    colIndex = startingCol + i;
                }
                // if the word goes down, do the opposite essentially
                else{
                    // rowIndex needs to increase by 1 every time the loop runs
                    rowIndex = startingRow + i;
                    // if the word goes down, we keep the same column number for the whole build
                    colIndex = startingCol;
                }

                // get the current table row
                let tr = table.rows[rowIndex];
                // get the current table data
                let td = tr.cells[colIndex];

                // configure the clue number if this is the first letter
                if (i == 0){
                    //TODO: set up cluenumber
                    
                }

                // we need to check and see if there is already a textbox in teh current cell
                if (!td.querySelector("input")){
                    // we will create the textbox input that will be added to the cell
                    let input = document.createElement("input");

                    // set the type to textbox
                    input.setAttribute("type", "text");
                    // only allow 1 letter per textbox
                    input.setAttribute("maxLength", "1");

                    // if the showAnswer is true, add the current letter to the textbox
                    if (showAnswer){
                        // add the capitalized letter to the input
                        input.value = word[i].toUpperCase();
                    }

                    // add the new input textbox to teh cell
                    td.appendChild(input);

                }
                }
        }

        // set up an array to hold our list of words
        let arrWords = ["Javascript", "life", "Cascading", "HTML", "Style"];
        // set up a shortcut/nickname to the table
        let table = document.getElementById("puzzle");

        // function buildLetters(startingRow, startingCol, direction, word, table, showAnswer, clueNumber{

        buildLetters(1,0, "across", arrWords[0], table, true, 1); // javascript
        buildLetters(6,0, "across", arrWords[1], table, true, 1); // life
        buildLetters(0,1, "down", arrWords[2], table, true, 1); // cascading
        buildLetters(0,9, "down", arrWords[3], table, true, 1); // HTML
        buildLetters(1,4, "down", arrWords[4], table, true, 1); // style
        
