import Block from './Block'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class SingleProject extends Block {
  init() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(SplitText)
  }

  onEnterCompleted() {
    this.handleReveal()
    this.handleScrollAnimations()
  }

  getElems() {
    this.$title = this.el.querySelector('.s-projet-hero__title')
    this.$subtitle = this.el.querySelector('.s-projet-hero__subtitle')
    this.$description = this.el.querySelector('.s-projet-hero__description')
    this.$details = this.el.querySelectorAll('.s-projet-hero__detail')
    this.$detailsContainer = this.el.querySelectorAll('.s-projet-hero__details')
    this.$sliderContainer = this.el.querySelector('.s-projet-slider__container')
    this.$sliderArrow = this.el.querySelector('.s-projet-slider__pagers.u-pagers')
    this.$sliderDesc = this.el.querySelector('.s-projet-slider__desc.u-pagers')
  }

  handleReveal() {
    if (!this.$title) return

    this.splitTitle = SplitText.create(this.$title, {
      type: 'lines',
      linesClass: 'line',
      aria: 'auto'
    })

    if (this.$subtitle) {
      this.splitSubtitle = SplitText.create(this.$subtitle, {
        type: 'lines words',
        linesClass: 'line',
        wordsClass: 'word',
        aria: 'auto'
      })

    }

    if (this.$description) {
      this.splitDescription = SplitText.create(this.$description, {
        type: 'lines',
        linesClass: 'line',
        aria: 'auto'
      })
    }

    const tl = gsap.timeline()

    tl.set(this.$title, { opacity: 1 })
      .from(this.splitTitle.lines, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: 'sine.out'
      }, '<0.1')

    if (this.$subtitle) {
      tl.set(this.$subtitle, { opacity: 1 }, '<0.1')

      this.splitSubtitle.lines.forEach((line) => {
        const words = line.querySelectorAll('.word')

        gsap.set(line, { overflow: 'hidden' })

        tl.from(words, {
          yPercent: 100,
          opacity: 0,
          ease: 'sine.out'
        }, '<0.05')
      })
    }

    if (this.$description) {
      tl.set(this.$description, { opacity: 1 }, '<0.1')

      this.splitDescription.lines.forEach((line) => {
          tl.from(line.children[0], {
            yPercent: 100,
            opacity: 0,
            ease: 'sine.out'
          }, '<0.05')
      })
    }

   if (this.$details) {
      tl.set(this.$detailsContainer, { opacity: 1 }, '<0.1')

      this.$details.forEach((item) => {
          tl.from(item.children[0], {
            yPercent: 100,
            opacity: 0,
            ease: 'sine.out'
          }, '<0.05')
      })
    }
  }

  handleScrollAnimations() {
    if (!this.$sliderContainer) return

    if (this.$sliderDesc) {
      this.splitSliderDesc = SplitText.create(this.$sliderDesc, {
        type: 'lines',
        linesClass: 'line u-overflow-hidden',
        aria: 'auto'
      })
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$sliderContainer,
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    })

    gsap.set([this.$sliderContainer, this.$sliderArrow], {
      yPercent: 25,
      opacity: 0
    })

    if (this.$sliderDesc) {
      this.splitSliderDesc.lines.forEach((line) => {
        gsap.set(line.children[0], { yPercent: 100 })
      })
    }

    tl
      .to([this.$sliderContainer, this.$sliderArrow], {
        yPercent: 0,
        opacity: 1
      })

    if (this.$sliderDesc) {
      this.splitSliderDesc.lines.forEach((line) => {
        tl.to(line.children[0], {
          yPercent: 0,
          duration: 0.8,
          ease: 'sine.out'
        }, '<0.05')
      })
    }
  }

  onLeave() {
    if (this.splitTitle) this.splitTitle.revert()
    if (this.splitSubtitle) this.splitSubtitle.revert()
    if (this.splitDescription) this.splitDescription.revert()
    if (this.splitSliderDesc) this.splitSliderDesc.revert()
    ScrollTrigger.getAll().forEach((st) => st.kill())
  }


}
