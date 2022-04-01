import React, { Fragment } from 'react'
import Header from '../header/Header'

const Layout = () => {
    return (
        <Fragment>
            <header> 
                <Header/>
            </header> 
            <aside> 
                <h1>Aside</h1>
            </aside>
            <main>
                <h1>Content</h1>
            </main>
        </Fragment>
    )
}

export default Layout