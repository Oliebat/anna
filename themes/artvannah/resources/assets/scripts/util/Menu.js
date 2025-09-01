import store from './store'
import { gsap } from 'gsap'

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

    if (!store.isFirstLoaded) this.setPositions()

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
    this.$logo = document.querySelector('.header__logo')
    this.$button = document.querySelector('.header__button')
  }

  /**
   * Adds the event listeners.
   * @method
   * @returns {void}
   */
  addEvents() {
    this.toggler && this.toggler.addEventListener('click', this.toggle)

    if (!store.isFirstLoaded) window.addEventListener('loaderComplete', () => this.handleHeaderReveal())
  }

  setPositions() {
    gsap.set([this.$logo, this.$button], { yPercent: 100 })
  }

   handleHeaderReveal() {
    gsap.to([this.$logo, this.$button], {
      yPercent: 0,
      ease: 'sine.out',
      delay: store.isFirstLoaded ? '0.5' : '0'
    })
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
    if (window.location.href.indexOf('projet') > -1) return

    const scrollY = window.scrollY || window.pageYOffset

    if (scrollY > store.heroHeight / 2) this.$header.classList.add('header--dark')
    else this.$header.classList.remove('header--dark')
  }

  /**
   * Handles the page change event.
   * @method
   * @param {string} loc - The new location.
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  onPageChange(loc) {
    if (store.isFirstLoaded) {
      this.setPositions()
      this.handleHeaderReveal()
    }

    if (loc.indexOf('projet') > -1) this.$header.classList.add('header--dark')
    else this.$header.classList.remove('header--dark')
  }
}
