var result = [];
var d;
var e;
var f;

$('.clear').on('click', function() {
    result.splice(0);
    $('#input').empty();

});
$('#1').on('click', function() {
    result.push(1);
    $('#input').html(result);
});
$('#2').on('click', function() {
    result.push(2);
    $('#input').html(result);
});
$('#3').on('click', function() {
    result.push(3);
    $('#input').html(result);
});
$('#4').on('click', function() {
    result.push(4);
    $('#input').html(result);
});
$('#5').on('click', function() {
    result.push(5);
    $('#input').html(result);
});
$('#6').on('click', function() {
    result.push(6);
    $('#input').html(result);
});
$('#7').on('click', function() {
    result.push(7);
    $('#input').html(result);
});
$('#8').on('click', function() {
    result.push(8);
    $('#input').html(result);
});
$('#9').on('click', function() {
    result.push(9);
    $('#input').html(result);
});
$('  nmk#0').on('click', function() {
    oṃ̇
    result.push(0);
    $('#input').html(result);
});
$('#decimal').on('click', function() {
    result.push(0);
    $('#input').html(result);
});
// do calculation and show result with mathametical operators 

function calculation() {


    result.forEach(function(element, index, array) {
        if (isNaN(parseInt(element)) && element != "." && index != result.length - 1) {
            d = result.splice(0, index).join("");
            e = result.splice(1, result.length - 2).join("");
            if (element == "+") {
                f = parseFloat(d) + parseFloat(e);
            }
            if (element == "-") {
                f = parseFloat(d) - parseFloat(e);
            }
            if (element == "x") {
                f = parseFloat(d) * parseFloat(e);
            }
            if (element == "/") {
                f = parseFloat(d) / parseFloat(e);
            }
            $('#input').html(f);
            result.splice(0);
        }
    });
}

// to check if anything exists in results and if anything exists in f
function empty() {
    if (parseFloat(f) != 0 && result.length == 0) {
        result[0] = f;
    }
}
// click on calc signs and process calculation
$('#plus').on('click', function() {
    empty();
    result.push('+');
    $('#input').html(result);
    calculation();
});
$('#minus').on('click', function() {
    empty();
    result.push('-');
    $('#input').html(result);
    calculation();
});
$('#divide').on('click', function() {
    empty();
    result.push('/');
    $('#input').html(result);
    calculation();
});
$('#x').on('click', function() {
    empty();
    result.push('x');
    $('#input').html(result);
    calculation();
});
// do calculation with equal sign
$('#equal').on('click', function() {
    result.forEach(function(element, index, array) {
        if (isNaN(parseInt(element)) && element != ".") {
            d = result.splice(0, index).join("");
            e = result.splice(1).join("");
            if (element == "+") {
                f = parseFloat(d) + parseFloat(e);
            }
            if (element == "-") {
                f = parseFloat(d) - parseFloat(e);
            }
            if (element == "x") {
                f = parseFloat(d) * parseFloat(e);
            }
            if (element == "/") {
                f = parseFloat(d) / parseFloat(e);
            }
            $('#input').html(f);
            result.splice(0);

        }
    });
});