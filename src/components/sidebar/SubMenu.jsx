import React, { useState } from "react";
import { SideBarLink, SideBarLabel, DropdownLink } from "./styles";

const SubMenu = ({ page, path, icon, submenu, opened, closed }) => {

    const [subMenuState, setsubMenuState] = useState(false)

    return (
        <>
            <SideBarLink to={path} onClick={() => {
                setsubMenuState(!subMenuState)
            }}>
                <div>
                    { icon }
                    <SideBarLabel>{ page }</SideBarLabel>
                </div>
                <div>
                    {
                        submenu && subMenuState
                            ? opened
                            : submenu
                                ? closed : null
                    }
                </div>
            </SideBarLink>
            {
                submenu && subMenuState && (
                    submenu.map((item, index) => {
                        return (
                            <DropdownLink to={item.path} key={index}>
                                {item.icon}
                                <SideBarLabel>{item.page}</SideBarLabel>
                            </DropdownLink>
                        )
                    })
                )
            }
        </>
    )
}

export default SubMenu