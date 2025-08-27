import Block from './Block'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class Projects extends Block {
  onEnterCompleted() {
    gsap.registerPlugin(ScrollTrigger)

    this.onScroll()
    this.initHoverAnimations()
  }

  getElems() {
    this.$items = this.el.querySelectorAll('.b-projects__item')
    this.$metas = this.el.querySelectorAll('.b-projects__meta')
  }

  onScroll() {
    gsap.set(this.$items, { opacity: 0 })

    this.$items.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%'
        }
      })
    })
  }

  initHoverAnimations() {
  this.$metas.forEach((meta) => {
    const date = meta.querySelector('.b-projects__date')
    const more = meta.querySelector('.b-projects__more')

    gsap.set(more, {
      opacity: 0,
      y: 10
    })
    
    meta.addEventListener('mouseenter', () => {
      gsap.to(date, {
        opacity: 0,
        y: -10,
        duration: 0.7,
        ease: 'power2.out'
      })
      gsap.to(more, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out'
      })
    })

    meta.addEventListener('mouseleave', () => {
      gsap.to(date, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out'
      })
      gsap.to(more, {
        opacity: 0,
        y: 10,
        duration: 0.7,
        ease: 'power2.out'
      })
    })
  })
}
}
