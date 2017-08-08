// var dvs = document.querySelectorAll(".hideme");
// var cts = document.querySelectorAll(".lbl");

// for (var i = 0; i < dvs.length; i++) {
// 	// console.log(dvs[i]);
// 	dvs[i].classList.toggle("hideSection");
// }

// for (var i = 0; i < cts.length; i++) {
// 	cts[i].addEventListener("click", function(){
// 		console.log(i);
// 		// dvs[i].classList.toggle("hideSection");
// 	});
// }

  $(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){
      //Expand or collapse this panel
      $(this).next().slideToggle('fast');
      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');
    });
  });