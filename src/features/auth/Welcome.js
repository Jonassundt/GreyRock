import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <div className='centered_container'>
            <section className="welcome">
                <p>{today}</p>
                <h1>Welcome {username} !</h1>
                <p className='some-margin-20px'><Link to="/dash/notes" className='bordered-link'>View Notes</Link></p>

                <p className='some-margin-20px'><Link to="/dash/notes/new" className='bordered-link'>Add New Note</Link></p>

                {(isManager || isAdmin) && <p className='some-margin-20px'><Link to="/dash/users" className='bordered-link'>View User Settings</Link></p>}

                {(isManager || isAdmin) && <p className='some-margin-20px'><Link to="/dash/users/new" className='bordered-link'>Add New User</Link></p>}
            </section>
        </div>
    )
    return content
}

export default Welcome
