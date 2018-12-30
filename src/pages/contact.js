import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
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
