/**
 * Created by HoungKing Hsi on 10/13/14.
 * Updated by HoungKing Hsi on 10/16/14.
 */

$(function(){
    var $point = $('#point'), $iPost = $('#w-post'), $iAbout = $('#w-about'), $iTags = $('#w-tags'), $iNone = $('#w-none');

    var _ = {
        showWord: function(obj, word, link){
            var $word = $('#word');
            obj.mouseover(function() {
                $word.fadeIn(800, function() {
                    $word.empty().append(word);
                });
            }).mouseleave(function() {
                $word.fadeOut(100).empty();
            }).click(function() {
                window.location = link;
            });
        }
    };
    
    $point.mouseover(function() {
        $('#w-post').fadeIn(200);
        $('#w-about').fadeIn(600);
        $('#w-tags').fadeIn(1000);
        $('#w-none').fadeIn(1400);
        $('#word').fadeIn(300, function() {
            $(this).empty().append('当你驻足这里，便是故事！');
        });

    }).mouseleave(function () {
        $('#word').fadeOut(300).empty();
    });

    _.showWord($iPost, '故事的主角总是善意地提醒周围人恶意的目光', 'https://imisslovelove.github.io/cn');
    _.showWord($iAbout, '偶尔，他也总是自欺欺人！', 'https://imisslovelove.github.io/cn/about');
    _.showWord($iTags, '他却用温暖的内心感染着身边的每个人', 'https://imisslovelove.github.io/cn/tags');
    _.showWord($iNone, '然后，他在你的心中驻留。', 'https://imisslovelove.github.io');
    _.showWord($iNone, '阳光便成为你一生的行程。', 'https://imisslovelove.github.io/houngking');

});
