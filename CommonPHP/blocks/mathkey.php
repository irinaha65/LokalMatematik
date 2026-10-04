
<script>
$(document).ready(function() {
  $('#myinput').on('keypress', function() {
    $('#action').fadeIn(function() {
      $(this).fadeOut();
    });
  });
  $('.mybutton').on('click', function() {
    var Paste = $(this).data('paste');
  
    $('#myinput').val($('#myinput').val() + Paste);
  });
});
</script>

<button class="mybutton" data-paste="√">√</button>
<button class="mybutton" data-paste="∛">∛</button>
<button class="mybutton" data-paste="²">²</button>
<button class="mybutton" data-paste="³">³</button>
<button class="mybutton" data-paste="¼">¼</button>
<button class="mybutton" data-paste="½">½</button>
<button class="mybutton" data-paste="¾">¾</button>
<button class="mybutton" data-paste="°">°</button>

<button class="mybutton" data-paste="[">[</button>

<button class="mybutton" data-paste="]">]</button>
<button class="mybutton" data-paste="{">{</button>
<button class="mybutton" data-paste="}">}</button>
<button class="mybutton" data-paste="|">|</button>
<button class="mybutton" data-paste="§">§</button>
<button class="mybutton" data-paste="±">±</button>
<button class="mybutton" data-paste="‰">‰</button>
<button class="mybutton" data-paste="α">α</button>
<button class="mybutton" data-paste="β">β</button>
<button class="mybutton" data-paste="γ">γ</button>
<button class="mybutton" data-paste="δ">δ</button>
<button class="mybutton" data-paste="λ">λ</button>
<button class="mybutton" data-paste="μ">μ</button>
<button class="mybutton" data-paste="π">π</button>
<button class="mybutton" data-paste="∑">∑</button>
<button class="mybutton" data-paste="Δ">Δ</button>
<button class="mybutton" data-paste="∞">∞</button>
<button class="mybutton" data-paste="∩">∩</button>
<button class="mybutton" data-paste="∪">∪</button>
<button class="mybutton" data-paste="∫">∫</button>
<button class="mybutton" data-paste="∬">∬</button>
<button class="mybutton" data-paste="≈">≈</button>
<button class="mybutton" data-paste="≠">≠</button>
<button class="mybutton" data-paste="⊂">⊂</button>
<button class="mybutton" data-paste="⊃">⊃</button>
<button class="mybutton" data-paste="⊄">⊄</button>
<button class="mybutton" data-paste="⊅">⊅</button>
<button class="mybutton" data-paste="⊆">⊆</button>
<button class="mybutton" data-paste="⊥">⊥</button>
<button class="mybutton" data-paste="⊿">⊿</button>
<button class="mybutton" data-paste="∥">∥</button>
<button class="mybutton" data-paste="∦">∦</button>
<button class="mybutton" data-paste="∟">∟</button>
<button class="mybutton" data-paste="∠">∠</button>


<button class="mybutton" data-paste="→">→</button>
<button class="mybutton" data-paste="←">←</button>
<button class="mybutton" data-paste="↓">↓</button>
<button class="mybutton" data-paste="↑">↑</button>
<button class="mybutton" data-paste="↔">↔</button>
<button class="mybutton" data-paste="↕">↕</button>
<button class="mybutton" data-paste="⇐">⇐</button>
<button class="mybutton" data-paste="⇑">⇑</button>
<button class="mybutton" data-paste="⇒">⇒</button>
<button class="mybutton" data-paste="⇓">⇓</button>
<button class="mybutton" data-paste="⇔">⇔</button>
<button class="mybutton" data-paste="⇕">⇕</button>
<hr>
<button class="mybutton" data-paste="♣">♣</button>
<button class="mybutton" data-paste="♠">♠</button>
<button class="mybutton" data-paste="♥">♥</button>
<button class="mybutton" data-paste="♦">♦</button>
<button class="mybutton" data-paste="★">★</button>
<button class="mybutton" data-paste="⚪">⚪</button>
<button class="mybutton" data-paste="◊">◊</button>
<button class="mybutton" data-paste="🗸">🗸</button>
<button class="mybutton" data-paste="✎">✎</button>
<button class="mybutton" data-paste="☼">☼</button>
<button class="mybutton" data-paste="☽">☽</button>
<button class="mybutton" data-paste="☁">☁</button>
<button class="mybutton" data-paste="☂">☂</button>
<button class="mybutton" data-paste="✈">✈</button>
<button class="mybutton" data-paste="✉">✉</button>
<button class="mybutton" data-paste="☏">☏</button>
<button class="mybutton" data-paste="☠">☠</button>
<button class="mybutton" data-paste="☢">☢</button>
<button class="mybutton" data-paste="☯">☯</button>
<button class="mybutton" data-paste="♻">♻</button>
<button class="mybutton" data-paste="☞">☞</button>
<button class="mybutton" data-paste="☟">☟</button>
<button class="mybutton" data-paste="☝">☝</button>
<button class="mybutton" data-paste="☜">☜</button>
<button class="mybutton" data-paste="❀">❀</button>
<button class="mybutton" data-paste="❄">❄</button>
<span id="action" style="display:none">Key press</span>
<hr>