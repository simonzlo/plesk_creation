

// one_page – невозврат
$(document).ready(function() {

    setInterval(function() {
      let wrapper_size_1 = $('.one').width();
      let one_in_size =  $(".one_in").width();
      if (one_in_size < wrapper_size_1 || one_in_size == 0) {
      $(".one_in").css({
        width: function(index, value) {
          return parseFloat (value) + 100
        }
    })
  } else { $(".one_in").width('101%'); }
  }, 1600);

 })


$(document).ready(function() {
    setInterval(function() {
      let wrapper_size_2 = $('.two').width();
      let two_in_size =  $(".two_in").width();
      if (two_in_size < wrapper_size_2 || two_in_size == 0) {
      $(".two_in").css({
        width: function(index, value) {
          return parseFloat (value) + 100
        }
    })
  } else { $(".two_in").width('101%'); }
  }, 1300);

 })


$(document).ready(function() {
    setInterval(function() {
      let wrapper_size_3 = $('.three').width();
      let three_in_size =  $(".three_in").width();
      if (three_in_size < wrapper_size_3 || three_in_size == 0) {
      $(".three_in").css({
        width: function(index, value) {
          return parseFloat (value) + 100
        }
    })
  } else { $(".three_in").width('101%'); }
  }, 1000);

    $(".one, .two, .three, .four, .five").click(function(e){
      $(e.target).children().css({
     width: function(index, value) {
      return parseFloat (value) - 200
     }
    });
    })
 })



$(document).ready(function() {
    setInterval(function() {
      let wrapper_size_4 = $('.four').width();
      let four_in_size =  $(".four_in").width();
      if (four_in_size < wrapper_size_4 || four_in_size == 0) {
      $(".four_in").css({
        width: function(index, value) {
          return parseFloat (value) + 100
        }
    })
  } else { $(".four_in").width('101%'); }
  }, 400);

    // $(this).click(function(e){
    //   $(e.target).children().css({
    //  width: function(index, value) {
    //   return parseFloat (value) - 100
    //  }
    // });
    // })
 })


$(document).ready(function() {
    setInterval(function() {
      let wrapper_size_5 = $('.five').width();
      let five_in_size =  $(".five_in").width();
      if (five_in_size < wrapper_size_5 || five_in_size == 0) {
      $(".five_in").css({
        width: function(index, value) {
          return parseFloat (value) + 100
        }
    })
  } else { $(".five_in").width('101%'); }
  }, 100);

    // $(this).click(function(e){
    //   $(e.target).children().css({
    //  width: function(index, value) {
    //   return parseFloat (value) - 200
    //  }
    // });
    // })
 })






// two_page – тетрис
    $(document).ready(function(){
      $(".box_one").click(function(){
        $(this).addClass("box_one_stop");
        $(this).css({
        top: function(index, value) {
        return parseFloat (value) +10;
    }
  });
      });
    });



    $(document).ready(function(){
      $(".box_two").click(function(){
        $(this).addClass("box_two_stop");
        $(this).css({
        top: function(index, value) {
        return parseFloat (value) +10;
    }
  });
      });
    });


    $(document).ready(function(){
      $(".box_three").click(function(){
        $(this).addClass("box_three_stop");
        $(this).css({
        top: function(index, value) {
        return parseFloat (value) +10;
    }
  });
      });
    });



        $(document).ready(function(){
          $(".box_four").click(function(){
            $(this).addClass("box_four_stop");
            $(this).css({
            top: function(index, value) {
            return parseFloat (value) +10;
        }
      });
          });
        });


        $(document).ready(function(){
          $(".box_five").click(function(){
            $(this).addClass("box_five_stop");
            $(this).css({
            top: function(index, value) {
            return parseFloat (value) +10;
        }
      });
          });
        });




        $(document).ready(function(){
          $(".box_six").click(function(){
            $(this).addClass("box_six_stop");
            $(this).css({
            top: function(index, value) {
            return parseFloat (value) +10;
        }
      });
          });
        });



        $(document).ready(function(){
          $(".box_seven").click(function(){
            $(this).addClass("box_seven_stop");
            $(this).css({
            top: function(index, value) {
            return parseFloat (value) +10;
        }
      });
          });
        });




        $(document).ready(function(){
          $(".box_eight").click(function(){
            $(this).addClass("box_eight_stop");
            $(this).css({
            top: function(index, value) {
            return parseFloat (value) +10;
        }
      });
          });
        });



        $(document).ready(function(){
          $(".box_nine").click(function(){
            $(this).addClass("box_nine_stop");
            $(this).css({
            top: function(index, value) {
            return parseFloat (value) +10;
        }
      });
          });
        });



        $(document).ready(function(){
          $(".box_ten").click(function(){
            $(this).addClass("box_ten_stop");
            $(this).css({
            top: function(index, value) {
            return parseFloat (value) +10;
        }
      });
          });
        });

      //
      //
      //
      //   $(document).ready(function(){
      //     $(".box_five").click(function(){
      //       $(this).addClass("box_five_stop");
      //       $(this).css({
      //       top: function(index, value) {
      //       return parseFloat (value) +10;
      //   }
      // });
      //     });
      //   });
      //
      //
      //
      //
      //   $(document).ready(function(){
      //     $(".box_five").click(function(){
      //       $(this).addClass("box_five_stop");
      //       $(this).css({
      //       top: function(index, value) {
      //       return parseFloat (value) +10;
      //   }
      // });
      //     });
      //   });
      //
      //
      //
      //
      //   $(document).ready(function(){
      //     $(".box_five").click(function(){
      //       $(this).addClass("box_five_stop");
      //       $(this).css({
      //       top: function(index, value) {
      //       return parseFloat (value) +10;
      //   }
      // });
      //     });
      //   });































// three_page – пятнашки
  $(document).ready(function() {
    $(".quarter_one, .quarter_two, .quarter_three, .quarter_four, .quarter_five, .quarter_six").click(function(){
      $(this).toggleClass('revers');
     });
   });




  // four_page – сапер
      $(document).ready(function(){
        $(".trigger1").click(function(){
          $(".target1").addClass("black");
        });
      });

      $(document).ready(function(){
        $(".trigger2").click(function(){
          $(".target2").addClass("black");
        });
      });

      $(document).ready(function(){
        $(".trigger3").click(function(){
          $(".target3").addClass("black");
        });
      });

      $(document).ready(function(){
        $(".trigger4").click(function(){
          $(".target4").addClass("black");
        });
      });

      $(document).ready(function(){
        $(".trigger5").click(function(){
          $(".target5").addClass("black");
        });
      });
  // <!-- <script type="text/javascript">
  //     $(document).ready(function(){
  //       $(".trigger1").click(function(){
  //         $(".target1").addClass("black");
  //       });
  //     });
  // </script> -->

      $(document).ready(function(){
        $(".trigger6").click(function(){
          $(".target6").addClass("black");
        });
      });

      $(document).ready(function(){
        $(".burn1").click(function(){
          $(".r1").addClass("black");
        });
      });


      $(document).ready(function(){
        $(".touch").hover(function(){
          $(".react").toggleClass("blacked");
        });
        $(".touch").click(function(){
          location.reload();
        })
      });




      // five_page – end game




      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      $(window).scrollTo(0, 0);
