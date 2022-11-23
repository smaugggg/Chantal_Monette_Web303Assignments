// WEB303 Assignment 8
// Chantal Monette W0800871
// 2022 11 17

$(document).ready(function() {
    getCharacters();

    let compare = {
        name: function (a, b) {
            a = a.replace(/^the /i, '');
            b = b.replace(/^the /i, '');

            if (a < b) {
                return -1;
            } else {
                return a > b ? 1 : 0;
            }
        },
        date: function(a, b){
            a = new Date(a);
            b = new Date(b);
            return a - b;
        }
    };



    $("#am").click(function(){
        $("tbody").find("tr").show();
        $("tbody tr").each(function() {
            let value = $(this).children().first().text();
            if(!value[1].match(/[a-mA-M]/)) {
                $(this).hide();
            }
        });
    });
    $("#nz").click(function(){
        
        $("tbody").find("tr").show();
        $("tbody tr").each(function() {
            let value = $(this).children().first().text();
            if(!value[1].match(/[n-zN-Z]/)) {
                $(this).hide();
            }
        });
    });

    $("input").keyup(function () {
        let query = this.value.toLowerCase();    
        $('tbody tr').each(function () {
        let $name = $(this);
        let tname = $name.text();
                if (tname.toLowerCase().indexOf(query) == 0) {
                    $name.removeClass('active');
                } else if(tname.toLowerCase().indexOf(query) != -1) {
                    $name.addClass('active');   
                }
        });
    });
});  


function getCharacters() {
    $.getJSON("wentworth.json").done(function(data) {
        $.each(data.inmates, function(index, value) {
            $('.inmate').append(
                `<tr>
                <td class="name">${value.firstname + " " + value.lastname}</td>
                <td>${value.nickname}</td>
                <td>${value.occupation}</td>
                <td>${value.alive}</td>
                <td>${value.sentence}</td>
                <td>${value.firstappeared}</td>
                </tr>`
            );
        });  
    });
}


