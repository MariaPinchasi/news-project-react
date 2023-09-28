import { siteLinks } from '../constants/data.jsx'
const SiteLinks = () => {
    return (
        <div>
            <h3>Site Links</h3>
            <ul className="list">
                {siteLinks.map(link => {
                    return (
                        <li key={link.id}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SiteLinks