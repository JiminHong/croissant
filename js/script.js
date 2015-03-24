(function ($) {
  
  $('body').jvmobilemenu({
    notMenuClick: $('.page'),
    slideSpeed: 0.3,
    menuWidth: 240
  });
  
  var headings = $("#accordion h2");
var sections = $("section");
sections.hide();


//When a header is clicked, the first thing to do is check whether
//the paragraph underneath it is visible. If it is, then you don’t
//need to do anything.

//next gets the element that immediately follows the current one in the DOM
//Using the return keyword causes the function to stop execution at that point, and no further code in that function will be run.

//Hiding the visible paragraph, in this instance it’s much easier to hide them all, and then show only the one you need.

$(function() {
var headings = $("#accordion h2");
var sections = $("section");
sections.not(":first").hide();
headings.on("click", function() {
var t = $(this);
//Made var t into another variable because we used it more than once.
var section = t.next();
if(section.is(":visible")) {
 section.hide();
}
else
{
sections.hide();
section.show();
}

});
});
})(jQuery);