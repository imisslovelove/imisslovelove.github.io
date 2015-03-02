/**
 * Created by luolinj on 10/14/2014.
 */
var currentScroll = 0,
    allWords = [{
        'id': 1,
        'title': '',
        'content': '所遇见的美好，都在转身的一瞬间，殒灭！',
        'author': 'Houngking Hsi'
    }, {
        'id': 2,
        'title': '',
        'content': '与你相见，才知 风玲的声音如此动听。',
        'author': 'Houngking Hsi'
    }, {
        'id': 3,
        'title': '',
        'content': '人生到处知何似 应似飞鸿踏雪泥',
        'author': 'Houngking Hsi'
    }, {
        'id': 4,
        'title': '',
        'content': '程序 数学 游戏 物理 几何 都是我的最爱 ',
        'author': 'Houngking Hsi'
    }, {
        'id': 5,
        'title': '',
        'content': '我还在盼你一笑如旧故，我若取残年偿你三分温存，一生倒也足够 悠悠 寒山 轻舟。',
        'author': 'Houngking Hsi'
    }, {
        'id': 6,
        'title': '',
        'content': '心中的女子 天生丽质 夜晚披羽毛出行 还是纤细不禁风 ...',
        'author': 'Houngking Hsi'
    }, {
        'id': 7,
        'title': '',
        'content': '业精于勤而荒于嬉，行成于思而毁于随。',
        'author': 'Houngking Hsi'
    }];

$(function(){
    $(window).scroll(function(){
        myScroll();
    });

    showBeautifulWords();
});

function myScroll() {
    var nextScroll = $(this).scrollTop(), $header = $('#header');
//            console.log('scrollPosition' + $(document).scrollTop() + 'currentScroll: => ' + currentScroll + '  nextScroll: => ' + nextScroll);
    if (nextScroll > currentScroll){
        $header.removeClass('in bgColor').addClass('out');
        if (nextScroll >= $(document).height()-$(window).height()){
            $header.removeClass('out').addClass('in bgColor');
        }
        if ($(document).scrollTop() <= 0) {
            $header.removeClass('out').addClass('in');
            $header.removeClass('bgColor');
        }
    } else {
        $header.removeClass('out').addClass('in bgColor');
        if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 100) {
            $header.removeClass('bgColor');
        }
    }

    if ($(window).width() >= 1000) {
        $header.removeClass('bgColor');
    }

    //Updates current scroll position
    currentScroll = nextScroll;
}

function showBeautifulWords() {

    var self = $('#logo');
    self.addClass('logo-in')
        .mouseover(function () {
        var ranWord = Math.floor(Math.random() * allWords.length), wordDom = '<div class="logo-word"><div class="logo-title">' + allWords[ranWord]['title'] + '</div><div class="logo-content"><span></span>' + allWords[ranWord]['content'] + '</div><div class="logo-author">' + allWords[ranWord]['author'] + '</div></div>';

        self.removeClass('logo-in').addClass('logo-out');
        if ($('.logo-word').length <= 0)
            setTimeout(function(){self.append(wordDom);}, 500);
    }).mouseleave(function () {
        self.removeClass('logo-out').addClass('logo-in');
        var logoWord = $('.logo-word');
        if (logoWord) {
            logoWord.fadeOut(50, function () {
                self.empty();
            })
        }
    });
}
