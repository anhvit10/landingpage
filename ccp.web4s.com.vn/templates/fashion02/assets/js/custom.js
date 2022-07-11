$(document).ready(function() {
    $(document).on('click', '.nh-view-album', function(e){
  		e.preventDefault();
  		
  		var wrapElement = $(this).closest('.nh-wrap-album');
  		var firstChildImage = wrapElement.find('[nh-light-gallery] > div[data-src]:first-child');
  		firstChildImage.trigger('click');
        return false;
	});
});