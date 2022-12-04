var lnbnum = -1;
var browerWidth = 0;
var arrTop1024 = new Array();
var arrLeft1024 = new Array();
var arrTop1280 = new Array();
var arrLeft1280 = new Array();
arrTop1024 = [0,0,172,344,516,344,516,688,1032,860,1204,1032,1376];
arrLeft1024 = [0,344,344,344,344,0,0,0,0,344,344,344,0];
arrTop1280 = [0,0,160,0,160,320,320,480,480,480,640,800,800];
arrLeft1280 = [0,320,320,640,640,0,320,0,320,640,640,0,320];

jQuery(document).ready(function(){
//	jQuery(".popupZone").find(".right").click(function(){
//		jQuery(".popupZone").stop(true, true).slideUp(300);	
//	});

	if(userAgent() == "FF") browerWidth = 0;
	if(userAgent() == "MZ") browerWidth = 17;
	if(userAgent() == "IE") browerWidth = 17;
	var w, h, x, y, direction
	jQuery(".mainList").find(".listSpec").hide();
	jQuery(".menu").hide();
	jQuery(".directBt").css('top', -500);

	//본문바로 가기
	jQuery(".directBt").show();
	jQuery(".directBt").focusin(function(){
		jQuery(".directBt").css('top', 15);
	}).focusout(function(){
		jQuery(".directBt").css('top', -500);
	})

	//gnb
	if(lnbnum != -1) jQuery("#gnb ul").find("li").eq(lnbnum).find("a").addClass("on");
	jQuery("#gnb ul").find("li").each(function(q){
		if (lnbnum != q)
		{
			jQuery(this).hover(function(){
			jQuery(this).find("a").addClass("on");
			}, function(){
				jQuery(this).find("a").removeClass("on");
			})
		}		
	})
	
	jQuery(".mainList").each(function(q){
		//섬네일 탭포커스 인
		jQuery(this).focusin(function(){
			jQuery(this).find(".listSpec").show();
			jQuery(this).find(".listSpec").css("top",350);
			jQuery(this).find(".listSpec").stop().animate({top:0}, 500, "easeOutExpo");
		})
		
		//섬네일 탭포커스 아웃
		jQuery(this).focusout(function(){
			jQuery(this).find(".listSpec").hide();
			jQuery(this).find(".listSpec").stop().animate({top:350}, 500, "easeOutExpo", function(){jQuery(this).find(".listSpec").hide();});
		})
	})
	
	//태블릿 이하 사이즈 메뉴버튼
	jQuery(".menu").click(function(){
		if(!jQuery(this).hasClass("close")) {
			jQuery(this).addClass("close");
			jQuery("#gnb").find("ul").show();
			jQuery("#gnb").find("ul").stop(true, true).slideUp(0);
			jQuery("#gnb").find("ul").stop(true, true).slideDown(300);
		} else {
			jQuery(this).removeClass("close");
			//jQuery("#gnb").find("ul").hide();
			jQuery("#gnb").find("ul").stop(true, true).slideUp(300);
		}
	})
	
	jQuery(".mainList").each(function(q){
				//섬네일 마우스오버 바인드
				jQuery(this).bind("mouseenter", function(event){
					w = jQuery(this).width()
					h = jQuery(this).height()
					x = ( event.pageX - jQuery(this).offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
					y = ( event.pageY - jQuery(this).offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
					direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;
					jQuery(this).find(".listSpec").show();
					if(direction == 0) {
						jQuery(this).find(".listSpec").css({"top":-h, "left":0});
					} else if(direction == 1) {
						jQuery(this).find(".listSpec").css({"top":0, "left":w});
					} else if(direction == 2) {
						jQuery(this).find(".listSpec").css({"top":h, "left":0});
					} else {
						jQuery(this).find(".listSpec").css({"top":0, "left":-w});
					}
					jQuery(this).find(".listSpec").stop().animate({top:0, left:0}, 500, "easeOutExpo");
				})


				//섬네일 마우스아웃 바인드
				jQuery(this).bind("mouseleave", function(event){
					w = jQuery(this).width()
					h = jQuery(this).height()
					x = ( event.pageX - jQuery(this).offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
					y = ( event.pageY - jQuery(this).offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
					direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;
					if(direction == 0) {
						jQuery(this).find(".listSpec").stop().animate({top:-h, left:0}, 500, "easeOutExpo", function(){jQuery(this).parent().find(".listSpec").hide();});
					} else if(direction == 1) {
						jQuery(this).find(".listSpec").stop().animate({top:0, left:w}, 500, "easeOutExpo", function(){jQuery(this).parent().find(".listSpec").hide();});
					} else if(direction == 2) {
						jQuery(this).find(".listSpec").stop().animate({top:h, left:0}, 500, "easeOutExpo", function(){jQuery(this).parent().find(".listSpec").hide();});
					} else {
						jQuery(this).find(".listSpec").stop().animate({top:0, left:-w}, 500, "easeOutExpo", function(){jQuery(this).parent().find(".listSpec").hide();});
					}
				})


				jQuery(".mainList").eq(q).stop().animate({top:arrTop1280[q], left:arrLeft1280[q]}, 1000);
			})
})

function userAgent()
{
	var browserType = "";
	if(navigator.userAgent.indexOf("MSIE") != -1)
	{
		browserType = "IE";
		return browserType;
	}
	if(navigator.userAgent.indexOf("Firefox") != -1)
	{
		browserType = "FF";
		return browserType;
	}
	if(navigator.userAgent.indexOf("Mozilla") != -1)
	{
		browserType = "MZ";
		return browserType;
	}
	if(navigator.userAgent.indexOf("Opera") != -1)
	{
		browserType = "OP";
		return browserType;
	}
	if(navigator.userAgent.indexOf("Safari") != -1)
	{
		browserType = "SF";
		return browserType;
	}
	if(navigator.userAgent.indexOf("Mac") != -1)
	{
		browserType = "MC";
		return browserType;
	}
		browserType = "NG";
		return browserType;
}