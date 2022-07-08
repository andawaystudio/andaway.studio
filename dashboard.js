// Draggable
$(function() {
	$('.draggable').draggable({ 
  	cancel: '.no-drag'
	});
});

// Clock
(function () {
	const clockTime = document.querySelector('.clock__time');
  const clockIcon = document.querySelector('.clock__icon');

  function updateClock () {
  	const getDate = new Date();
  	const getTime = getDate.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'});
    const getHr = getDate.getHours();
    
    clockTime.innerHTML = getTime;
    
    if (getHr >= 7 && getHr <= 19) {
    	clockIcon.style.backgroundColor = 'red';
    } else {
    	clockIcon.style.backgroundColor = 'blue';
    }
  }

  setInterval(function () {
      updateClock();
  }, 1000);
}());

// Accordion
$('.accordion__toggle').on('click', function() {
  $(this).siblings('.accordion__list').height(((this).siblings('.accordion__list p')).height());
  $('.accordion__list').not($(this).siblings('.accordion__list')).removeClass('cc--open');
});