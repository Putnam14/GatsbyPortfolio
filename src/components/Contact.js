import React from 'react'
import HalfRule from './styles/HalfRule'
import ContactStyles from './styles/ContactStyles'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '', name: '', subject: '', body: '' }
  }
  handleChange = event => {
    const target = event.target
    const name = target.name
    this.setState({ [name]: target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(e.target)
    fetch('http://mail.bridgerputnam.me', {
      method: 'post',
      headers: new Headers({
        Authorization: 'Basic ' + btoa('bridgerputnam:test'),
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: this.state,
    })
  }
  render() {
    return (
      <div className="wrapper">
        <HalfRule>
          <span>Contact Me</span>
        </HalfRule>
        <ContactStyles>
          <p>
            Don't be afraid to contact me on{' '}
            <a href="https://twitter.com/BridgerPutnam">Twitter</a> or{' '}
            <a href="mailto:hey+portfolio@bridgerputnam.me">email</a>.
          </p>
          <p>Alternatively, you can use the form below.</p>
          <form name="contact" onSubmit={this.handleSubmit}>
            <label>
              Name{' '}
              <input
                type="text"
                name="name"
                placeholder="Your name..."
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Email{' '}
              <input
                type="email"
                name="email"
                placeholder="Your email..."
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Message{' '}
              <textarea
                name="body"
                placeholder="Hi Bridger, I saw your portfolio and..."
                value={this.state.body}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </ContactStyles>
      </div>
    )
  }
}

export default Contact
