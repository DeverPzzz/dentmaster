$("a[href^='#']").click(function () {
  var url = $(this).attr("href");
  $("html,body").animate({ scrollTop: $(url).offset().top - 73 }, 500);
});
