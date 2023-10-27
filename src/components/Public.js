import { Link } from 'react-router-dom'


const Public = () => {
    const content = (

        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">GreyRock!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in the beautiful city of Trondheim, Greyrock provides unique physical and digital products designed to match <b>exactly what you're looking for.</b></p>
                <address className="public__addr">
                    Greyrock corp.<br />
                    555 Trond Heim<br />
                    Heim City, NO 7030<br />
                    <a href="tel:+5555551337">(555) 555-1337</a>
                </address>
                <br />
                <p>Owner: Farry Link</p>
            </main>
            <footer className='margin_bottom_footer'>
                <Link to="/login" className='bordered-link'>Employee Login</Link>
            </footer>
        </section>


    )
    return content
}

export default Public
