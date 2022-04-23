import React from "react";
import { SideDrawer, SideBarWrap} from './styles';
import { SideBarData } from "../../sidebar/SideBarData";
import SubMenu from "../../sidebar/SubMenu";


export default function Drawer(props) {

    let drawerClasses = 'drawer';

    if(props.show) {
        drawerClasses = 'drawer open';
    }

    return (
        <SideDrawer isOpen={props.show}>
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
        </SideDrawer>
    )
}