import Block from './Block'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class Projects extends Block {
  onEnterCompleted() {
    gsap.registerPlugin(ScrollTrigger)

    this.onScroll()
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
}
