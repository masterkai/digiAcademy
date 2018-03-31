$(function () {
    var lastTopCourseTab = 0;

   $('#topCourses').each(function () {
       let $tabList = $(this).find('.topCourse__tabsNav'),
           $tabItems = $tabList.find('li'),
           $topCoursePanels = $(this).find('.topCourse__panel');

       $tabItems.each(function (topCourseCurrentTab,obj) {
           $(obj).on('click', function (e) {
               e.preventDefault();
               $topCoursePanels.eq(lastTopCourseTab).css({visibility: 'hidden', height: 0});
               $topCoursePanels.eq(topCourseCurrentTab).css({visibility: 'visible', height: 'auto'});
               $topCoursePanels.eq(topCourseCurrentTab).slick('slickPlay');
               $topCoursePanels.eq(lastTopCourseTab).slick('slickPause');
               lastTopCourseTab = topCourseCurrentTab;
               // console.log('lastTab:'+lastTab+' ,topCourseCurrentTab:'+topCourseCurrentTab+' ,obj:'+$(obj).attr('href'));

               // Add active class to the tab which was clicked!!
               let $this = $(obj);
               // console.log($this.attr('href'));
               if($this.hasClass('active')) {
                   return;
               }

               $tabItems.removeClass('active');
               $this.addClass('active');

               // $topCoursePanels.css('display', 'none');
               // $($this.attr('href')).css('display', 'block');
           });
       });


       $tabItems.eq(0).trigger('click');
   });
});