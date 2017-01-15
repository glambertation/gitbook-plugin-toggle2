require(["gitbook", "jQuery"], function(gitbook, $) {

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
    $chapter.click(function(){
      $chapter.children('ul.articles').toggle();
    });

    if($shy =='1.1'){
      $chapter.click(function(){
        $chapter.next().children('ul.articles').toggle();
      });

    }


  });

});
