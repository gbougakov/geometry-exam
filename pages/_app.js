import '../styles/index.css'

import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import ReactGA from 'react-ga'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }

  componentDidMount() {
    ReactGA.initialize('UA-153094136-1')
    Router.events.on('routeChangeComplete', url => {
      ReactGA.pageview(url)
    })
  }
}
