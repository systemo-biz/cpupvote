(function($) {
    $(function() {
	
		$link_post = $('.upvote-post');
		$link_comment = $('.upvote-comment');
		
		$link_post.each(function() {
			
			$(this).click(function() {
				
				var actionButton = ($(this).hasClass('upvote')) ? 'upvote' : ($(this).hasClass('downvote')) ? 'downvote' : 'star';
				
				switch (actionButton) {
					case 'upvote':
						actionButton = ($(this).hasClass('upvoted')) ? 'upvoted' : 'upvote';
					break
					case 'downvote':
						actionButton = ($(this).hasClass('downvoted')) ? 'downvoted' : 'downvote';
					break
					case 'star':
						actionButton = ($(this).hasClass('starred')) ? 'starred' : 'star';
					break
				}
				
				var theLink = $(this);
				var relLikeLink = $(this).attr('rel');
				var postId = parseInt(relLikeLink.split('_')[1]);
				var theCount = $('#count_post_'+postId);
				$.post(ajaxurl, {
				action:	'upvote_post',
				post_id:	postId,
				actionButton:	actionButton
				
				}, function (response) {
					if (response.success) {

						switch (actionButton) {
							case 'upvote':
								theLink.addClass('upvoted');
								theLink.siblings('.downvoted').removeClass('downvoted');
							break
							case 'downvote':
								theLink.addClass('downvoted');
								theLink.siblings('.upvoted').removeClass('upvoted');
							break
							case 'star':
								theLink.addClass('starred');
							break
							case 'upvoted':
								theLink.removeClass('upvoted');
							break
							case 'downvoted':
								theLink.removeClass('downvoted');
							break
							case 'starred':
								theLink.removeClass('starred');
							break
						}
						
						theCount.html(response.counttext);
					}
				});
			
				return false;
			});
		
		});
		
		$link_comment.each(function() {
			
			$(this).click(function() {
				
				var actionButton = ($(this).hasClass('upvote')) ? 'upvote' : ($(this).hasClass('downvote')) ? 'downvote' : 'star';
				
				switch (actionButton) {
					case 'upvote':
						actionButton = ($(this).hasClass('upvoted')) ? 'upvoted' : 'upvote';
					break
					case 'downvote':
						actionButton = ($(this).hasClass('downvoted')) ? 'downvoted' : 'downvote';
					break
					case 'star':
						actionButton = ($(this).hasClass('starred')) ? 'starred' : 'star';
					break
				}
				
				var theLink = $(this);
				var relLikeLink = $(this).attr('rel');
				var commentId = parseInt(relLikeLink.split('_')[1]);
				var theCount = $('#count_comment_'+commentId);
				$.post(ajaxurl, {
				action:	'upvote_comment',
				comment_id:	commentId,
				actionButton:	actionButton
				
				}, function (response) {
				//alert('123');
					if (response.success) {
						//alert('321');
						switch (actionButton) {
							case 'upvote':
								theLink.addClass('upvoted');
								theLink.siblings('.downvoted').removeClass('downvoted');
							break
							case 'downvote':
								theLink.addClass('downvoted');
								theLink.siblings('.upvoted').removeClass('upvoted');
							break
							case 'star':
								theLink.addClass('starred');
							break
							case 'upvoted':
								theLink.removeClass('upvoted');
							break
							case 'downvoted':
								theLink.removeClass('downvoted');
							break
							case 'starred':
								theLink.removeClass('starred');
							break
						}
						
						theCount.html(response.counttext);
					}
				});
			
				return false;
			});
		
		});	
	});
}(jQuery));