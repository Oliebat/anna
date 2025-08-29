import gsap from 'gsap'
import store from './store'

/**
 * Loader class for handling the loading animation.
 * @class
 */
export default class Loader {
  constructor() {
    this.getElems()

    store.smoothScroll.stop()
  }

  getElems() {
    store.panel = document.querySelector('.panel')
    this.$progress = store.panel.querySelector('.panel__progress')
    this.$logo = store.panel.querySelector('.panel__logo')

    console.log(this.$logo, this.$progress)
  }

  play() {
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1
        },
        onComplete: () => {
          store.smoothScroll.start()

          store.menu && !store.detect.isMobile && store.menu.init()

          window.dispatchEvent(new CustomEvent('loaderComplete'))

          store.isFirstLoaded = true

          // resolve()
        }
      })

      // eslint-disable-next-line prefer-reflect
      tl
        .to(this.$progress, {
          width: '60%',
          ease: 'power4.inOut'
        })
        .to(this.$logo.children[0], {
            transform: 'translateY(-100%)',
            ease: 'power4.inOut'
        }, '<')
        .to(this.$logo.children[1], {
            transform: 'translateY(0)',
            ease: 'power4.inOut'
        }, '<')
        .to(this.$progress, {
          width: '100%',
          ease: 'power4.inOut'
        }, '+=0.2')
        .to(store.panel, {
          opacity: 0,
          ease: 'power4.out'
        }, '>')
    })
  }
}
