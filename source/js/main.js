$(document).ready(function() {
  $('.highlight').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});

hljs.configure({useBR: true});

var duoshuoQuery = {short_name:"dogod"};

(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		 || document.getElementsByTagName('body')[0]).appendChild(ds);
})();