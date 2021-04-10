import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={TopMenyQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <menu>
          <li>Heim</li>
          <li>Blogg</li>
          </menu>
        )
      }}
    />
  )
}

export default TopMeny
