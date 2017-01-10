require(["gitbook", "jQuery"], function(gitbook, $) {

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

    function expand2(chapter) {
    chapter.show();


      expand2(chapter.children());

  }

  gitbook.events.bind("page.change", function() {
    $('li.chapter').children('ul.articles').hide(); 

    $chapter = $('li.chapter.active');
//    $children = $chapter.children('ul.articles');
//    $parent = $chapter.parent();
//    $siblings = $chapter.siblings().children('ul.articles');
    $shy = $('li.chapter.active').attr("data-level");
    $songsong = '1';
    $song = String($songsong*1+1);
    $hai = $('li.chapter.active').attr("count",$song);
    $yun = $('li.chapter.active').attr("count");
    $yun2 = $('li.chapter.active').attr("countddd");

    if($('li.chapter.active').attr("counting")==undefined || $('li.chapter.active').attr("counting")== '0' ){
      $counting = '1';
      $hai2 = $('li.chapter.active').attr("counting",$counting);
      $yun4 = $('li.chapter.active').attr("counting");
    }
    else {
      $counting = String($counting*1+1);
      $hai3 = $('li.chapter.active').attr("counting",$counting);
    }
    $yun3 = $('li.chapter.active').attr("counting");


    if($shy =='1.1'){
      
      expand($chapter.next());
      expand2($chapter.next());
    }
    else if ($yun3%2 !=0) {
      expand($chapter);
      expand2($chapter);
    }
    else {
      $('li.chapter').children('ul.articles').hide(); 
    }


    

    //if($('li.chapter.active').attr('href') == './'){
      //$('li.chapter').children('ul.articles').hide(); 
      //expand($('li.chapter.active').next());
      //expand2($('li.chapter.active').next());      
    //}


//    if ($children.length > 0) {
//      $children.show();
//    }
  });

});
