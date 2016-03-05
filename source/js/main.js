$(document).ready(function() {
  $('.highlight').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});

hljs.configure({useBR: true});
