import React from 'react'
import HalfRule from './styles/HalfRule'
import ContactStyles from './styles/ContactStyles'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      subject: '',
      message: '',
      waiting: false,
      response: '',
    }
  }
  handleChange = event => {
    const target = event.target
    const name = target.name
    this.setState({ [name]: target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({ waiting: true })
    const { email, name, subject, message } = this.state
    const body = {
      email,
      name,
      subject,
      body: message,
    }
    fetch('https://mail.bridgerputnam.me/mailer/api/v1.0/mail', {
      method: 'post',
      mode: 'cors',
      headers: new Headers({
        Authorization: 'Basic ' + btoa('bridgerputnam:test'),
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    })
      .then(response => {
        return response.json()
      })
      .then(resJson => {
        this.setState({
          waiting: false,
          success: resJson.success,
          response: resJson.message,
        })
      })
      .catch(() => {
        this.setState({
          waiting: false,
          success: false,
        })
      })
  }
  render() {
    const { name, email, message, response, success, waiting } = this.state
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
                value={name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Email{' '}
              <input
                type="email"
                name="email"
                placeholder="Your email..."
                value={email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Message{' '}
              <textarea
                name="message"
                placeholder="Hi Bridger, I saw your portfolio and..."
                value={message}
                onChange={this.handleChange}
              />
            </label>
            {!waiting && !response && <button type="submit">Send</button>}
            {waiting && <span>Sending email...</span>}
            {success == false && <span>Something went wrong.</span>}
            {response && <span>{response}</span>}
          </form>
        </ContactStyles>
      </div>
    )
  }
}

export default Contact
