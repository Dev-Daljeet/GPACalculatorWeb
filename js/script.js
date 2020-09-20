var checkInvalidCredit;
var checkInvalidGrade;

function addRow( ) {
    var cell1, cell2, cell3, cid, gid, id, newRow;
    var rows = document.getElementById( "theTable" ).rows.length;
    var table = document.getElementById( "theTable" );

    newRow = table.insertRow( rows - 1) ;
    cell1 = newRow.insertCell( 0 );
    cell2 = newRow.insertCell( 1 );
    cell3 = newRow.insertCell( 2 );

    id = ( rows - 3 );
    cid = "c" + id;
    gid = "g" + id;

    cell1.innerHTML = "Course #" + id + ":";
    cell2.innerHTML = "<input type=\"number\" id=" + cid + " value=\"1\" min=\"1\">";
    cell3.innerHTML = "<input type=\"text\" id=" + gid + " value=\"A\">";
}

function calculateGPA( ) {
    checkInvalidCredit = false;
    var cummulative = 0.00;
    var i = 0;
    var nums = [];
    var rows = document.getElementById( "theTable" ).rows.length - 4;
    var totalCredits = Number(document.getElementById( "credits" ).value);
    var totalPoints = Number(document.getElementById( "gpa" ).value) * totalCredits;

    getGrades( nums, rows );

    for ( i = 0; i < rows; ++i ) {
        if( Number( document.getElementById( "c" + ( i + 1 ) ).value ) > 0)
        {
        totalCredits += Number( document.getElementById( "c" + ( i + 1 ) ).value );
        totalPoints += document.getElementById( "c" + ( i + 1 ) ).value * nums[i];
        }
        else
        {
         alert ("Invalid input for course "+(i+1)+" credit.");
         document.getElementById( "results" ).innerHTML = "<td> Error: Invalid credit input </td>";
         checkInvalidCredit = true;
        }
    }

    if ( checkInvalidCredit === false && checkInvalidGrade === false ) {
        cummulative = ( totalPoints / totalCredits );
    document.getElementById( "results" ).innerHTML = "<td>Total Credits: " + totalCredits + "</td>"
                                                        + "<td>New GPA: " + cummulative.toPrecision( 3 ) + "</td>";
     }
}

function deleteRow( ) {
    var length = document.getElementById( "theTable" ).rows.length;
    var index = length - 2;

    if (length > 7) {
        document.getElementById( "theTable" ).deleteRow( index );
    }
}

function getGrades( nums, rows ) {
    checkInvalidGrade = false;
    var letters = [];

    for (i = 0; i < rows; ++i) {
        letters.push(document.getElementById( "g" + ( i + 1 ) ).value);

        if ( Number( letters[i] ) > -1 && Number( letters[i] < 5 ) ) {
            nums.push( Number( letters[i] ) );
        }

        else if ( letters[i].toUpperCase() == "A+" ) {
            nums.push( 4.33 );
        }

        else if ( letters[i].toUpperCase() == "A" ) {
            nums.push( 4.0 );
        }

        else if ( letters[i].toUpperCase() == "A-" ) {
            nums.push( 3.67 );
        }

        else if ( letters[i].toUpperCase() == "B+" ) {
            nums.push( 3.33 );
        }

        else if ( letters[i].toUpperCase() == "B" ) {
            nums.push( 3.0 );
        }

        else if ( letters[i].toUpperCase( ) == "B-" ) {
            nums.push( 2.67 );
        }

         else if ( letters[i].toUpperCase() == "C+" ) {
            nums.push( 2.33 );
        }

        else if ( letters[i].toUpperCase( ) == "C" ) {
            nums.push( 2.0 );
        }

         else if ( letters[i].toUpperCase() == "C-" ) {
            nums.push( 1.67 );
        }

         else if ( letters[i].toUpperCase() == "D+" ) {
            nums.push( 1.33 );
        }

        else if ( letters[i].toUpperCase( ) == "D" ) {
            nums.push( 1.0 );
        }

         else if ( letters[i].toUpperCase() == "D-" ) {
            nums.push( 0.67 );
        }

        else if ( letters[i].toUpperCase( ) == "F" ) {
            nums.push( 0.0 );
        }

        else {
            alert("Invalid input for course " + (i + 1) + " grade.");
            document.getElementById( "results" ).innerHTML = "<td> Error: Invalid grade input </td>";
            checkInvalidGrade = true;
        }
    }
}

function reset( ) {
    location.reload( );
}