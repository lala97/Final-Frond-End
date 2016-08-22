$(document).ready(function() {
	$x=true;

	$(window).scroll(function(){
		$scrollTop= $(window).scrollTop();
		console.log($scrollTop);

  		  if ($scrollTop>132) {
  		  	$('#logo .logo1 .logo2')
			.css('transform', 'translateY(0px)');

  		  		setTimeout(function(){
			$('#logo .logo1 .logo3')
			.css('transform', 'translateY(0px)');
		},500)
  		  		setTimeout(function(){
	  		  	$('#logo .logo4')
			.css('transform', 'translateY(0px)');
  		  		}, 700)
			
		setTimeout(function(){
		  	$('#logo .logo5')
		.css('transform', 'translateY(0px)');
	  		}, 900)
		setTimeout(function(){
		  	$('#logo .logo6')
		.css('transform', 'translateY(0px)');
	  		},1200)
				
		}
		 if ($scrollTop>460 && $x==true) {
		 	$('#about .textRight,#about .img-left')
			.css('transform', 'translateX(0px)');
			
		// for (var i = 0; i <1; i++) {
		// 	$('#about .textRight').animate({marginLeft: '-=50px'}, 'fast')
		// 	$('#about .textRight').animate({marginLeft: '+=50px'}, 'fast')
		// 	$('#about .img-left').animate({marginLeft: '+=50px'}, 'fast')
		// 	$('#about .img-left').animate({marginLeftt: '-=100px'}, 'fast')
		// 	$x=false;
		// }
		 }

		if ($scrollTop>922) {
			$('#process .textLeft,#process .img-right')
			.css('transform', 'translateX(0px)');
			
		}

		if ($scrollTop>1618) {
			$('#process .textRight,#process .img-left')
			.css('transform', 'translateX(0px)');
			
		}
		if ($scrollTop>2190) {
			$('#features .img1')
			.css('transform', 'rotateX(0deg)');
		}
		if ($scrollTop>2686) {
			$('#features-list .row:first-child .iconDiv')
			.css('transform', 'translateX(0px)');
		}
		if ($scrollTop>3050) {
			
			$('#features-list .row:last-child .iconDiv')
			.css('transform', 'translateX(0px)');
		}
			
		if ($scrollTop>3184) {
			$('#news-letter .leftDiv')
			.css('transform',  'translateX(0px)');
		}
		if ($scrollTop>3184) {
			$('#news-letter .form')
			.css('transform',  'translateX(0px)');
		}
		if ($scrollTop>3420) {
			$('#product .container')
			.css('transform', 'translateY(0px)');
		}
		if ($scrollTop>4190) {
			$('#awards #textDiv,#awards .logo')
			.css('transform', 'translateY(0px)');
			
		}
		if ($scrollTop>4590) {
			$('#feedback #textDiv,#feedback #down')
			.css('transform', 'translateY(0px)');
			
		}
		if ($scrollTop>4765) {
			$('#bootpart #botpart')
			.css('transform', 'translateY(0px)');
		}
		if ($scrollTop>5383) {
			$('#team .up,.down')
			.css('transform', 'translateY(0px)');
		}
		
	});

	$('.btn').click(function() {
		$('.btn').removeClass('active');
		$(this).addClass('active');
	});
	 
	 $('#first-tab').click(function() {
		 $('.first-tab').css('display', 'block');
		 $('.second-tab,.third-tab').css('display', 'none');
		


		setTimeout(function (argument) {
			 $('#about .textRight,#about .img-left')
			.css('transform', 'translateX(0px)');
			 
		}, 100)
		$('.second-tab .textLeft').css('transform', 'translateX(-800px)');
		$('.second-tab .img-right').css('transform', 'translateX(800px)');			
			
			  	
			// 	for (var i = 0; i <1; i++) {
			// 	$('#about .textRight').animate({marginLeft: '-=50px'}, 'fast');
			// 	$('#about .textRight').animate({marginLeft: '+=50px'}, 'fast');
			// 	$('#about .img-left').animate({marginLeft: '-=50px'}, 'fast');
			// 	$('#about .img-left').animate({marginLeftt: '+=50px'}, 'fast');
			// 	$x=false;
			// }

	 });

	 $('#about #second-tab').click(function() {

	 	$('.third-tab,.first-tab').css('display', 'none');
	    $('.second-tab').css('display', 'block');
	 	setTimeout(function (argument) {
			 $('#about .textLeft,#about .img-right')
			.css('transform', 'translateX(0px)');
		},200)
		
		$('.first-tab .textRight').css('transform', 'translateX(800px)');
		$('.first-tab .img-left').css('transform', 'translateX(-800px)');
		// $('#about textRight').css('marginLeft', '0px');
	 //    $('#about img-left').css('marginLeft', '0px');
	 //    $('#about textLeft').css('marginLeft', '0px');
	 //    $('#about img-right').css('marginLeft', '0px');  	
			// 	for (var i = 0; i <2; i++) {
			// 	$('#about .textLeft').animate({marginLeft: '+=50px'}, 'fast')
			// 	$('#about .textLeft').animate({marginLeft: '-=50px'}, 'fast')
			// 	$('#about .img-right').animate({marginLeft: '-=50px'}, 'fast')
			// 	$('#about .img-right').animate({marginLeftt: '+=50px'}, 'fast')
				
			// }
	 });
	  $('#about #third-tab').click(function() {
	   $('.third-tab').css('display', 'block');
	   $('.first-tab,.second-tab').css('display', 'none');

	    $('.second-tab .textLeft,.first-tab .img-left').css('transform', 'translateX(-800px)');
		$('.second-tab .img-right,.first-tab .textRight').css('transform', 'translateX(800px)');
		
	 });

	 // $('#features .col').click(function() {
	 //    $('#features .col').removeClass('active');
		// $(this).addClass('active');
  //       a = $(this).data('href');
  //       $('.img img').attr("src",'img/'+a)
  //        if (a=='rich_features_1.png') {
  //        	console.log('hhhhh');
  //        	$('.img img').addClass('img1')
  //        	$('.img img').removeClass('img2');
  //        	setTimeout(function(argument){
  //        	$('.img1').css({transform:'rotateX(0deg)'})
  //        	},500);
  //        }
  //       else if (a=='rich_features_2.png') {
  //        	console.log('hhhhh');
  //        	$('.img img').removeClass('img1');
  //        	$('.img img').addClass('img2')
  //        	setTimeout(function(argument){
  //        	$('.img2').css({transform:'rotateY(0deg)'})
  //        	},500);
  //        }
  //         else if (a=='rich_features_3.png') {
  //        	console.log('hhhhh');
  //        	$('.img img').removeClass('img1');
  //        	$('.img img').removeClass('img2');
  //        	$('.img img').addClass('img3')
  //        	setTimeout(function(argument){
  //        	$('.img2').css({transform:'rotateY(0deg)'})
  //        	},500);
  //        }
        
	 // });

	 $('#features .col').click(function() {
	    $('#features .col').removeClass('active');
		$(this).addClass('active');
	});


	 $('#colOne').click(function() {
	 $('.img1').css('display', 'block');
	   $('.img2,.img3').css('display', 'none');
	  
	   setTimeout(function (argument) {
		 $('.img1').css('transform', 'rotateX(0deg)');
		},10);
		  $('.img2').css('transform', 'rotateY(88deg)');
		  $('.img3').css('transform', 'translateX(600px)');
	 });


	 $('#colTwo').click(function() {
	 	
	   $('.img .img1').css('display', 'none');
	    $('.img .img2').css('display', 'block');
	   $('.img .img3').css('display', 'none');
	    setTimeout(function (argument) {
		 $('.img2').css('transform', 'rotateY(0deg)');
		},10) 
		$('.img1').css('transform', 'rotateX(88deg)');
		$('.img3').css('transform', 'translateX(600px)');
	 });

	 $('#colThree').click(function() {
	   $('.img .img1').css('display', 'none');
	   $('.img .img2').css('display', 'none');
	    $('.img .img3').css('display', 'block');
	     setTimeout(function (argument) {
		 $('.img3').css('transform', 'translateX(0px)');
		},10) 
	     $('.img1').css('transform', 'rotateX(88deg)');
	     $('.img2').css('transform', 'rotateY(88deg)');
	 });

	 $('#head ul li a').click(function(event) {
	 	
	 });
});
