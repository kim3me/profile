
(function (a) {

    a.fn.wheelScrollPage = function (b) {
		var c = 
		{
			poPlusV : 300,
			beHeader : false,
			beFooter : false
		};
		var b = a.extend(c, b);
		var pagerDiv = a(this).children("div");
		var pagerQty = a(this).children("div").length;
		var position = $(window).scrollTop();
		var aThis = a(this);
		var wr_h;
		var wr_w;

        a(this).children("div").each(function () {
			// Wheel 이벤트 적용
			$(this).on("mousewheel DOMMouseScroll", function (e) {
				e.preventDefault();
				var delta = 0;
				if (!event) event = window.event;
				if (event.wheelDelta) {
					delta = event.wheelDelta / 120;
					if (window.opera) delta = -delta;
				} else if (event.detail) delta = -event.detail / 3;
				var moveTop = null;
				position = $(window).scrollTop();

				// 마우스휠down
				if (delta < 0) {
					// 최상위 & 헤더 유
					if (position == 0 & !c.beHeader == false){
						moveTop = $(this).offset().top;
						fnMenuOn($(this).index());
					} else { 
						//컨텐츠가 길 경우
						if ($(this).height() > wr_h) {
							// 마지막 컨텐츠 & 화면 끝이 현재 컨텐츠의 끝과 같거나 클때 & 푸터 유
							if ( $(this).index() == pagerQty-1 & position + wr_h >= $(this).offset().top + $(this).height() & !c.beFooter == false ) { 
								moveTop = $(c.beFooter).offset().top; // 푸터로 이동
							} else if ( $(this).index() == pagerQty-1 & position + wr_h >= $(this).offset().top + $(this).height() ) { // 마지막 컨텐츠 & 화면 끝이 현재 컨텐츠의 끝과 같거나 클때
								moveTop = $(this).offset().top + $(this).height() - wr_h; // 현재 컨텐츠의 끝을 브라우저 끝에 맞춰줌
							} else if ( position + wr_h >= $(this).offset().top + $(this).height()){ // 화면 끝이 현재 컨텐츠의 끝과 같거나 클때
								moveTop = $(this).next().offset().top; // 다음 컨텐츠로 이동
								fnMenuOn($(this).next().index()); // 다음 페이징 활성화
							} else if ( position + wr_h < $(this).offset().top + $(this).height() && position + wr_h > $(this).offset().top + $(this).height() - c.poPlusV ){ // position이 현재 컨텐츠의 끝에 가까이 갔을때 
								moveTop = $(this).offset().top + $(this).height() - wr_h; // 현재 컨텐츠의 끝을 브라우저 끝에 맞춰줌
							} else {
								moveTop = position + c.poPlusV; // poPlusV값 만큼 아래로 이동
							}
						} else { //컨텐츠가 짧은 경우
							// 마지막 컨텐츠 & 푸터 유
							if ( $(this).index() == pagerQty-1 & !c.beFooter == false ){
								moveTop = $(c.beFooter).offset().top; // 푸터로 이동
							} else if ($(this).index() == pagerQty-1 ) { // 마지막 컨텐츠
								moveTop = $(this).offset().top; // 마지막 페이지 멈춤
							} else {
								moveTop = $(this).next().offset().top; // 다음 컨텐츠로 이동
								fnMenuOn($(this).next().index()); // 다음 페이징 활성화
							}
						}
					}

				// 마우스휠up
				} else {
					// 마지막 컨텐츠 & 화면 끝이 현재 컨텐츠의 끝보다 클때 & 푸터 유
					if ( $(this).index() == pagerQty-1 & position + wr_h > ($(this).offset().top + $(this).height()) & !c.beFooter == false) {
						moveTop = $(this).offset().top + $(this).height() - wr_h; // 현재 컨텐츠의 끝을 브라우저 끝에 맞춰줌
					} else { 
						//컨텐츠가 길 경우
						if ($(this).height() > wr_h) {
							// 첫번째 컨텐츠 & 화면 시작이 현재 컨텐츠의 시작과 같거나 작을때 & 헤더 유
							if ( $(this).index() == 0 & position <= $(this).offset().top & !c.beHeader == false ){
								moveTop = $(c.beHeader).offset().top; // 헤더로 이동
							} else if ( $(this).index() == 0 & position <= $(this).offset().top ){ // 첫번째 컨텐츠 & 화면 시작이 현재 컨텐츠의 시작과 같거나 작을때
								moveTop = $(this).offset().top; // 현재 컨텐츠의 시작을 브라우저 시작에 맞춤
							} else if ( position <= $(this).offset().top ){ // 화면 시작이 현재 컨텐츠의 시작과 같거나 작을때
								moveTop = $(this).prev().offset().top; // 이전 컨텐츠로 이동
								fnMenuOn($(this).prev().index()); // 이전 페이징 활성화
							} else if ( position > $(this).offset().top && position < $(this).offset().top + c.poPlusV ){ // position이 현재 컨텐츠의 시작에 가까이 갔을때 
								moveTop = $(this).offset().top; // 현재 컨텐츠의 시작을 브라우저 시작에 맞춤
							} else {
								moveTop = position - c.poPlusV; // poPlusV값 만큼 위로 이동
							}
						} else { //컨텐츠가 짧은 경우
							moveTop = $(this).prev().offset().top; // 이전 컨텐츠로 이동
							fnMenuOn($(this).prev().index()); // 이전 페이징 활성화
						}
					}
				}
				// 화면 이동 0.5초(500)
				$("html,body").stop().animate({ scrollTop: moveTop + 'px'}, {
					duration: 500, complete: function () {}
				});
				
			}); 
		});


		// 컨텐츠 리사이징
		resizingWindow();

		window.onorientationchange = function() {
			resizingWindow();
		}

		$(window).resize(function() {
			resizingWindow();
		});

		function resizingWindow() {
			var h;
			var w;
			if (self.innerWidth) {
				// IE 외 모든 브라우저
				w = self.innerWidth;
			} else if (document.documentElement && document.documentElement.clientWidth) {
				// IE 6 Strict
				w = document.documentElement.clientWidth;
			} else if (document.body) {
				// IE
				w = document.body.clientWidth;
			};
			if (self.innerHeight) {
				// IE 외 모든 브라우저
				h = self.innerHeight;
			} else if (document.documentElement && document.documentElement.clientHeight) {
				// IE 6 Strict
				h = document.documentElement.clientHeight;
			} else if (document.body) {
				// IE
				h = document.body.clientHeight;
			};

			wr_h = h;
			wr_w = w;

			pagerDiv.css({
				"min-height": wr_h
			});

		}

		
		// 페이징 생성
		a(this).after( '<div id="wheelScrollPaging"/>' );
		var pagerHtml = '';
		for (var i = 0; i < pagerQty; i++) {
			pagerHtml += '<a href="javascrit:;" class="link"><span class="link_d">' + i + '</span></a>';
			a(this).next().html(pagerHtml);
		};

		// 페이징 활성화
		function fnMenuOn(menu) {
			$('#wheelScrollPaging').find("a").eq(menu).siblings().removeClass('on');
			$('#wheelScrollPaging').find("a").eq(menu).addClass('on')
		};
		
		// 페이지 이동
		function fnMoveTo(page) {
			moveTop = pagerDiv.eq(page).offset().top;
			$("html,body").stop().animate({ scrollTop: moveTop + 'px'}, {
				duration: 500, complete: function () {}
			});
			fnMenuOn(page)
		};

		// 페이징 클릭
		$('#wheelScrollPaging').delegate('a', 'click', function() {
			fnMoveTo($(this).index())
		});

		// 시작
		fnMenuOn(0);
		fnMoveTo(0);

    }

})(jQuery);