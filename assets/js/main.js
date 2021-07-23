$(function () {
  var $window = $(window),
    $body = $("body"),
    $wrapper = $("#wrapper");

  skel.breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)",
  });

  $body.addClass("is-loading");

  $window.on("load", function () {
    $body.removeClass("is-loading");
  });

  $window.on("load", function () {
    $(".thumbnails").poptrox({
      onPopupClose: function () {
        $body.removeClass("is-covered");
      },
      onPopupOpen: function () {
        $body.addClass("is-covered");
      },
      baseZIndex: 10001,
      useBodyOverflow: false,
      usePopupEasyClose: true,
      overlayColor: "#000000",
      overlayOpacity: 0.75,
      popupLoaderText: "",
      fadeSpeed: 500,
      usePopupDefaultStyling: false,
      windowMargin: skel.breakpoint("small").active ? 5 : 50,
    });
  });
});
