import React, { Fragment, useState } from 'react'
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
            <aside>
                <div>
                    {
                        sideBarState ? (<Sidebar sideBarState={sideBarState} />
                        ) : (<div />)
                    }
                </div>
            </aside>
            <main>
                <h1>Content</h1>
            </main>
        </Fragment>
    )
}

export default Layout