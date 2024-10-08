// Write your code here

import Header from '../Header'

import './index.css'

const About = () => (
  <div>
    <Header />
    <div className="displaying-in-small">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
    </div>
    <div className="displaying-in-large">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </div>
)

export default About
