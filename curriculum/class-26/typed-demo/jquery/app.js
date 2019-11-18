let state = {}

let source = document.getElementById('words-template').innerHTML;
let template = Handlebars.compile(source);
$('#clicker').on('click', handleClick);
$('#words-input').on('input', handleWords);

function handleWords() {
  state.words = $(this).val();
  render();
}

function handleClick(e) {
  e.preventDefault();
  state.clicks += 1;
  console.log(state);
  render();
}

function render() {
  $('#app').html(template(state));
}

function init() {
  state.words = 'Type some words';
  state.clicks = 0;
  render();
}

$(function () {
  init();
});
