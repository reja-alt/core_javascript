//Challange 1: Age in days 

function ageInDays() {
    var birthday = prompt('What year you born ?');
    var ageInDays = (2022-birthday) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);         //Add new html element
    document.getElementById('flex-box-result').appendChild(h1);    //Add new html element
    // console.log(ageInDays);
}

//Reset element

function reset() {
    document.getElementById('ageInDays').remove();
}