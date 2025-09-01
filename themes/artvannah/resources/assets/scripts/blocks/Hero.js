import Block from './Block'
import store from '../util/store'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

export default class Hero extends Block {
  init() {
    this.setPositions()

    if (store.isFirstLoaded) this.handleReveal()
  }

  getElems() {
    this.$title = this.el.querySelector('.b-hero__title')

    store.heroHeight = this.el.clientHeight

    if (this.$title) {
      this.splitTitle = SplitText.create(this.$title, {
        type: 'lines',
        linesClass: 'line',
        aria: 'auto'
      })
    }
  }

  events() {
    if (!store.isFirstLoaded) window.addEventListener('loaderComplete', () => this.handleReveal())
  }

  setPositions() {
    gsap.set(this.splitTitle.lines, { yPercent: 100 })
  }

  handleReveal() {
    gsap.to(this.splitTitle.lines, {
      yPercent: 0,
      ease: 'sine.out',
      delay: store.isFirstLoaded ? '0.5' : '0'
    })
  }

  scroll() {
    const scrollY = window.scrollY || window.pageYOffset

    if (scrollY > store.heroHeight / 2) this.$title.classList.add('b-hero__title--dark')
    else this.$title.classList.remove('b-hero__title--dark')
  }
}


