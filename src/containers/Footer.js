import mail from "../icons/mail.png";
import twitter from "../icons/twitter.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="links">
        <div className='title'>
          <a href='/'>
            <p>pricelee</p>
          </a>
        </div>
          <a href="#">About</a>
          <a href="#">Support</a>
        </div>
        <div className="email">
          <h5>Contact Info</h5>
          <a href="mailto:khadidjaarezki999@gmail.com"><img src={mail} alt=""/>khadidjaarezki999@gmail.com</a>
        </div>
        <div className="copyright">
          <small>Copyright © Pricelee 2022 </small>
        </div>
        <div className="social-media">
          <a href="https://github.com/KhadidjaArezki/"><img src={github} alt="github icon"/></a>
          <a href="www.linkedin.com/in/khadidja-arezki-343b9b199/"><img src={linkedin} alt="linkedin icon"/></a>
          <a href="/"><img src={twitter} alt="twitter icon"/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer