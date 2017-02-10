$(function() {
  $("#panel-btn").click(function() {
    $("#panel").slideToggle(200);
    $("#panel-btn-icon").toggleClass("close");
    return false;
  });
});

$(document).ready(function () {
    var pagetop = $('.pagetop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});

// クリックされた画像のsrcを取得しModalに貼り付けるJavaScript
function pop(self) {
    $('#imagepreview').attr('src', $(self).attr('src'));
    $('#imagemodal').modal('show');
}

// プロジェクトカード
var json_url = 'http://private-c40429-missionforest.apiary-mock.com/missions';
$(window).load(function (){
  // APIからJSONを取得
  $.getJSON(json_url)
  // JSON取得後の処理
  .done(function (data){
    if(data){
      for(var i in data){
        $("#output").append(
          "<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\n" +
            "<a href=\"" + data[i].url + "\">\n" +
              "<div class=\"card\">\n" +
                "<img class=\"card-img\" src=\"" + data[i].thumb_url + "\" class=\"out_cover_210x280\">\n" +
                "<div class=\"card-content\">\n" +
                  "<h1 class=\"card-title\">" + data[i].title + "</h1>" +
                  "<div class=\"col-xs-4\">" +
                    "<img src=\"" + data[i].author.thumb_url + "\" class=\"img-responsive img-circle out_cover_50x50\">" +
                  "</div>" +
                  "<div class=\"col-xs-8\">" +
                    "<p class=\"card-name\">" + data[i].author.name + "</p>" +
                  "</div>" +

                  "<div class=\"col-xs-12\">" +
                    "<p class=\"card-text\">" + data[i].summary + "</p>" +
                  "</div>" +

                  "</div>" +
                "</div>" +
              "</a>" +
            "</div>"
          );
      }
    }
  });
});

/*
<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
  <a href="">
    <div class="card">
      <img class="card-img" src="images/1.jpg" alt="">
      <div class="card-content">
        <h1 class="card-title">Project1</h1>
        <div class="col-xs-4">
          <img src="images/person.png" class="img-responsive img-circle img-thumbnail">
        </div>
        <div class="col-xs-8">
          <p class="card-text">名工 太郎</p>
        </div>
        <div class="col-xs-12">
          <p class="card-text">プロジェクトの説明</p>
        </div>
      </div>
    </div>
  </a>
</div>
*/
