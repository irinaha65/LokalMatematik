
<script>
$(document).ready(function() {
  $('#myinput').on('keypress', function() {
    $('#action').fadeIn(function() {
      $(this).fadeOut();
    });
  });
  $('.mybutton').on('click', function() {
    var Paste = $(this).data('paste');
    console.log( $('#myinput').val());
    $('#myinput').val($('#myinput').val() + Paste);
  });
});
</script>

<button class="mybutton" data-paste="&amp;#x221A;">√</button>
<button class="mybutton" data-paste="&amp;#x221B;">∛</button>
<button class="mybutton" data-paste="&amp;#x221E;">∞</button>
<button class="mybutton" data-paste="&amp;#x2229;">∩</button>
<button class="mybutton" data-paste="&amp;#x222A;">∪</button>
<button class="mybutton" data-paste="&amp;#x222B;">∫</button>
<button class="mybutton" data-paste="&amp;#x222C;">∬</button>
<button class="mybutton" data-paste="&amp;#x2248;">≈</button>
<button class="mybutton" data-paste="&amp;#x2260;">≠</button>
<button class="mybutton" data-paste="&amp;#x2282;">⊂</button>
<button class="mybutton" data-paste="&amp;#x2283;">⊃</button>
<button class="mybutton" data-paste="&amp;#x2284;">⊄</button>
<button class="mybutton" data-paste="&amp;#x2285;">⊅</button>
<button class="mybutton" data-paste="&amp;#x2286;">⊆</button>
<button class="mybutton" data-paste="&amp;#x22A5;">⊥</button>
<button class="mybutton" data-paste="&amp;#x22BF;">⊿</button>
<button class="mybutton" data-paste="&amp;#x2225;">∥</button>
<button class="mybutton" data-paste="&amp;#x2226;">∦</button>
<button class="mybutton" data-paste="&amp;#x221F;">∟</button>
<button class="mybutton" data-paste="&amp;#x2220;">∠</button>
<button class="mybutton" data-paste="&amp;#x2211;">∑</button>
<span id="action" style="display:none">Key press</span>
<hr>
