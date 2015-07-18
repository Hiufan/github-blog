$(function(){
	var source = "https://api.github.com/repos/Hiufan/github-blog/contents/articles";
	var promise = $.get(source);

	var converter = new showdown.Converter();

	promise.then(function (result) {
		var articleList = result;
		var app = new Vue({
		    el: '#article-list',
		    data: {
		        list: articleList
		    }
		});

		$('#article-list').show();

		var viewArticle = function (id) {
			var articleUrl = articleList[id].git_url;
			var promise = $.ajax({
				url: articleUrl
			});
			promise.then(function (result) {
				console.log(decode64(result.content.replace(" ","+")));
			});
		};

		var routes = {
		'/article/:id': viewArticle
		};

		var router = Router(routes);

		router.init();
	// $.get('https://api.github.com/repos/Hiufan/github-blog/git/blobs/1bb527717dead2d7a8b0e2347a01e7ce182feefb',function(results){
	// 	console.log(decode64(results.content));
	// });

	});
});

