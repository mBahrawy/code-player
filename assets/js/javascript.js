window.onload = function () {
  //----------------------------fixing heights on resizing----------
  var windowHeight = $(window).height();
  var topDiv = $("#topDiv").height();
  var codeContainer = windowHeight - topDiv;
  codeContainer = codeContainer - 76;

  function fixHights() {
    $(".hightFix").height(codeContainer + "px");
    $("#ResultFrame").height(codeContainer + "px");
  }

  $(window).resize(function () {
    $(".hightFix").css.height(100 + "%");
    $("#ResultFrame").css.height(100 + "%");
    //checkState();
  });
  fixHights();
  //----------------------------fixing resizing with bootsrtap------
  var htmlCSSJSContainer = document.getElementById("htmlCSSJSContainer");
  var ResultFrameContainer = document.getElementById("ResultFrameContainer");

  function fixBootStrap() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w <= 768) {
      htmlCSSJSContainer.style.width = "100" + "%";
      ResultFrameContainer.style.width = "100" + "%";
      ResultFrameContainer.style.marginTop = "26" + "px";
      ResultFrameContainer.style.paddingRight = "0" + "px";
    } else if (w > 768) {
      ResultFrameContainer.style.marginTop = "0" + "px";
      ResultFrameContainer.style.paddingRight = "15" + "px";

      if (
        myActiveHtml == true &&
        myActiveCSS == true &&
        myActiveJS == true &&
        myActiveResult == true
      ) {
        htmlCSSJSContainer.style.width = "60" + "%";
        ResultFrameContainer.style.width = "40" + "%";
      } else {
        htmlCSSJSContainer.style.width = "50" + "%";
        ResultFrameContainer.style.width = "50" + "%";
      }
    }
  }

  fixBootStrap();
  $(window).resize(function () {
    fixBootStrap();
    //	checkState();
    getMaxHeight();
  });

  var counterHTML = 0;
  var counterCSS = 0;
  var counterJS = 0;

  document.getElementById("counterHTML").innerHTML =
    "Characters :" + counterHTML;
  document.getElementById("counterCSS").innerHTML = "Characters :" + counterCSS;
  document.getElementById("counterJS").innerHTML = "Characters :" + counterJS;

  var myActiveHtml = true;
  var myActiveCSS = false;
  var myActiveJS = false;
  var myActiveResult = true;

  function checkState() {
    //state 1 check ("html only");
    if (
      myActiveHtml == true &&
      myActiveCSS == false &&
      myActiveJS == false &&
      myActiveResult == false
    ) {
      $(".col-sm-7").animate({
        height: codeContainer + "px",
        width: "100%",
        paddingRight: "15px",
      });
      $("#HTMLoptions").css("right", "15px");
    }

    //state 2 check ("html and result");
    else if (
      myActiveHtml == true &&
      myActiveCSS == false &&
      myActiveJS == false &&
      myActiveResult == true
    ) {
      $(".col-sm-7").animate({
        height: codeContainer + "px",
        width: "50%",
        paddingRight: "0",
      });
      $(".col-sm-5").animate({
        height: codeContainer + "px",
        width: "50%",
        padding: "0 15px",
      });

      $("#HTMLoptions").css("right", "0px");
    }
    //state 3 check ("html and css");
    else if (
      myActiveHtml == true &&
      myActiveCSS == true &&
      myActiveJS == false &&
      myActiveResult == false
    ) {
      $(".col-sm-7").animate({
        height: codeContainer / 2 - 22 + "px",
        width: "100%",
        paddingRight: "15px",
      });
      $("#HTMLoptions").css("right", "15px");

      $("#toggleCSS").animate({
        height: codeContainer / 2 - 22 + "px",
        width: "100%",
        marginTop: "35px",
        marginLeft: "0px",
      });
      $(".col-sm-5").animate({
        width: "0",
        padding: "0",
      });
    }
    //state 4 check ("html and js");
    else if (
      myActiveHtml == true &&
      myActiveCSS == false &&
      myActiveJS == true &&
      myActiveResult == false
    ) {
      $(".col-sm-7").animate({
        height: codeContainer / 2 - 22 + "px",
        width: "100%",
        paddingRight: "15px",
      });
      $("#HTMLoptions").css("right", "15px");

      $("#toggleJS").animate({
        height: codeContainer / 2 - 22 + "px",
        width: "100%",
        marginTop: "35px",
      });

      $(".col-sm-5").animate({
        width: "0",
      });
    }
    //state 5 check ("html and js and css");
    else if (
      myActiveHtml == true &&
      myActiveCSS == true &&
      myActiveJS == true &&
      myActiveResult == false
    ) {
      $(".col-sm-7").animate({
        height: codeContainer / 2 - 22 + "px",
        width: "100%",
        paddingRight: "15px",
      });
      $("#toggleJS").animate({
        height: codeContainer / 2 - 22 + "px",
        width: "49%",
        marginTop: "35px",
      });
      $("#toggleCSS").animate({
        height: codeContainer / 2 - 22 + "px",
        width: "49%",
        marginTop: "35px",
        marginRight: "2%",
        marginLeft: "-51px",
      });
      $(".col-sm-5").animate({
        width: "0",
        padding: "0",
      });
      $("#HTMLoptions").css("right", "15px");
    }
    //state 6 check ("html and css and result");
    else if (
      myActiveHtml == true &&
      myActiveCSS == true &&
      myActiveJS == false &&
      myActiveResult == true
    ) {
      $(".col-sm-7").animate({
        height: codeContainer / 2 - 25 + "px",
        width: "50%",
        paddingRight: "0",
      });
      $("#toggleCSS").animate({
        height: codeContainer / 2 - 26 + "px",
        width: "100%",
        marginTop: "35px",
        marginRight: "0",
        marginLeft: "0px",
      });
      $("#HTMLoptions").css("right", "0px");

      $(".col-sm-5").animate({
        width: "50%",
        padding: "0 15px",
      });
    }
    //state 6.5 check ("html and JS and result");
    else if (
      myActiveHtml == true &&
      myActiveCSS == false &&
      myActiveJS == true &&
      myActiveResult == true
    ) {
      $(".col-sm-7").animate({
        height: codeContainer / 2 - 25 + "px",
        width: "50%",
        paddingRight: "0",
      });
      $("#toggleJS").animate({
        height: codeContainer / 2 - 26 + "px",
        width: "100%",
        marginTop: "35px",
        marginRight: "0",
      });
      $(".col-sm-5").animate({
        width: "50%",
        padding: "0 15px",
      });
      $("#HTMLoptions").css("right", "0px");
    }
    //state 7 check ("all");
    else if (
      myActiveHtml == true &&
      myActiveCSS == true &&
      myActiveJS == true &&
      myActiveResult == true
    ) {
      $(".col-sm-7").animate({
        height: codeContainer / 2 - 12 + "px",
        width: "60%",
        paddingRight: "0",
      });
      $("#toggleJS").animate({
        height: codeContainer / 2 - 22 + "px",
        width: "48%",
        marginTop: "35px",
      });
      $("#toggleCSS").animate({
        height: codeContainer / 2 - 22 + "px",
        width: "48%",
        marginTop: "35px",
        marginRight: "4%",
        marginLeft: "-51px",
      });
      $(".col-sm-5").animate({
        width: "40%",
        padding: "0 15px",
      });
      $("#HTMLoptions").css("right", "0px");
    }
    //state 8 check ("css only");
    else if (
      myActiveHtml == false &&
      myActiveCSS == true &&
      myActiveJS == false &&
      myActiveResult == false
    ) {
      $("#toggleCSS").animate({
        height: codeContainer + "px",
        width: "100%",
        marginTop: "0px",
        marginLeft: "0px",
      });
      $(".col-sm-7").animate({
        width: "100%",
        paddingRight: "15px",
      });
    }
    //state 9 check ("css and js");
    else if (
      myActiveHtml == false &&
      myActiveCSS == true &&
      myActiveJS == true &&
      myActiveResult == false
    ) {
      $("#toggleCSS").animate({
        height: codeContainer / 2 - 22 + "px",
        width: "100%",
        marginTop: "0px",
        marginLeft: "0px",
      });
      $("#toggleJS").animate({
        height: codeContainer / 2 - 22 + "px",
        width: "100%",
        marginTop: "35px",
      });
      $(".col-sm-7").animate({
        width: "100%",
      });
    }
    //state 10 check alert("css and result");
    else if (
      myActiveHtml == false &&
      myActiveCSS == true &&
      myActiveJS == false &&
      myActiveResult == true
    ) {
      $("#toggleCSS").animate({
        height: codeContainer + "px",
        width: "100%",
        marginTop: "0px",
        marginLeft: "0px",
      });

      $(".col-sm-7").animate({
        width: "50%",
      });

      $(".col-sm-5").animate({
        height: codeContainer + "px",
        width: "50%",
        padding: "0 15px",
      });
    }
    //state 11 check ("css and js and result");
    else if (
      myActiveHtml == false &&
      myActiveCSS == true &&
      myActiveJS == true &&
      myActiveResult == true
    ) {
      $("#toggleCSS").animate({
        height: codeContainer / 2 - 19 + "px",
        width: "100%",
        marginTop: "0px",
        marginLeft: "0px",
      });
      $("#toggleJS").animate({
        height: codeContainer / 2 - 19 + "px",
        width: "100%",
        marginTop: "35px",
      });

      $(".col-sm-7").animate({
        width: "50%",
      });

      $(".col-sm-5").animate({
        height: codeContainer + "px",
        width: "50%",
        padding: "0 15px",
      });
    }
    //state 12 check ("js only");
    else if (
      myActiveHtml == false &&
      myActiveCSS == false &&
      myActiveJS == true &&
      myActiveResult == false
    ) {
      $("#toggleJS").animate({
        height: codeContainer + "px",
        width: "100%",
        marginTop: "0px",
      });
      $(".col-sm-7").animate({
        width: "100%",
        paddingRight: "15px",
      });
    }
    //state 13 check ("js and result");
    else if (
      myActiveHtml == false &&
      myActiveCSS == false &&
      myActiveJS == true &&
      myActiveResult == true
    ) {
      $("#toggleJS").animate({
        height: codeContainer + "px",
        width: "100%",
        marginTop: "0px",
      });

      $(".col-sm-7").animate({
        width: "50%",
      });

      $(".col-sm-5").animate({
        height: codeContainer + "px",
        width: "50%",
        padding: "0 15px",
      });
    }
    //state 14 check ("result only");
    else if (
      myActiveHtml == false &&
      myActiveCSS == false &&
      myActiveJS == false &&
      myActiveResult == true
    ) {
      $(".col-sm-5").animate({
        height: codeContainer + "px",
        width: "100%",
        padding: "0 15px",
      });
      $(".col-sm-7").animate({
        height: "0",
      });
    }
    //state 15 check ("nothing");
    else if (
      myActiveHtml == false &&
      myActiveCSS == false &&
      myActiveJS == false &&
      myActiveResult == false
    ) {
    }
  }

  checkState();

  var htmlSwitsh = 1;
  $("#toggleHTMLbtn").click(function () {
    $("#toggleHTML").toggle("slow");
    $(this).toggleClass("selected");
    htmlSwitsh = htmlSwitsh + 1;
    if (htmlSwitsh % 2 != 0) {
      myActiveHtml = true;
    } else myActiveHtml = false;
    checkState();
  });

  var CSSwitsh = 0;
  $("#toggleCSSbtn").click(function () {
    $(this).toggleClass("selected");
    $("#toggleCSS").toggle("slow");
    CSSwitsh = CSSwitsh + 1;
    if (CSSwitsh % 2 != 0) {
      myActiveCSS = true;
    } else myActiveCSS = false;
    checkState();
  });

  var JSwitsh = 0;
  $("#toggleJSbtn").click(function () {
    $(this).toggleClass("selected");
    $("#toggleJS").toggle("slow");
    JSwitsh = JSwitsh + 1;
    if (JSwitsh % 2 != 0) {
      myActiveJS = true;
    } else myActiveJS = false;
    checkState();
  });

  var resyltSwitsh = 1;
  $("#toggleResultbtn").click(function () {
    $("#toggleResult").toggle("slow");
    $(this).toggleClass("selected");
    resyltSwitsh = resyltSwitsh + 1;
    if (resyltSwitsh % 2 != 0) {
      myActiveResult = true;
    } else myActiveResult = false;
    checkState();
  });

  $(".linedtextarea").click(function () {
    $(this).css("margin-left", "50px");
  });

  $(".linedtextarea").css("margin-left", "50px");
  $(".linedtextarea").keyup(function () {
    $(this).css("margin-left", "50px");
  });

  $(".lines").css("height", "99.5%");
  $(".heddinToggle").hide();

  //---------------------Getting the selected line number ---------------------
  //-----HTML-----

  $("#HTMLcode").keyup(function () {
    getLineNumberAndColumnIndexHTML();
  });

  $("#HTMLcode").mouseup(function () {
    $(this).keyup();
  });

  var HTMLcode = document.getElementById("HTMLcode");
  function getLineNumberAndColumnIndexHTML() {
    var textLinesHTML = HTMLcode.value
      .substr(0, HTMLcode.selectionStart)
      .split("\n");
    var currentLineNumberHTML = textLinesHTML.length;

    var counterHTML = document.getElementById("HTMLcode").value.length;
    document.getElementById("counterHTML").innerHTML =
      "Characters :" + counterHTML;

    $(
      "#toggleHTML > .linedwrap > .lines:nth-child(1) > .codelines:nth-child(1) > *"
    ).removeClass("lineselect");
    $(
      "#toggleHTML > .linedwrap > .lines:nth-child(1) > .codelines:nth-child(1) > .lineno:nth-child(" +
        currentLineNumberHTML +
        ")"
    ).addClass("lineselect");

    //css3 selector to put with jquery append style selected !!!
  }

  //-------CSS-------

  $("#CSScode").keyup(function () {
    getLineNumberAndColumnIndexCSS();
  });

  $("#CSScode").mouseup(function () {
    $(this).keyup();
  });

  var CSScode = document.getElementById("CSScode");
  function getLineNumberAndColumnIndexCSS() {
    var textLinesCSS = CSScode.value
      .substr(0, CSScode.selectionStart)
      .split("\n");
    var currentLineNumberCSS = textLinesCSS.length;

    var counterCSS = document.getElementById("CSScode").value.length;
    document.getElementById("counterCSS").innerHTML =
      "Characters :" + counterCSS;

    $(
      "#toggleCSS > .linedwrap > .lines:nth-child(1) > .codelines:nth-child(1) > *"
    ).removeClass("lineselect");
    $(
      "#toggleCSS > .linedwrap > .lines:nth-child(1) > .codelines:nth-child(1) > .lineno:nth-child(" +
        currentLineNumberCSS +
        ")"
    ).addClass("lineselect");
  }

  //-------Javascript-------

  $("#JScode").keyup(function () {
    getLineNumberAndColumnIndexJS();
  });

  $("#JScode").mouseup(function () {
    $(this).keyup();
  });

  var JScode = document.getElementById("JScode");
  function getLineNumberAndColumnIndexJS() {
    var textLinesJS = JScode.value.substr(0, JScode.selectionStart).split("\n");
    var currentLineNumberJS = textLinesJS.length;

    var counterJS = document.getElementById("JScode").value.length;
    document.getElementById("counterJS").innerHTML = "Characters :" + counterJS;

    $(
      "#toggleJS > .linedwrap > .lines:nth-child(1) > .codelines:nth-child(1) > *"
    ).removeClass("lineselect");
    $(
      "#toggleJS> .linedwrap > .lines:nth-child(1) > .codelines:nth-child(1) > .lineno:nth-child(" +
        currentLineNumberJS +
        ")"
    ).addClass("lineselect");
  }
  //----------------------------------------buttons animation------------
  $(".ainmateBtn").hover(function () {
    $(this).animate(
      {
        top: "-3px",
        opacity: "1",
      },
      100,
      "linear"
    );
  });

  $(".ainmateBtn").mouseout(function () {
    $(this).animate(
      {
        top: "0px",
        opacity: "0.8",
      },
      100,
      "linear"
    );
  });

  //----------------------------------------Run it button----------------

  $("#runIt").click(function () {
    $("iframe")
      .contents()
      .find("html")
      .html(
        "<script type='text/javascript' src='jquery.min.js'></script>" +
          "<style>" +
          $("#CSScode").val() +
          "</style>" +
          $("#HTMLcode").val()
      );
    document
      .getElementById("ResultFrame")
      .contentWindow.eval($("#JScode").val());
  });
};
