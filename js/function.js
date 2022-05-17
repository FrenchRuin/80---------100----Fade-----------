
$(function () {

	const $indicator = $('.slides > .slides-pagination > li > a');
	// const $container = $('.slides > .slides-container');

	const $slides = $('.slides > .slides-container > p');
	const $btnPrev = $('.prev');
	const $btnNext = $('.next');

	const $btnAuto = $('.btn_auto');


	let intervalKey = null;

	let nowIdx = Math.floor(Math.random() * 5);


	$slides.eq(nowIdx).show();
	$indicator.eq(nowIdx).parent().addClass('on');

	const fadeFn = function () {
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')

		$slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000);

	}

	$indicator.on('click', function (evt) {
		evt.preventDefault();

		nowIdx = $indicator.index(this);

		fadeFn();

	})

	$btnNext.on('click', function (evt) {
		evt.preventDefault();



		if (nowIdx < $indicator.length - 1) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		fadeFn();
	})

	$btnPrev.on('click', function (evt) {
		evt.preventDefault();

		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = $indicator.length - 1
		}
	})




	// 자동실행
	$btnAuto.on('click', function () {
		if ($(this).hasClass('pause')) {

			$(this).removeClass('pause')
			clearInterval(intervalKey)
		} else {
			$(this).addClass('pause')
			intervalKey = setInterval(function () {
				$btnNext.trigger('click')
			}, 2000)
		}

	})
})

























