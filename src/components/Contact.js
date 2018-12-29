import React from 'react'
import HalfRule from './styles/HalfRule'
import ContactStyles from './styles/ContactStyles'

const Contact = () => (
  <>
    <HalfRule>
      <span>Contact Me</span>
    </HalfRule>
    <ContactStyles>
      <form name="contact" netlify>
        <label>
          Name <input type="text" name="name" placeholder="Your name..." />
        </label>
        <label>
          Email <input type="email" name="email" placeholder="Your email..." />
        </label>
        <label>
          Message{' '}
          <textarea
            name="message"
            placeholder="Hi Bridger, I saw your portfolio and..."
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </ContactStyles>
  </>
)

export default Contact
