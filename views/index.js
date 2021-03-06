'use strict'

const h = require('virtual-dom/h')
const home = require('./home')
const about = require('./about')

module.exports = worker => state => {
  let page
  const url = state.url

  if (url === '/') {
    page = home(worker, state)
  } else if (url === '/about') {
    page = about()
  }

  return h('main', [
    h('h1', ['index']),
    h('nav', [
      h('a', {
        attributes: {
          href: '/'
        }
      }, ['home']),
      '|',
      h('a', {
        attributes: {
          href: '/about'
        }
      }, ['about'])
    ]),
    page
  ])
}
