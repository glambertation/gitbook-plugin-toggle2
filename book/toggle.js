require(["gitbook","jQuery"], function(gitbook, $) {

// expand the parent
  function expand(chapter) {
    chapter.show();

    if (chapter.parent().attr('class') != 'summary' &&
      chapter.parent().attr('class') != 'book-summary' &&
      chapter.length != 0
    ) {

      expand(chapter.parent());
      expand2(chapter.parent());
    }
  }

//expand the children
    function expand2(chapter) {

      if (chapter.parent().attr('class') != 'summary' &&
        chapter.parent().attr('class') != 'book-summary' &&
        chapter.length !=0
      ){
        
        chapter.show();
      }
    
      
      if (chapter.children().length !=0){

        expand2(chapter.children());

      }
          
  }

    function toggle2(chapter) {

      if($shy =='1.1'){

            $chapter.click(function(){
              if(event.target.href=="http://techblog.bytedance.net/"){
                $chapter.next().children('ul.articles').toggle();
              }
            });
        

      }

      if($shy =='1.2'){

            $chapter.click(function(){
              if(event.target.href=="http://techblog.bytedance.net/janfeb17"){
                $chapter.next().children('ul.articles').toggle();
              }
            });


      }  


      if($shy =='1.3'){

            $chapter.click(function(){
                if(event.target.href=="http://techblog.bytedance.net/internal_techblog/"){
                    $chapter.children('ul.articles').toggle();
                }
            });

      }
      if($shy =='1.4'){

            $chapter.click(function(){
                if(event.target.href=="http://techblog.bytedance.net/chapter1/"){
                    $chapter.children('ul.articles').toggle();
                }
            });

      }
      if($shy =='1.5'){

            $chapter.click(function(){
                if(event.target.href=="http://techblog.bytedance.net/chapter2/"){
                    $chapter.children('ul.articles').toggle();
                }
            });

      }




    }

  gitbook.events.bind("page.change", function() {

// hide all
    $('li.chapter').children('ul.articles').hide(); 


    $chapter = $('li.chapter.active');
    $shy = $('li.chapter.active').attr("data-level");

// show the active whole chapter
    if($shy !='1.1'){
      expand($chapter);
      expand2($chapter);
    }
    else {
      expand($chapter.next());
      expand2($chapter.next());
    }

// click to toggle

    toggle2($chapter);
    $hai = $('li.chapter.active').attr("data-level");

// add tongji


//    ba("create", "70f1bc699510e4");
//    ba('send','event','doc',event.target.responseURL);
//    ba("send", "pageview");

!function (e, t, n, a, c) {
    e.ToutiaoAnalyticsObject = n, e[n] = e[n] || function () {
        (e[n].q = e[n].q || []).push(arguments)
    }, e[n].t = 1 * new Date, e[n].s = c;
    var s = t.createElement("script");
    s.async = 1, s.src = a, t.getElementsByTagName("head")[0].appendChild(s)
}(window, document, "ba", "//s3.bytecdn.cn/ta/resource/v0/analytics.js?v=0.2.0");
ba("create", "70f1bc699510e4");
ba("send", "pageview");

  });

});

