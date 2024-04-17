import gsap from 'gsap'

// Effects
gsap.registerEffect({
	name: 'textFadeIn',
	effect: (targets: any, config: any) => {
		return gsap.to(targets, {
			startAt: { opacity: 0, translateY: '100%' },
			opacity: config.opacity,
			translateY: config.translateY,
			duration: config.duration,
			stagger: 1.5,
			ease: 'Expo.sineIn'
		})
	},
	defaults: { opacity: 1, translateY: 1, duration: 1 },
	extendTimeline: true
})

gsap.registerEffect({
	name: 'textFadeOut',
	effect: (targets: any, config: any) => {
		return gsap.to(targets, {
			opacity: config.opacity,
			translateY: config.translateY,
			duration: config.duration,
			ease: 'Expo.sineOut',
			stagger: 1.5
		})
	},
	defaults: { opacity: 0, translateY: '-1rem', duration: 1 },
	extendTimeline: true
})

gsap.registerEffect({
	name: 'heroFadeIn',
	effect: (targets: any, config: any) => {
		return gsap.to(targets, {
			opacity: config.opacity,
			translateY: config.translateY,
			rotate: config.rotate,
			duration: config.duration,
			delay: config.delay,
			ease: 'Power2.easeOut',
			stagger: config.stagger
		})
	},
	defaults: { opacity: 1, translateY: 0, rotate: 0, duration: 0.8, delay: 0.1, stagger: 0.1 },
	extendTimeline: true
})



export default gsap
