$('#h1').html('Hello jQuery');
$('#btn').click(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var fullName = firstName+' '+lastName;
    $('#fullName').val(fullName);
});
//alert($('#h1').html());
// alert(document.get;ElementById('h1').innerHTML);


// var redButtonElement = document.getElementById('redBtn');
// redButtonElement.onmouseover = function () {
//     // document.getElementById('divOne').style.backgroundColor = 'red';
//     var divOneElement = document.getElementById('divOne');
//     divOneElement.className = 'class-one';
// }
// var greenButtonElement = document.getElementById('greenBtn');
// greenButtonElement.onmouseover = function () {
//     // document.getElementById('divOne').style.backgroundColor = 'green';
//     var divOneElement = document.getElementById('divOne');
//     divOneElement.className = 'class-two';
// }
// var blueButtonElement = document.getElementById('blueBtn');
// blueButtonElement.onclick = function () {
//     document.getElementById('divOne').style.backgroundColor = 'blue';
// }
// var defaultButtonElement = document.getElementById('defaultBtn');
// defaultButtonElement.onclick = function () {
//     document.getElementById('divOne').style.backgroundColor = 'white';
// }
//
// var buttonElement = document.getElementById('btn');
// buttonElement.onclick = function () {
//     var startingNumber = document.getElementById('startingNumber').value;
//     var endingNumber = document.getElementById('endingNumber').value;
//     var result = '';
//     for (var i = startingNumber; i <= endingNumber; i++) {
//         result += i+' ';
//     }
//     document.getElementById('result').value = result;
// }