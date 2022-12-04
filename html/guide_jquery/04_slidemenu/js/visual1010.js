// dlwkdwlsdlgoTtmqslek!!
var J$ = jQuery.noConflict();

J$(document).ready(function(){

	J$(window).load(function() {
		J$('.item-box').masonry({
			itemSelector: '.item',
			columnWidth: 40
		});
		J$('.con-wrap-inner, html, body').animate({scrollTop:'0'});
	});
	
	/*J$('.item-box').masonry({
		itemSelector: '.item'
	});*/

	var conw = J$('.container').width(),
		brow = J$('html,body').width(),
		broh = J$(window).height(),
		conw20 = conw - 80,
		conw24 = conw + 24,
		conwsub = conw20 - 670;
	J$('.item-box').css('width',conw20);
	J$('.layer, .layer-inner, .con-wrap-inner').css('height',broh);
	if(brow < 670){
		J$('.lining h1').css({
			margin:'0 0 0 110px'
		});
		J$('.lining .ver').css({
			float:'none',
			margin:'20px 0 0 230px'
		});
		J$('.lining .gnb').css({
			float:'left',
			margin:'5px 0 0 110px'
		});
		J$('.lining .gnb a').css('margin','0 10px');
	}
	if(brow > 670){
		J$('.lining h1').css({
			marginLeft:'100px'
		});
		J$('.lining .ver').css({
			float:'left',
			margin:'20px 0 0 20px'
		});
		J$('.lining .gnb').css({
			float:'right',
			margin:'0 0 0 35px'
		});
		J$('.lining .gnb a').css('margin','0 20px');
	}

	J$('.item a[id]').click(function(){
		onleave();
		J$('.item-box, .detail').stop();
		J$('html,body').stop();

		var papa = J$(this).parent(),
			aid = J$(this).attr('id');

		J$('.detail div.' + aid).siblings('.plate').hide();
		J$('.detail div.' + aid).show();

		J$('.item-box').animate({width:conwsub, left:'790px'},300,function(){
			J$('.item-box').masonry();
		});

		J$('.detail').show(function(){
			J$(this).animate({width:'670px',scrollTop:'0px'},500,function(){
				J$('.item-box .current').each(function(){
					var posi = J$(this).offset().top - 110;
					J$('html,body').animate({scrollTop:posi},800);
					J$('.item-box .item:not(.current)').animate({opacity:'0.4'});
				});
					J$('.detail .close').show();
			});
		});
		
		J$(papa).siblings().removeClass('current');
		J$(papa).addClass('current');
	});

	J$('.cms-left').click(function(){
		J$('.layer').stop(true);
		J$('.cms-tab').fadeOut(function(){
			J$('.layer').show(function(){
				J$(this).animate({left:'0'},500);
			});
		});
	});

	J$('.layer-inner .close').click(function(){
		J$('.item-box').stop();
		J$('html,body').stop();
		J$('.layer').animate({left: - brow},500,function(){
			J$(this).hide();
			J$('.cms-tab').fadeIn();
			J$('.con-wrap-inner').animate({scrollTop:'0'});
			J$('.target li').removeClass('current');
			J$('.target li:first').addClass('current');
		});
	});

	J$('.detail .close').click(function(){
		J$('.item').unbind('mouseeter');
		J$('.detail').stop();
		J$('.item-box').stop();
		J$('html,body').stop();
		J$(this).hide();
		J$('.detail').animate({width:'0px'},300,function(){
			J$(this).hide();
		});
		J$('.item-box').animate({width:conw20, left:'100px'},300,function(){
			J$('html,body').delay(500).animate({scrollTop:'0'},800);
			J$('.item-box').masonry();
		});
		J$('.item').css('opacity','1');
		J$('.item-box .current').removeClass('current');
	});

	function onleave(){
		J$('.item').mouseenter(function(){
			if(J$('.detail').is(':visible')){
				J$(this).css('opacity','1');
			}
		});
		J$('.item').mouseleave(function(){
			if(J$('.detail').css('width')=='670px'){
				J$('.item:not(.current)').each(function(){
					J$(this).css('opacity','0.4');
				});
			}
		});	
	}


	J$(window).resize(function(){
		var conw2 = J$('.container').width(),
			brow2 = J$('html,body').width(),
			broh2 = J$(window).height(),
			conw202 = conw2 - 80,
			conw242 = conw2 + 24,
			conwsub2 = conw202 - 670;
		J$('.item-box').css('width',conw202);
		J$('.layer, .layer-inner, .con-wrap-inner').css('height',broh2);		

		J$('.item a[id]').click(function(){
			J$('.item-box').stop();
			J$('html,body').stop();
			J$('.item-box').animate({width:conwsub2, left:'790px'},300,function(){
				J$('.item-box').masonry();
			});

			/*var papa = J$(this).parent(),
				aid = J$(this).attr('id');*/

			/*J$('.detail').show(function(){
				J$(this).animate({width:'670px',scrollTop:'0px'},300,function(){
					J$('.item-box .current').each(function(){
						var posi2 = J$(this).offset().top - 110;
						J$('html,body').animate({scrollTop:posi2},800);
					});
				});
			});
			
			J$(papa).siblings().removeClass('current');
			J$(papa).addClass('current');

			J$('.item-box .item').css('opacity','0.3');
			J$('.item-box .current').css('opacity','1');*/
		});

		J$('.detail .close').click(function(){
			J$('.item-box').stop();
			J$('.detail').stop();
			J$('.detail').animate({width:'0px'},300,function(){
				J$(this).hide();
			});
			J$('.item-box').animate({width:conw202, left:'100px'},300,function(){
				J$('html,body').delay(500).animate({scrollTop:'0'},800);
				J$('.item-box').masonry();
			});
			J$('.item').css('opacity','1');
			J$('.item-box .current').removeClass('current');
		});

		J$('.layer-inner .close').click(function(){
			J$('.layer').animate({left: - brow2},500,function(){
				/*J$(this).hide();
				J$('.cms-tab').fadeIn();
				J$('.con-wrap-inner').animate({scrollTop:'0'});
				J$('.target li').removeClass('current');
				J$('.target li:first').addClass('current');*/
			});
		});

		if(J$('.detail').is(':visible')){
			J$('.item-box').css('width',conwsub2);
		}
		if(brow2 < 670){
			J$('.lining h1').css({
				margin:'0 0 0 110px'
			});
			J$('.lining .ver').css({
				float:'none',
				margin:'20px 0 0 230px'
			});
			J$('.lining .gnb').css({
				float:'none',
				margin:'5px 0 0 110px'
			});
			J$('.lining .gnb a').css('margin','0 10px');
		}
		if(brow2 > 670){
			J$('.lining h1').css({
				marginLeft:'100px'
			});
			J$('.lining .ver').css({
				float:'left',
				margin:'20px 0 0 20px'
			});
			J$('.lining .gnb').css({
				float:'right',
				margin:'0 0 0 35px'
			});
			J$('.lining .gnb a').css('margin','0 20px');
		}

	});// window resize

	J$('.letter img:first').css('margin-left','0');

	J$('.gnb a').click(function(){
		J$(this).addClass('current');
		J$(this).siblings().removeClass('current');
		var gc = J$(this).attr('id');
		J$('.item').hide();
		J$('.item-box .' + gc).show();
		J$('.item-box').masonry();
	});

	J$('.all').click(function(){
		J$('.item').show();
		J$('.item-box').masonry();
	});

	J$('.end').click(function(){
		J$('html,body').animate({scrollTop:'0'},500);
	});

	var od = 0;
	J$('.con-wrap-inner').scroll(function(){ 
		if(J$('.con-wrap-inner').scrollTop() >= 0 && od == 0){
			J$('.target li').siblings().removeClass('current');
			J$('.target li:nth-child(1)').addClass('current');
		}
		if(J$('.con-wrap-inner').scrollTop() >= 676 && od == 0){
			J$('.target li').siblings().removeClass('current');
			J$('.target li:nth-child(2)').addClass('current');
		}
		if(J$('.con-wrap-inner').scrollTop() >= 1336 && od == 0){
			J$('.target li').siblings().removeClass('current');
			J$('.target li:nth-child(3)').addClass('current');
		}
		if(J$('.con-wrap-inner').scrollTop() >= 2389 && od == 0){
			J$('.target li').siblings().removeClass('current');
			J$('.target li:nth-child(4)').addClass('current');
		}
		if(J$('.con-wrap-inner').scrollTop() >= 2963 && od == 0){
			J$('.target li').siblings().removeClass('current');
			J$('.target li:nth-child(5)').addClass('current');
		}
		if(J$('.con-wrap-inner').scrollTop() >= 3521 && od == 0){
			J$('.target li').siblings().removeClass('current');
			J$('.target li:nth-child(6)').addClass('current');
		}
		if(J$('.con-wrap-inner').scrollTop() >= 4083 && od == 0){
			J$('.target li').siblings().removeClass('current');
			J$('.target li:nth-child(7)').addClass('current');
		}
		if(J$('.con-wrap-inner').scrollTop() >= 4300 && od == 0){
			J$('.target li').siblings().removeClass('current');
			J$('.target li:nth-child(8)').addClass('current');
		}
	});

	J$('.page01 a').click(function(){
		J$('.con-wrap-inner').animate({scrollTop:'0'},500);
	});
	J$('.page02 a').click(function(){
		J$('.con-wrap-inner').animate({scrollTop:'676px'},500);
	});
	J$('.page03 a').click(function(){
		J$('.con-wrap-inner').animate({scrollTop:'1336px'},500);
	});
	J$('.page04 a').click(function(){
		J$('.con-wrap-inner').animate({scrollTop:'2389px'},500);
	});
	J$('.page05 a').click(function(){
		J$('.con-wrap-inner').animate({scrollTop:'2963px'},500);
	});
	J$('.page06 a').click(function(){
		J$('.con-wrap-inner').animate({scrollTop:'3521px'},500);
	});
	J$('.page07 a').click(function(){
		J$('.con-wrap-inner').animate({scrollTop:'4083px'},500);
	});
	J$('.page08 a').click(function(){
		/*var aaa = J$('.con-wrap-inner').scrollTop();
		alert(aaa);*/
		J$('.con-wrap-inner').animate({scrollTop:'4300px'},500);
	});

	//Firefox
	J$('.detail').bind('DOMMouseScroll', function(e){
		if(e.originalEvent.detail > 0) {
			J$('.detail').animate({scrollTop:'+=50px'},0);
		}else{
			J$('.detail').animate({scrollTop:'-=50px'},0);
		}
		return false;
	});

	//IE, Opera, Safari
	J$('.detail').bind('mousewheel', function(e){
		if(e.originalEvent.wheelDelta < 0) {
			J$('.detail').animate({scrollTop:'+=50px'},0);
		}else{
			J$('.detail').animate({scrollTop:'-=50px'},0);
		}
		return false;
	});

});


