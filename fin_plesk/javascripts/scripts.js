

// one_page – невозврат
<script type="text/javascript">
$(document).ready(function() {
    setInterval(function() {
      let wrapper_size = $('.one').width();
      let one_in_size =  $(".one_in").width();
      if (one_in_size < wrapper_size || one_in_size == 0) {
      $(".one_in").css({
        width: function(index, value) {
          return parseFloat (value) + 100
        }
    })
    } else { $(".one_in").width('100%'); }
  }, 1600);

    $(this).click(function(e){
      $(e.target).children().css({
     width: function(index, value) {
      return parseFloat (value) - 200
     }
    });
    })
 })
</script>


<script type="text/javascript">
$(document).ready(function() {
    setInterval(function() {
      let wrapper_size = $('.two').width();
      let two_in_size =  $(".two_in").width();
      if (two_in_size < wrapper_size || two_in_size == 0) {
      $(".two_in").css({
        width: function(index, value) {
          return parseFloat (value) + 100
        }
    })
    } else { $(".two_in").width('100%'); }
  }, 1300);

    $(this).click(function(e){
      $(e.target).children().css({
     width: function(index, value) {
      return parseFloat (value) - 200
     }
    });
    })
 })
</script>


<script type="text/javascript">
$(document).ready(function() {
    setInterval(function() {
      let wrapper_size = $('.three').width();
      let three_in_size =  $(".three_in").width();
      if (three_in_size < wrapper_size || three_in_size == 0) {
      $(".three_in").css({
        width: function(index, value) {
          return parseFloat (value) + 100
        }
    })
    } else { $(".three_in").width('100%'); }
  }, 1000);

    $(this).click(function(e){
      $(e.target).children().css({
     width: function(index, value) {
      return parseFloat (value) - 200
     }
    });
    })
 })
</script>


<script type="text/javascript">
$(document).ready(function() {
    setInterval(function() {
      let wrapper_size = $('.three').width();
      let three_in_size =  $(".three_in").width();
      if (three_in_size < wrapper_size || three_in_size == 0) {
      $(".three_in").css({
        width: function(index, value) {
          return parseFloat (value) + 100
        }
    })
    } else { $(".three_in").width('100%'); }
  }, 700);

    $(this).click(function(e){
      $(e.target).children().css({
     width: function(index, value) {
      return parseFloat (value) - 200
     }
    });
    })
 })
</script>


<script type="text/javascript">
$(document).ready(function() {
    setInterval(function() {
      let wrapper_size = $('.four').width();
      let four_in_size =  $(".four_in").width();
      if (four_in_size < wrapper_size || four_in_size == 0) {
      $(".four_in").css({
        width: function(index, value) {
          return parseFloat (value) + 100
        }
    })
    } else { $(".five_in").width('100%'); }
  }, 400);

    $(this).click(function(e){
      $(e.target).children().css({
     width: function(index, value) {
      return parseFloat (value) - 100
     }
    });
    })
 })
</script>


<script type="text/javascript">
$(document).ready(function() {
    setInterval(function() {
      let wrapper_size = $('.five').width();
      let five_in_size =  $(".five_in").width();
      if (five_in_size < wrapper_size || five_in_size == 0) {
      $(".five_in").css({
        width: function(index, value) {
          return parseFloat (value) + 100
        }
    })
    } else { $(".five_in").width('100%'); }
  }, 100);

    $(this).click(function(e){
      $(e.target).children().css({
     width: function(index, value) {
      return parseFloat (value) - 200
     }
    });
    })
 })
</script>






// two_page – тетрис
<script type="text/javascript">
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
</script>





// three_page – пятнашки
<script type="text/javascript">
  $(document).ready(function() {
    $(".quarter_one, .quarter_two, .quarter_three, .quarter_four, .quarter_five, .quarter_six").click(function(){
      $(this).toggleClass('revers');
     });
   });
  </script>




  // four_page – сапер
  <script type="text/javascript">
      $(document).ready(function(){
        $(".trigger1").click(function(){
          $(".target1").addClass("black");
        });
      });
  </script>

  <script type="text/javascript">
      $(document).ready(function(){
        $(".trigger2").click(function(){
          $(".target2").addClass("black");
        });
      });
  </script>

  <script type="text/javascript">
      $(document).ready(function(){
        $(".trigger3").click(function(){
          $(".target3").addClass("black");
        });
      });
  </script>

  <script type="text/javascript">
      $(document).ready(function(){
        $(".trigger4").click(function(){
          $(".target4").addClass("black");
        });
      });
  </script>

  <script type="text/javascript">
      $(document).ready(function(){
        $(".trigger5").click(function(){
          $(".target5").addClass("black");
        });
      });
  </script>
  <!-- <script type="text/javascript">
      $(document).ready(function(){
        $(".trigger1").click(function(){
          $(".target1").addClass("black");
        });
      });
  </script> -->

  <script type="text/javascript">
      $(document).ready(function(){
        $(".trigger6").click(function(){
          $(".target6").addClass("black");
        });
      });
  </script>

  <script type="text/javascript">
      $(document).ready(function(){
        $(".burn1").click(function(){
          $(".r1").addClass("black");
        });
      });
  </script>
