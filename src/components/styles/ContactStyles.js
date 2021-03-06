import styled from 'styled-components'

const ContactStyles = styled.div`
  display: grid;
  justify-content: center;
  a {
    text-decoration: none;
  }
  form {
    display: grid;
    justify-content: center;
    margin-bottom: 2em;
  }
  label {
    margin-bottom: 1rem;
  }
  @media (max-width: 739px) {
    label {
      width: 100%;
    }
  }
  @media (min-width: 740px) {
    textarea,
    input {
      width: 350px;
    }
  }
  textarea {
    height: 150px;
    resize: none;
  }
  input,
  textarea {
    padding: 0.5rem;
    display: block;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.gray};
    background-color: ${props => props.theme.cardBg};
    :required {
      box-shadow: none;
    }
  }
  button {
    justify-self: center;
    cursor: pointer;
    border: 0;
    background-color: ${props => props.theme.base};
    color: ${props => props.theme.white};
    font-size: 1rem;
    border-radius: 4px;
    box-shadow: ${props => props.theme.bs};
    height: 3rem;
    width: 50%;
  }
  .required {
    color: maroon;
  }
`

export default ContactStyles
