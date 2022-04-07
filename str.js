'use strict'

function calculate(evt){

    evt.preventDefault();

    let str = document.getElementById('str').value;
    var substr = '';

    for(let word of str){
        if(substr.indexOf(word) == -1){
            substr += word;
        }
    }
    document.getElementById('result').innerHTML = `<p>${substr}</p>`;

}