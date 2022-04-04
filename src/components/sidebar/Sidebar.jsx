import React from "react";
import { SideBarNav, SideBarWrap } from "./styles";
import { SideBarData } from "./SideBarData";
import SubMenu from "./SubMenu";

const SideBar = ({ sideBarState }) => {

    return (
        <>
            sideBarState ?   
                <SideBarNav>
                    <SideBarWrap>
                        {SideBarData.map((item, index) => {
                            return (
                                <SubMenu
                                    key={index}
                                    page={item.page}
                                    path={item.path}
                                    icon={item.icon}
                                    submenu={item.subMenu}
                                    sub={item.sub}
                                    opened={item.opened}
                                    closed={item.close}
                                />
                            )
                        })}
                    </SideBarWrap>
                </SideBarNav>
            : null
        </>
    )
}

export default SideBar