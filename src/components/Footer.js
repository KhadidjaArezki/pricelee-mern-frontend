import mail from "../icons/mail.png";
import twitter from "../icons/twitter.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="links">
          <h5><span className='hl'>P</span>ricelee</h5>
          <a href="/about">About</a>
          <a href="/Support">Support</a>
        </div>
        <div className="email">
          <h5>Contact Info</h5>
          <a href="mailto:khadidjaarezki999@gmail.com"><img src={mail} alt=""/>khadidjaarezki999@gmail.com</a>
        </div>
        <div className="copyright">
          <small>Copyright © Pricelee 2022</small>
        </div>
        <div className="social-media">
          <a href="/"><img src={github} alt="github icon"/></a>
          <a href="/"><img src={linkedin} alt="linkedin icon"/></a>
          <a href="/"><img src={twitter} alt="twitter icon"/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer