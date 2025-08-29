import Block from './Block'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

export default class SingleProject extends Block {
  onEnterCompleted() {
    this.handleReveal()
  }

  getElems() {
    this.$title = this.el.querySelector('.s-projet-hero__title')
    this.$subtitle = this.el.querySelector('.s-projet-hero__subtitle')
    this.$description = this.el.querySelector('.s-projet-hero__description')
    this.$details = this.el.querySelectorAll('.s-projet-hero__detail')
    this.$detailsContainer = this.el.querySelectorAll('.s-projet-hero__details')
  }

  handleReveal() {
    if (!this.$title) return

    gsap.registerPlugin(SplitText)

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

  onLeave() {
    if (this.splitTitle) this.splitTitle.revert()
    if (this.splitSubtitle) this.splitSubtitle.revert()
    if (this.splitDescription) this.splitDescription.revert()
  }
}
