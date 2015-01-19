/**
 * Created by Marco and Jorge
 */

$(document).ready(function() {
    $('div').mouseenter(function() {
        $(this).animate({
            height: '+=10px'
        });
    });
    $('div').mouseleave(function() {
        $(this).animate({
            height: '-=10px'
        });
    });
    $('div').click(function() {
        $(this).toggle(1000);
    });
});

/*
$( document ).ready(function() {
    $("#SampleSearchButton").click(function() {
        getImdbInfo($("#title").val());
    })
});

// The function below takes the entered title and searchs imdb for a match then it displays as followed

function getImdbInfo(Title) {
    $.ajax({
        url: "http://www.omdbapi.com/?s=" + Title,
        cache: false,
        dataType: "json",
        success: function(data) {
            // you get an object for iteration, the keys are Title, Type, Year, imdbID
            console.log(data);

            var str = '<table>';
            str += "<thead><th>Title</th><th>Year</th></thead>"

            // iterate over the data result set
            $.each(data.Search, function(index, element) {
                str += "<tr>";

                str += "<td>" + element.Title + "</td>";

                str += "<td>" + element.Year + "</td>";

                str += "<td>---></td><td>";


                str += "<form> "
                str += "<fieldset class='form-group'>"
                str += "<input type='submit' class='btn btn-primary pull-right' value='Add Movie'/>"
                str += "</fieldset></form>";
                str += "</div>";
                str += "</td>";


                str += "</tr>";


            });

            str += '</table>';





            // insert the html
            $("#SampleResults").html(str);
        },
        error: function (request, status, error) { alert(status + ", " + error); }
    });
}

    */