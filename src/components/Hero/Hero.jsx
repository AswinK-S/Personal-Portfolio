import './Hero.css'
import reactLogo from '../../../public/assets/images/reactLogo.png'
import profile from '../../../public/assets/images/pro.jpg'
import htmlLogo from '../../../public/assets/images/html.png'
import cssLogo from '../../../public/assets/images/cssLogo.png'
import js from '../../../public/assets/images/js.gif'

const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h2>Building Digital Experiences That Inspire</h2>
                <p>
                    Passionate Web Developer | Transforming Ideas into Seamless and
                    Visually Stunning Web Solutions
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src={reactLogo} alt="" />
                    </div>
                    <img src={profile} alt="" />
                </div>

                <div>
                    <div className="tech-icon">
                        <img src={htmlLogo} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={cssLogo} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={js} alt="" />
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Hero