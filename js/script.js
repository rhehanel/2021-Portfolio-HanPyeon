//-------------------------------adobe font---------------------------
	  (function(d) {
	    var config = {
	      kitId: 'ryw2uyr',
	      scriptTimeout: 3000,
	      async: true
	    },
	    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
	  })(document);
	  //----------------------------adobe font end---------------------------
	  
	  $(document).ready(function(){

	  	let content = $('section');
	  	let section1 = $('#section1');
	  	let section2 = $('#section2');
	  	let section3 = $('#section3');
	  	let section4 = $('#section4');
	  	let section5 = $('#section5');
	  	let section6 = $('#section6');
	  	let section7 = $('#section7');

	  	$('.subscribe').mouseover(function(){
			$('.pop div').stop().fadeIn(200);
		});
		$('.subscribe').mouseout(function(){
			$('.pop div').stop().fadeOut(200);
		});

	  	let removecolors = 'color1 color2 color3 color4 color5';

	  	let slidetextLeft = section1.find('.slidetext:eq(0), .slidetext:eq(2)');
		let slidetextRight = section1.find('.slidetext:eq(1), .slidetext:eq(3)');

		let colorful = 'h2, strong';
		let border = $('#section6 > div, .ca-text');
		let colors = ['#38d530','#00c4ff', '#888c8f', '#ff40b4', '#ee311e'];

	  	let bookindex = $('#section5 div p');
	  	let flip = $('.flip-items li');
	  	let menubox2 = $('.menubox2').find('a');
	  	let btn = $('.btn').find('a');
	  	let catext = $('.ca-text');

	  	//var menuOT = menubox2.offset().top;
		$('.subscribe a').click(function(e){
			e.preventDefault();
			var href = $(this).attr('href');
			var target = (href == '#' || href == '') ? $('html') : $(href);
			$('html,body').animate({scrollTop:target.offset().top});
		});

		flip.click(function(){
			var idx = $(this).index();
			
			//???????????? ???????????? hover????????? ??????
			$('.pop img').attr('src', `img/pop${idx+1}.png`)
			menubox2.mouseover(function(){
				$(this).css('color', colors[idx]);
			});

  			//?????????, ??? ?????? ????????? ????????????
  			$(colorful).removeClass(removecolors);
  			$(colorful).addClass('color' + (idx+1));
			
  			//?????? ????????????
			border.css('borderColor', colors[idx] );
			$('.circle').css('borderColor', colors[idx] );

			//?????? ????????????, ????????? ??????
			bookindex.hide().eq(idx).show();
			var alt = $(this).find('img').attr('alt');
			$('h3').text(alt);
  			
			//??????, ???????????? ?????? ?????? ????????????
			menubox2.mouseout(function(){
				$(this).css('color', '#fff');
			});
			btn.mouseover(function(){
				$(this).css('color', colors[idx]);
			});
			btn.mouseout(function(){
				$(this).css('color', '#fff');
			});
		});

		//'??????'??? ?????? ??????
		flip.eq(2).trigger('click');

		//??? ?????? ????????? ???????????? flip??? ??????
		$('strong').click(function(){
			var idx = $(this).index();
			flip.eq(idx).click();
		});

	  	$(window).scroll(function(){
		//????????? ???????????????

			//??? ?????? ?????? ???????????? In-Out ???????????????
			let sct = $(this).scrollTop();
			if (sct > 200) {
				slidetextLeft.stop().animate({
					left:`-100%`
				},{
					duration:1000,
					easing:'linear'
				});
				slidetextRight.stop().animate({
					left:`100%`
				},{
					duration:1000,
					easing:'linear'
				});
			} else {
				$('.slidetext').stop().animate({
					left:0
				},{
					duration:600,
					easing:'linear'
				});
			};

			//section2 ????????? ????????? In-Out ???????????????
			if (sct > 50 && sct < 1100 ) {
				section2.find('h1').stop().animate({
					top:300,
					opacity:1
				},{
					duration:600,
					easing:'linear'
				});
			} else {
				section2.find('h1').stop().animate({
					top:700,
					opacity:0
				},{
					duration:700,
					easing:'linear'
				});
			}

			//section3 ????????? In-Out ???????????????
			let section3OT = section3.offset().top;
			if (sct >= section3OT-800 ) {
				catext.stop().fadeIn(400);
			} else {
				catext.stop().fadeOut(400);
			}

			//bot?????? ??????
			/*

			if (sct >= menuOT) {
				menubox.addClass('fixed');
			} else {
				menubox.removeClass('fixed');
			}*/

		});

	  	//flipster
	  	$("#flat").flipster({
   			style: 'flat',
    		spacing: -0.05,
    		scrollwheel: false
		});

	  	//?????? ?????? ?????? ?????? ???????????? ????????????
		$('.menubox2 a').click(function(e){
			e.preventDefault();
			var href = $(this).attr('href');
			var target = (href == '#' || href == '') ? $('html') : $(href);
			$('html,body').animate({scrollTop:target.offset().top});
		});	
	  });