import logoImg from '../assets/logo.png'
import { social, links } from '../constants/data.jsx'

const Navbar = () => {
    return (
        <nav id="main-nav">
            <div className="container">
                <img src={logoImg} alt="NewsGrid" className="logo" />
                <div className="social">
                    {
                        social.map(social => {
                            return (
                                <a key={social.id} href={social.url} target="_blank">
                                    {social.icon}
                                </a>)
                        })
                    }
                </div>
                <ul>
                    {links.map(link => {
                        return (<li key={link.id}>
                            <a className={link.text === 'Home' ? 'current' : ''} href={link.url}>
                                {link.text}
                            </a>
                        </li>)
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar