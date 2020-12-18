var mobil = document.querySelector('#mobil');
var opened = document.querySelector('.mobil-menu');
var close = document.querySelector('#close');
var overlay = document.querySelector('.overlay');

var titlen = document.querySelector('#spane');
var titlenm = document.querySelector('#spanem');
var openem = document.querySelector('.span__inner');


titlen.addEventListener('click', function() {
  // alert('salom');
  openem.classList.toggle('oven')

});
titlenm.addEventListener('click', function() {
  // alert('salom');
  openem.classList.remove('oven')

});




mobil.addEventListener('click', function() {
  opened.classList.toggle('open')
  overlay.classList.toggle('vizible')
});

overlay.addEventListener('click', function() {
  overlay.classList.remove('vizible')
    opened.classList.remove('open')

});

close.addEventListener('click', function() {
  opened.classList.remove('open')
  overlay.classList.remove('vizible')

});
