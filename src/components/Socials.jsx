import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
export default function Socials() {
    return (
        <div class="mt-7 md:mt-30 mb-30 md:mb-0">
            <a href="https://www.linkedin.com/in/harshnoor-singh-00a27b229" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
            <a href="https://github.com/Harshnoor-s" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon"/></a>
            <a href="https://www.instagram.com/harshnoor.singh.31/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
        </div>
    )
}