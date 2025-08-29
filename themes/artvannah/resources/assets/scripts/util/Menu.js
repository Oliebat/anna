import store from './store'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

/**
 * Menu class for handling menu open/close events.
 * @class
 */
export default class Menu {

  /**
   * Constructor for Menu class.
   * @constructor
   */
  constructor() {
    this.menuOpen = false
    this.isAnimating = false

    this.bindMethods()
    this.getElems()
    this.addEvents()
    this.handleHeaderReveal()

    this.onPageChange(window.location.href)
  }

  /**
   * Binds the class methods.
   * @method
   * @returns {void}
   */
  bindMethods() {
    this.toggle = this.toggle.bind(this)
  }

  /**
   * Gets the elements. To be implemented.
   * @method
   * @returns {void}
   */
  getElems() {
    this.$header = document.querySelector('header')
    this.$hero = document.querySelector('.b-hero')
    this.$heroTitle = document.querySelector('.b-hero__title')
    this.$logo = document.querySelector('.header__logo')
    this.$button = document.querySelector('.header__button')
    console.log(this.$button, this.$logo)


    if (this.$heroTitle) this.heroHeight = this.$hero.clientHeight
  }

  handleHeaderReveal() {
    if (!this.$logo || !this.$button) return

    gsap.registerPlugin(SplitText)

    this.splitLogo = SplitText.create(this.$logo, {
      type: 'lines',
      linesClass: 'line',
      aria: 'auto'
    })

    gsap.set(this.$logo, { opacity: 1 })
    gsap.from(this.splitLogo.lines, {
      yPercent: 100,
      opacity: 0,
      ease: 'sine.out',
      delay: 3
    })

    this.splitButton = SplitText.create(this.$button, {
      type: 'lines',
      linesClass: 'line',
      aria: 'auto'
    })

    gsap.set(this.$button, { opacity: 1 })
    gsap.from(this.splitButton.lines, {
      yPercent: 100,
      opacity: 0,
      ease: 'sine.out',
      delay: 3
    })

    this.splitTitle = SplitText.create(this.$heroTitle, {
      type: 'lines',
      linesClass: 'line',
      aria: 'auto'
    })

    gsap.set(this.$heroTitle, { opacity: 1 })
    gsap.from(this.splitTitle.lines, {
      yPercent: 100,
      opacity: 0,
      ease: 'sine.out',
      delay: 3.5
    })
  }

  /**
   * Adds the event listeners.
   * @method
   * @returns {void}
   */
  addEvents() {
    this.toggler && this.toggler.addEventListener('click', this.toggle)
  }

  /**
   * Toggles the menu open/close state.
   * @method
   * @returns {void}
   */
  toggle() {
    if (this.isAnimating) return

    if (this.menuOpen) this.close()
    else this.open()
  }

  /**
   * Opens the menu.
   * @method
   * @returns {Promise} A promise that resolves when the menu is opened.
   */
  open() {
    return new Promise((resolve) => {
      this.menuOpen = true
      resolve()
    })
  }

  /**
   * Closes the menu.
   * @method
   * @returns {Promise} A promise that resolves when the menu is closed.
   */
  close() {
    return new Promise((resolve) => {
      this.menuOpen = false
      resolve()
    })
  }

  /**
   * Handles the resize event. To be implemented.
   * @method
   * @returns {void}
   */
  resize() { }

  /**
   * Handles the scroll event. To be implemented.
   * @method
   * @returns {void}
   */
  scroll() {
    const scrollY = window.scrollY || window.pageYOffset

    if (scrollY > this.heroHeight / 2) {
      this.$header.classList.add('header--dark')
      if (this.$heroTitle) this.$heroTitle.classList.add('b-hero__title--dark')
    } else {
      this.$header.classList.remove('header--dark')
      if (this.$heroTitle) this.$heroTitle.classList.remove('b-hero__title--dark')
    }
  }

  /**
   * Handles the page change event.
   * @method
   * @param {string} loc - The new location.
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  onPageChange(loc) { }
}
