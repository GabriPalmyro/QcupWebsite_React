import React, { Fragment } from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/SideBar'

const Layout = () => {
    return (
        <Fragment>
            <header> 
                <Header/>
            </header> 
            <aside> 
                <Sidebar/>
            </aside>
            <main>
                <h1>Content</h1>
            </main>
        </Fragment>
    )
}

export default Layout