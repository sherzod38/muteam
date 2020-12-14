var mobil = document.querySelector('#mobil');
var opened = document.querySelector('.mobil-menu');
var close = document.querySelector('#close');
var overlay = document.querySelector('.overlay')


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
