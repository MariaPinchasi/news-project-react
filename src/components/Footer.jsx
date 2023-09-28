import Form from "./Form"
import JoinClub from "./JoinClub"
import logoLight from '../assets/logo_light.png'
import SiteLinks from "./SiteLinks"

const Footer = () => {
    return (
        <footer id="main-footer" className="py-2">
            <div className="container footer-container">
                <div>
                    <img src={logoLight} alt="NewsGrid" />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                        deserunt assumenda enim non? Ratione ipsum voluptates fuga eos earum
                        vitae.
                    </p>
                </div>
                <Form />
                <SiteLinks />
                <JoinClub />

                <div>
                    <p>Copyright © 2019, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer