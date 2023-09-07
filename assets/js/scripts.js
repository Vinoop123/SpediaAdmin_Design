(function(window, undefined) {
  'use strict';

  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */

  jQuery(document).ready(function ($) {
    //---------------------------------------------------
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == '') {
      path = 'index.html';
    }

    var target = $('.navigation-main li a[href="' + path + '"]');
    // Add active class to target link
    target.addClass('active');
    //-----------------------------------------------------
  });

  $(".search-resluts .bs-callout-info").slice(10).hide();

 var mincount = 10;
 var maxcount = 20;


 $(window).scroll(function () {
     if ($(window).scrollTop() + $(window).height() >= $(document).height() - 50) {
         $(".search-resluts .bs-callout-info").slice(mincount, maxcount).slideDown(1400);

         mincount = mincount + 10;
         maxcount = maxcount + 10

     }
 });

 $.fn.extend({
  treed: function (o) {
    
    var openedClass = 'fa-minus';
    var closedClass = 'fa-plus';
    
    if (typeof o != 'undefined'){
      if (typeof o.openedClass != 'undefined'){
      openedClass = o.openedClass;
      }
      if (typeof o.closedClass != 'undefined'){
      closedClass = o.closedClass;
      }
    };
    
      //initialize each of the top levels
      var tree = $(this);
      tree.addClass("tree");
      tree.find('li').has("ul").each(function () {
          var branch = $(this); //li with children ul
          branch.prepend("<i class='indicator fas " + openedClass + "'></i>");
          branch.addClass('branch');
          branch.on('click', function (e) {
              if (this == e.target) {
                  var icon = $(this).children('i:first');
                  icon.toggleClass(openedClass + " " + closedClass);
                  $(this).children().children().toggle();
              }
          })
          // branch.children().children().toggle();
          
      });
      //fire event from the dynamically added icon
    tree.find('.branch .indicator').each(function(){
      $(this).on('click', function () {
          $(this).closest('li').click();
      });
    });
      //fire event to open branch if the li contains an anchor instead of text
      tree.find('.branch>a').each(function () {
          $(this).on('click', function (e) {
              $(this).closest('li').click();
              e.preventDefault();
          });
      });
      //fire event to open branch if the li contains a button instead of text
      tree.find('.branch>button').each(function () {
          $(this).on('click', function (e) {
              $(this).closest('li').click();
              e.preventDefault();
          });
      });
  }
});

//Initialization of treeviews

$('#tree1').treed({});

})(window);