/**
 * Created by HoungKing Hsi on 10/13/14.
 * Updated by HoungKing Hsi on 10/16/14.
 * Updated by HoungKing on 12/11/2014.
 * Updated by HoungKing on 01/17/2015.// add the mobile device and the adapt layout
 */
$(function(){
	var point = $('#point'), iPost = $('#w-post'), iAbout = $('#w-about'), iTags = $('#w-tags'), iEn = $('#w-en'), word = $('#word');
	
	var _ = {
		showWord: function(obj, link){
			obj.mouseover(function() {
				var thiz = $(this), imgs = $('img', $('#imgs')),
					relatedNo = thiz.attr('data-no');
				_.switchPic(relatedNo, imgs);
			}).mouseleave(function () {
				word.empty();
			}).click(function() {
				window.location = link;
			});
		}, switchPic: function (n, os) {
			os.hide();
			for (var i = 0, size = os.length; i < size; i++) {
				var item = $(os[i]);
				if (n === item.attr('src')) {
					item.fadeIn(300);
				}
			}
			word.css('top', '');
			switch (n) {
				case '../medias/img/01.jpg': {
					word.append($('<img/>', {'src': '../medias/img/1_story.png'}));
				} break;
				case '../medias/img/02.jpg': {
					word.append($('<img/>', {'src': '../medias/img/2_actor.png'}));
				} break;
				case '../medias/img/03.jpg': {
					word.append($('<img/>', {'src': '../medias/img/3_cheat.png'}));
				} break;
				case '../medias/img/04.jpg': {
					word.append($('<img/>', {'src': '../medias/img/4_heart.png'}));
				} break;
				case '../medias/img/05.jpg': {
					word.append($('<img/>', {'src': '../medias/img/5_start.png'}))
						.css({'top':'500px'});
				} break;
				case '../medias/img/06.jpg': {
					word.append($('<img/>', {'src': '../medias/img/6_start.png'}))
						.css({'top':'500px'});
				} break;
				default: break;
			}

		}, changeAdaptLayout: function (o) {
			if (o.width() < 600) { 
				//show Chinese and English 
				$('#wrap, #imgBox').hide();
				$('#device, .device').show();
			}else{ 
				$('#wrap, #imgBox').show();
				$('#device, .device').hide();
			}
		}, jumpToDetailed: function (obj, link) {
			obj.click(function () {
				window.location = link;
			});
		}
	};
	
	// tell whether it's a mobile device
	var isMobile = {  
		Android: function() {  
			return navigator.userAgent.match(/Android/i) ? true : false;  
		},  
		BlackBerry: function() {  
			return navigator.userAgent.match(/BlackBerry/i) ? true : false;  
		},  
		iOS: function() {  
			return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;  
		},  
		Windows: function() {  
			return navigator.userAgent.match(/IEMobile/i) ? true : false;  
		},  
		any: function() {  
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  
		}  
	};  
	
	//show original
	point.mouseover(function() {
		iPost.fadeIn(200);
		iAbout.fadeIn(600);
		iTags.fadeIn(1000);
		iEn.fadeIn(1400);
		iHoungking.fadeIn(1800);
		_.switchPic($(this).attr('data-no'), $('img', $('#imgs')));
	}).mouseleave(function () {
		word.empty();
	});
	
	_.showWord(iPost, 'https://imisslovelove.github.io/cn');
	_.showWord(iAbout, 'https://imisslovelove.github.io/cn/about');
	_.showWord(iTags, 'https://imisslovelove.github.io/cn/tags');
	_.showWord(iEn, 'https://imisslovelove.github.io/en');
	_.showWord(iiHoungking, 'http://houngking.ml');

	$('img').hide();
	_.jumpToDetailed($('#chinBlog'), 'http://imisslovelove.github.io/cn');
	_.jumpToDetailed($('#engBlog'), 'http://imisslovelove.github.io/en');
	
	// add the adaptable layout
//	var bodyObj = $('body');
//	_.changeAdaptLayout(bodyObj);
//	
//	$(window).resize(function() {
//		_.changeAdaptLayout(bodyObj);
//	}); 
    
	// add the mobile device
	if (isMobile.any()) {
		$('#wrap, #imgBox').hide();
		$('#device, .device').show();
	}
	
});
