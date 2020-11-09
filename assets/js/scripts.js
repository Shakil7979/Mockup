// =======FixedHeader 
	 $(window).scroll(function(){
		var value=$(this).scrollTop()

		if(value>0){
			$('.header-area').addClass('FixedHeader')
		}
		else{
			$('.header-area').removeClass('FixedHeader')
		}
	})

	// =======Fixedfooter
	 $(window).scroll(function(){
		var value=$(this).scrollTop()

		if(value>0){
			$('.footer-area').addClass('FixedFooter')
		} 
	}) 

	 $(document).ready(function(){
		var mixer = mixitup('.main-mixi');

		var mixer = mixitup(main-mixi, {
		    animation: {
	        nudge: false
	    }
	});



	$('.work-img').magnificPopup({
		  delegate: 'a', 
		  type: 'image', 
		  gallery: {
 				enabled: true, 
 			}
		});

	
})


	$(document).ready(function(){
		$('.main-header a').click(function(){
			$('.left-site').css({
				'left':'0%',
			});

			return false;
		})

		$('.cros-btn').click(function(){
			$('.left-site').css({
				'left':'-100%',
			});

			return false;
		})
	})