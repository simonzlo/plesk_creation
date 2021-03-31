

// one_page – черные блоки затягивающие страницу


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



// two_page – падающие  черные блоки
