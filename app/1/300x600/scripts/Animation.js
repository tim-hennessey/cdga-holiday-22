var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var w = document.getElementById("banner").offsetWidth;
	var h = document.getElementById("banner").offsetHeight;
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var container1 = document.getElementById("container-1");
	var container2 = document.getElementById("container-2");
	var frost = document.getElementById("frost");
	var can = document.getElementById("can");
	var txt1 = document.getElementById("txt1");
	var txt2 = document.getElementById("txt2");
	var txt3 = document.getElementById("txt3");
	var cta = document.getElementById("cta");

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		t.set(container1, {perspective: 600});
		t.set(container2, {perspective: 600});
		t.set(frost, {autoAlpha:0});
		t.set(can, {y:h, rotation: -20});
		t.set(txt1, {y:50, autoAlpha:0});
		t.set(txt2, {y:50, autoAlpha:0});
		t.set(txt3, {y:50, autoAlpha:0});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl1.to(frost, 1.5, {autoAlpha:1, ease: Sine.easeIn})
		.to(txt1, 1, {y:0, autoAlpha:1, ease: Sine.easeOut}, "-=1.5")
		.to(can, 1.5, {y:0, rotation:0, ease: Expo.easeOut}, "-=1.5")
		.to(txt2, 1, {y:0, autoAlpha:1, ease: Sine.easeOut}, "+=.25")

		.to(txt1, 1, {y:-50, autoAlpha:0, ease: Sine.easeIn}, "+=2")
		.to(txt2, 1, {y:-50, autoAlpha:0, ease: Sine.easeIn}, "-=.85")

		.to(txt3, 1, {y:0, autoAlpha:1, ease: Sine.easeOut});
		

		var total = 150;
        

        for (var i = 0; i < total; i++) {
            var Div1 = document.createElement('div1');
            t.set(Div1, {
                attr: {class: 'dot'},
                x: R(0, w),
                y:h,
                z: R(-100, 500),
                scale: R(.75, 1),
                opacity: R(.15, .25)
            });
            container1.appendChild(Div1);
            animm1(Div1);
        }

        for (var i = 0; i < total/5; i++) {
            var Div2 = document.createElement('div2');
            t.set(Div2, {
                attr: {class: 'dot'},
                x: R(100, 105),
                y:h,
                scale: R(.5, .75),
                opacity: R(.3, .5)
            });
            container2.appendChild(Div2);
            animm2(Div2);
        }

        function animm1(elm) {
            t.to(elm, R(4, 5), {y: 0, ease: Linear.easeNone, repeat: -1, delay: -15});
            t.to(elm, R(.1, .5), {x:R("+=1","+=5"),ease: Sine.easeInOut, yoyo:true, repeat: -1, delay: -15});
        }

        function animm2(elm) {
            t.to(elm, R(1, 1.25), {y: 0, ease: Linear.easeNone, repeat: -1, delay: -5});
            t.to(elm, R(.25, 1), {x:R("+=1","+=5"),ease: Sine.easeInOut, yoyo:true, repeat: -1, delay: -5});
        }

        function R(min, max) {
            return min + Math.random() * (max - min)
        }
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
