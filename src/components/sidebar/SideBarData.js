import React from "react"
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'

export const SideBarData = [
    {
        page: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        sub: false,
        subMenu: []
    },
    {
        page: 'Perfil',
        path: '',
        icon: <FaIcons.FaPersonBooth />,
        sub: false,
        subMenu: []
    },
    {
        page: 'Ligas',
        path: '/',
        icon: <MdIcons.MdSportsEsports />,
        opened: <RiIcons.RiArrowUpFill />,
        close: <RiIcons.RiArrowDownFill />,
        sub: false,
        subMenu: [
            {
                page: 'League Of Legends',
                path: '/',
                icon: <MdIcons.MdSportsEsports />
            },
            {
                page: 'Valorant',
                path: '/',
                icon: <MdIcons.MdSportsEsports />
            },
            {
                page: 'CS:GO',
                path: '/',
                icon: <MdIcons.MdSportsEsports />
            },
            {
                page: 'Rainbow Six',
                path: '/',
                icon: <MdIcons.MdSportsEsports />
            },
        ]
    },
]