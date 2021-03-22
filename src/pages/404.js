import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Error 404!" />
        <h1>404: Her har nokon beskjært meir enn dei skulle</h1>
        <p>Eventuelt har nokon laga ein sti til ein stad som ikkje finst… enno!</p>
        <p>Sikkert like greitt å gå attende <a href="/">til framsida</a>.</p>
      </Layout>
    )
  }
}

export default NotFoundPage
