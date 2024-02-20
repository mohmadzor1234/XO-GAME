var turn = 'x';
var title = document.getElementById('title');
var items = [];
function winner() {
    for(var i = 1; i <= 9; i++) {
        // items.push('item'+i);
        items[i] = document.getElementById('item'+i);
    }
    // console.log(items)
}
function game(id) {
    var output = document.getElementById(id);

    // console.log(items)
    if(output.innerHTML == '') {
        if(turn == 'x') {

            output.innerHTML = 'X';
            turn = 'o';
            title.innerHTML = turn;
        }else if(turn == 'o') {
            turn = 'x';
            output.innerHTML = 'O';
            title.innerHTML = turn;
    
    
        }
    }
    winner()
    // if(document.getElementById('item1').innerHTML && document.getElementById('item2').innerHTML === document.getElementById('item2').innerHTML && document.getElementById('item3').innerHTML) {
    //     console.log("done")
    // }
    if(items[1].innerHTML == items[2].innerHTML && items[2].innerHTML == items[3].innerHTML && items[2].innerHTML != '') {
        console.log("done")
        items[1].style.backgroundColor = "green";
        items[2].style.backgroundColor = "green";
        items[3].style.backgroundColor = "green";
        title.innerHTML = items[1].innerHTML +' IS THE WINNER'
        
        myInterval = setInterval(function(){ title.innerHTML +=('.')},1000)
        setTimeout(function( ) { clearInterval( myInterval ); window.location.href = 'index.html'}, 3000);
    }else if(items[4].innerHTML == items[5].innerHTML && items[5].innerHTML == items[6].innerHTML && items[5].innerHTML != '') {
        console.log("done")
        items[4].style.backgroundColor = "green";
        items[5].style.backgroundColor = "green";
        items[6].style.backgroundColor = "green";
        title.innerHTML = items[4].innerHTML +' IS THE WINNER'
        myInterval = setInterval(function(){ title.innerHTML +=('.')},1000)
        setTimeout(function( ) { clearInterval( myInterval ); window.location.href = 'index.html'}, 3000);
    }else if(items[7].innerHTML == items[8].innerHTML && items[8].innerHTML == items[9].innerHTML && items[8].innerHTML != '') {
        console.log("done")
        items[7].style.backgroundColor = "green";
        items[8].style.backgroundColor = "green";
        items[9].style.backgroundColor = "green";
        title.innerHTML = items[7].innerHTML +' IS THE WINNER'
        myInterval = setInterval(function(){ title.innerHTML +=('.')},1000)
        setTimeout(function( ) { clearInterval( myInterval ); window.location.href = 'index.html'}, 3000);
    }


    if(items[1].innerHTML == items[4].innerHTML && items[4].innerHTML == items[7].innerHTML && items[1].innerHTML != '') {
        console.log("done")
        items[1].style.backgroundColor = "green";
        items[4].style.backgroundColor = "green";
        items[7].style.backgroundColor = "green";
        title.innerHTML = items[7].innerHTML +' IS THE WINNER'
        myInterval = setInterval(function(){ title.innerHTML +=('.')},1000)
        setTimeout(function( ) { clearInterval( myInterval ); window.location.href = 'index.html'}, 3000);

        
    }else if(items[2].innerHTML == items[5].innerHTML && items[5].innerHTML == items[8].innerHTML && items[5].innerHTML != '') {
        console.log("done")
        items[2].style.backgroundColor = "green";
        items[5].style.backgroundColor = "green";
        items[8].style.backgroundColor = "green";
        title.innerHTML = items[2].innerHTML +' IS THE WINNER'
        myInterval = setInterval(function(){ title.innerHTML +=('.')},1000)
        setTimeout(function( ) { clearInterval( myInterval ); window.location.href = 'index.html'}, 3000);

    }else if(items[3].innerHTML == items[6].innerHTML && items[6].innerHTML == items[9].innerHTML && items[9].innerHTML != '') {
        console.log("done")
        items[3].style.backgroundColor = "green";
        items[6].style.backgroundColor = "green";
        items[9].style.backgroundColor = "green";
        title.innerHTML = items[3].innerHTML +' IS THE WINNER'
        myInterval = setInterval(function(){ title.innerHTML +=('.')},1000)
        setTimeout(function( ) { clearInterval( myInterval ); window.location.href = 'index.html'}, 3000);

    }


    if(items[1].innerHTML == items[5].innerHTML && items[5].innerHTML == items[9].innerHTML && items[1].innerHTML != '') {
        console.log("done")
        items[1].style.backgroundColor = "green";
        items[5].style.backgroundColor = "green";
        items[9].style.backgroundColor = "green";
        title.innerHTML = items[1].innerHTML +' IS THE WINNER'
        myInterval = setInterval(function(){ title.innerHTML +=('.')},1000)
        setTimeout(function( ) { clearInterval( myInterval ); window.location.href = 'index.html'}, 3000);

        
    }else if(items[3].innerHTML == items[5].innerHTML && items[5].innerHTML == items[7].innerHTML && items[5].innerHTML != '') {
        console.log("done")
        items[3].style.backgroundColor = "green";
        items[5].style.backgroundColor = "green";
        items[7].style.backgroundColor = "green";
        title.innerHTML = items[7].innerHTML +' IS THE WINNER'
        myInterval = setInterval(function(){ title.innerHTML +=('.')},1000)
        setTimeout(function( ) { clearInterval( myInterval ); window.location.href = 'index.html'}, 3000);

    }
    
    
}