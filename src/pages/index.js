import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'

import styles from './styles.module.css'

const products = [
  {
    title: 'Database',
    description: 'A digital representation of Sikh Bani and other Panthic texts with a public logbook of sangat-sourced corrections.',
    link: 'database',
  },
  {
    title: 'Viewer',
    description: 'An online viewer of the Shabad OS Database. Can be used for issuing inaccuracies between source material and digital content.',
    link: 'viewer',
  },
  {
    title: 'Presenter',
    description: 'Desktop app for presenting the Shabad OS Database on projectors, TVs, and live streams.',
    link: 'presenter',
  },
  {
    title: 'Mobile',
    description: 'Android and iOS app for searching, navigating, and presenting the Shabad OS database. Currently a work in progress.',
    link: 'mobile',
  },
  {
    title: 'Gurmukhi Utils',
    description: 'General utilities for working with Gurmukhi text data.',
    link: 'gurmukhi-utils',
  },
  {
    title: 'Theme Tool',
    description: 'Web app that generates Overlays for Shabad OS Presenter',
    link: 'theme-tool',
  },
]

const Product = ( { title, description, link } ) => (
  <div className={clsx( 'col col--12', styles.feature )}>
    <Link to={link} className="product_card">
      <div className="card_content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="svg-icon chevron-rounded-icon" viewBox="0 0 14 25"><path data-v-a76e93d8="" d="M1,24.4a.9.9,0,0,0,.7-.3L13.4,13a1,1,0,0,0,0-1.6L1.7.3A.9.9,0,0,0,1,0,.9.9,0,0,0,0,1a.9.9,0,0,0,.3.7l11,10.5L.3,22.7a.9.9,0,0,0-.3.7A.9.9,0,0,0,1,24.4Z" /></svg>
    </Link>
  </div>
)

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      title="Products"
      description="User guides, quick-reference guides, developer/contributor best practices for ShabadOS"
    >
      <header className={clsx( 'hero hero--primary', styles.heroBanner )}>
        <div className="home container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>

      <main>
        <div className="home container padding-vert--lg">
          <h1>Product Directory</h1>
          <p className="lead">Explore our guides and articles by product.</p>
          <div className="row">
            {products.map( props => <Product key={props.title} {...props} /> ) }
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
