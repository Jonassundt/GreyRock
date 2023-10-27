import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const DashFooter = () => {
    const { username, status } = useAuth()

    let displayColor = 'green'
    if (status === 'Manager') {
        displayColor = 'yellow'
    } if (status === 'Admin') {
        displayColor = 'red'
    }

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => {
        navigate('/dash')
    }

    let goHomeButton = null
    if (pathname !== '/dash') {
        goHomeButton = (
            <button className="dash-footer__button icon-button" title="Home" onClick={onGoHomeClicked} >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }

    const content = (
        <footer className="dash-footer">
            {goHomeButton}
            <p>Current User: {username}</p>


            <p>Status: <span style={{ color: displayColor }}>{status}</span></p>
        </footer>)

    return content;

}

export default DashFooter
