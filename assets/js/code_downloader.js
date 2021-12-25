//----------------------------------------Codes Downloader-------------
$(document).ready(function () {
  var myRight1 =
    "--Created by Code player All Right reserved --";
  var myRight2 =
    "--Developed by Mohamed Bahrawy : https://www.linkedin.com/in/mbahrawy/";
  var myRightsALL =
    "\n\n<!---" + myRight1 + "--->\n<!---" + myRight2 + "--->\n\n";

  //-----------HTML---------
  $("#HTMLcodeDownloader").click(function () {
    // create `a` element
    $("<a />", {
      // if supported , set name of file
      download: "HTML codes" + ".html",
      // set `href` to `objectURL` of `Blob` of `textarea` value
      href: URL.createObjectURL(
        new Blob(
          [
            "<!doctype html>\n<html>\n<head>" +
              myRightsALL +
              "<title>Code player</title>\n\n<meta charset='utf-8' />\n<meta http-equiv='Content-type' content='text/html; charset=utf-8' />\n<meta name='viewport' content='width=device-width, initial-scale=1' />\n<style type='text/css'>\n" +
              "\n</style>\n<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'>\n</script>\n</head>\n<body>\n" +
              $("#HTMLcode").val() +
              "\n\n</body>\n</html>",
          ],
          {
            type: "text/plain",
          }
        )
      ),
    })
      // append `a` element to `body`
      // call `click` on `DOM` element `a`
      .appendTo("body")[0]
      .click();
    // remove appended `a` element after "Save File" dialog,
    // `window` regains `focus`
    $(window).one("focus", function () {
      $("a").last().remove();
    });
  });
  //---------------------CSS-------------------

  $("#CSScodeDownloader").click(function () {
    // create `a` element
    $("<a />", {
      // if supported , set name of file
      download: "CSS codes" + ".css",
      // set `href` to `objectURL` of `Blob` of `textarea` value
      href: URL.createObjectURL(
        new Blob(
          [
            "/*" +
              myRight1 +
              "\n" +
              myRight2 +
              "*/" +
              "\n\n" +
              $("#CSScode").val(),
          ],
          {
            type: "text/plain",
          }
        )
      ),
    })
      // append `a` element to `body`
      // call `click` on `DOM` element `a`
      .appendTo("body")[0]
      .click();
    // remove appended `a` element after "Save File" dialog,
    // `window` regains `focus`
    $(window).one("focus", function () {
      $("a").last().remove();
    });
  });

  //----------------------JS-------------------

  $("#JSodeDownloader").click(function () {
    // create `a` element
    $("<a />", {
      // if supported , set name of file
      download: "JavaScript codes" + ".js",
      // set `href` to `objectURL` of `Blob` of `textarea` value
      href: URL.createObjectURL(
        new Blob(
          [
            "/*" +
              myRight1 +
              "\n" +
              myRight2 +
              "*/" +
              "\n\n" +
              $("#JScode").val(),
          ],
          {
            type: "text/plain",
          }
        )
      ),
    })
      // append `a` element to `body`
      // call `click` on `DOM` element `a`
      .appendTo("body")[0]
      .click();
    // remove appended `a` element after "Save File" dialog,
    // `window` regains `focus`
    $(window).one("focus", function () {
      $("a").last().remove();
    });
  });

  //----------------------Total codes in single file-------------------

  $("#totalCodeDownloader").click(function () {
    var totalCodesInsinglefile =
      "<!doctype html>\n<html>\n<head>" +
      myRightsALL +
      "<title>Code player</title>\n\n<meta charset='utf-8' />\n<meta http-equiv='Content-type' content='text/html; charset=utf-8' />\n<meta name='viewport' content='width=device-width, initial-scale=1' />\n<style type='text/css'>\n" +
      $("#CSScode").val() +
      "\n</style>\n<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>\n\n</head>\n<body>\n" +
      $("#HTMLcode").val() +
      "\n<script type='text/javascript'>\n" +
      $("#JScode").val() +
      "\n</script>\n</body>\n</html>\n\n";
    // create `a` element
    $("<a />", {
      // if supported , set name of file
      download: "Total code - by Code player" + ".HTML",
      // set `href` to `objectURL` of `Blob` of `textarea` value
      href: URL.createObjectURL(
        new Blob([totalCodesInsinglefile], {
          type: "text/plain",
        })
      ),
    })
      // append `a` element to `body`
      // call `click` on `DOM` element `a`
      .appendTo("body")[0]
      .click();
    // remove appended `a` element after "Save File" dialog,
    // `window` regains `focus`
    $(window).one("focus", function () {
      $("a").last().remove();
    });
  });
});
