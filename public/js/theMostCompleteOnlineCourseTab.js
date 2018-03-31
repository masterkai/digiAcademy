$(function () {
    var lastTab = 0;

   $('#onlineCourses').each(function () {
       let $tabList = $(this).find('.tabs-nav'),
           $tabAnchors = $tabList.find('a'),
           $tabPanels = $(this).find('.tabs-panel');

       $tabAnchors.each(function (currentTab,obj) {
           $(obj).on('click', function (e) {
               e.preventDefault();
               // console.log($tabPanels.eq(currentTab));
               $tabPanels.eq(lastTab).css({visibility: 'hidden', height: 0});
               $tabPanels.eq(currentTab).css({visibility: 'visible', height: 'auto'});
               $tabPanels.eq(currentTab).slick('slickPlay');
               $tabPanels.eq(lastTab).slick('slickPause');
               lastTab = currentTab;
               // console.log('lastTab:'+lastTab+' ,currentTab:'+currentTab+' ,obj:'+$(obj).attr('href'));

               // Add active class to the tab which was clicked!!
               let $this = $(obj);
               // console.log($this.attr('href'));
               if($this.hasClass('active')) {
                   return;
               }

               $tabAnchors.removeClass('active');
               $this.addClass('active');

               // $tabPanels.css('display', 'none');
               // $($this.attr('href')).css('display', 'block');
           });
       });


       $tabAnchors.eq(0).trigger('click');
   });
});