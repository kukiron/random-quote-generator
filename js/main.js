//JavaScript for Random Quote Generator
//Source -- https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Zipline-Build-a-Random-Quote-Machine
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
  $('#quote-text').html(data.quoteText);

  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Anonymous';
  }
  $('#author-text').html('- ' + data.quoteAuthor);
  $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' -' + data.quoteAuthor).attr('data-size', 'large').attr('target', '_blank');
}

$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

$('#quoteButton').click(function() {
  /* Act on the event */
  $.getJSON(url, getQuote, 'jsonp');
});
