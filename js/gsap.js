
    // SplitText Animation
    var split = new SplitType(".main-head", { type: "chars" });
    var tl = gsap.timeline();
    tl.from(split.chars, { opacity: 0, y: 50, duration: 0.6, ease: "back", stagger: 0.05 })
        .from(".sub-head", { opacity: 0, y: 40, ease: "back" }, "-=1")
        .from(".logo", { opacity: 0, x: -40, ease: "back" }, "-=1")
        .from(".nav-right", { opacity: 0, x: 40, ease: "back" }, "-=1")
        .from(".hero-bottom", { opacity: 0, y: 30, ease: "back", delay: 0.4 }, "-=1") // Adjust the delay value as needed
    

    function createScrollAnimation(element, startScale) {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
            scale: startScale,
            duration: 0.8,
        });
    }

    createScrollAnimation(".main-head", 0.5);
    createScrollAnimation(".sub-head", 0.7);
    createScrollAnimation(".out-btn", 0.5);


 
    function createScrollAnimation(element, startScale) {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
            scale: startScale,
            duration: 0.8,
        });
    }
    
    if (window.innerWidth > 768) {
        var contactHead = document.querySelector(".contact-head");
        createScrollAnimation(contactHead, 1.5);
    }
    

    // Additional Scroll Animation with class toggling
    function createToggleClassScrollAnimation(element, startScale) {
        var scaleValue = window.innerWidth < 991 ? 6 : startScale;
    
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            scale: scaleValue,
            duration: 0.8,
            borderRadius: "20px",
            transformOrigin: "top"
        });
    }
    
    createToggleClassScrollAnimation(".hero-video video", 16);
    


    // video zoom end

    // text type start
    const revealTypes = document.querySelectorAll('.reveal-type')
	
		revealTypes.forEach((element, i) => {
	
			const bg = element.dataset.bgColor
			const fg = element.dataset.fgColor
	
			gsap.fromTo(element,
				{
					color: bg,
					x: i % 2 === 0 ? -100 : 100,
					opacity: 0,
				},
				{
					color: fg,
					duration: 0.9,
					x: 0,
					opacity: 1,
					scrollTrigger: {
						trigger: element,
						start: 'top 90%',
						end: 'top 10%',
						scrub: true,
						markers: false,
						toggleActions: 'play play reverse reverse'
					}
				})
		});

        const top_action = document.querySelectorAll('.top-action')

        top_action.forEach((element, i) => {
    
        
            gsap.fromTo(element,
                {
                    y: i % 2 === 0 ? 200 : -200,
                },
                {
                    duration: 0.5,
                    y: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        end: 'top 60%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                })
        });
        const top_action2 = document.querySelectorAll('.top-action2')

        top_action2.forEach((element, i) => {
    
        
            gsap.fromTo(element,
                {
                    y: i % 2 === 0 ? 200 : -200,
                },
                {
                    duration: 0.5,
                    y: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        end: 'top 60%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                })
        });
        const top_action3 = document.querySelectorAll('.top-action3')

        top_action3.forEach((element, i) => {
    
        
            gsap.fromTo(element,
                {
                    y: i % 2 === 0 ? 200 : -200,
                },
                {
                    duration: 0.5,
                    y: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        end: 'top 60%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                })
        });
        const top_action4 = document.querySelectorAll('.top-action4')

        top_action4.forEach((element, i) => {
    
        
            gsap.fromTo(element,
                {
                    y: i % 2 === 0 ? 200 : -200,
                },
                {
                    duration: 0.5,
                    y: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        end: 'top 60%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                })
        });
        const right_rotate = document.querySelectorAll('.right-left-rotate');

        right_rotate.forEach((element, i) => {
            const screenWidth = window.innerWidth;
        
            gsap.fromTo(
                element,
                {
                    rotation: 15, // Initial rotation
                    translateX: 50,
                    translateY: 25,
                    scale: screenWidth > 1024 ? 1.1 : 1 // Initial scale based on screen width
                },
                {
                    duration: 0.3,
                    y: 0,
                    rotation: 0, // Final rotation
                    translateX: 0,
                    translateY: 0,
                    scale: 1, // Final scale
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 60%',
                        end: 'bottom 90%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                }
            );
        
            if (screenWidth <= 1024) {
                gsap.to(element, {
                    scale: 1, // Final scale if screen width is less than or equal to 1024 pixels
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 60%',
                        end: 'bottom 90%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                });
            }
        });
        
        const left_rotate = document.querySelectorAll('.left-right-rotate');

        left_rotate.forEach((element, i) => {
            const screenWidth = window.innerWidth;
        
            gsap.fromTo(
                element,
                {
                    rotation: -15, // Initial rotation
                    translateX: -50,
                    translateY: 25,
                    scale: screenWidth > 1024 ? 1.1 : 1 // Initial scale based on screen width
                },
                {
                    duration: 0.3,
                    y: 0,
                    rotation: 0, // Final rotation
                    translateX: 0,
                    translateY: 0,
                    scale: 1, // Final scale
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 60%',
                        end: 'bottom 90%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                }
            );
        
            if (screenWidth <= 1024) {
                gsap.to(element, {
                    scale: 1, // Final scale if screen width is less than or equal to 1024 pixels
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 60%',
                        end: 'bottom 90%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                });
            }
        });
        
        
        


        // text type end



        // marquee start

        let marquees = document.querySelectorAll('.marquee');

        window.addEventListener("load", function () {
            marquees.forEach((marquee, index) => {
                let direction = index % 2 === 0 ? 1 : -1; // Alternate direction
                let rate = 100; // Adjust as needed
                let distance = marquee.clientWidth;
                let style = window.getComputedStyle(marquee);
                let marginRight = parseInt(style.marginRight) || 0;
                let totalDistance = distance + marginRight;
                let time = totalDistance / rate;

                gsap.to(marquee, {
                    x: direction * -totalDistance,
                    duration: time,
                    ease: "linear",
                    repeat: -1
                });
            });
        });

        

        // marquee end


        // cursor start
        let cursor = document.querySelector('.cursor');
        let cursorScale = document.querySelectorAll('.cursor-scale'); 
        let mouseX = 0;
        let mouseY = 0;
        
        gsap.to({}, 0.016, {
          repeat: -1,
          onRepeat: function(){
            gsap.set(cursor, {
              css: {
                left: mouseX,
                top: mouseY,
              }
            })
          }
        });
        
        window.addEventListener('mousemove', (e)=> {
          mouseX = e.clientX;
          mouseY = e.clientY;
        })
        
        cursorScale.forEach(link => {
          link.addEventListener('mousemove', ()=> {
            cursor.classList.add('grow'); 
            if (link.classList.contains('small')){
              cursor.classList.remove('grow');
              cursor.classList.add('grow-small');
            }
          });
          
          link.addEventListener('mouseleave', ()=> {
            cursor.classList.remove('grow');
            cursor.classList.remove('grow-small');
          });
        })
        // cursor end