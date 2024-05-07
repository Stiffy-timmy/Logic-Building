
// Printing Diamond pyramid
rows = prompt("Enter the number of of rows you want in a pyramid (It will also give a dropdown pyramid attached to it):");
space = rows;
back_col = rows-1;

for (i=0; i<rows; i++){

    for (_=0; _<space; _++){
        document.write("&nbsp;&nbsp;")
    }

    for (j=0; j<i+1; j++){
        document.write("&nbsp; *")
    }
    document.write("</br>")
    space -= 1

    if (space == 0){
        rows -= 1;
        space += 2

        for (k=0; k<rows; k++){

            for (_=0; _<space; _++){
                document.write("&nbsp;&nbsp;")
            }
            space += 1

            for (l=0; l<back_col; l++){
                document.write("&nbsp; *")
            }
            document.write("</br>")
            back_col -= 1
        }
    }
}