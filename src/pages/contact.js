import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Contact from '../components/Contact'

class ContactIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet title="Contact me" />
        <Contact />
      </Layout>
    )
  }
}

export default ContactIndex
