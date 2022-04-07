import React, { Fragment, useState } from 'react'
import Content from '../content/Content'
import Header from '../header/Header'
import Sidebar from '../sidebar/SideBar'

const Layout = () => {

    const [sideBarState, setSideBarState] = useState(true)

    return (
        <Fragment>
            <header>
                <Header onClickToggle={() => {
                    setSideBarState(!sideBarState)
                }} />
            </header>
            <main>
                <Content/>
            </main>
        </Fragment>
    )
}

export default Layout