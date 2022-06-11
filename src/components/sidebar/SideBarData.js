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
        path: '/my-team',
        icon: <FaIcons.FaUserAlt />,
        sub: false,
        subMenu: []
    },
    {
        page: 'Ligas',
        path: '/',
        icon: <MdIcons.MdSportsEsports />,
        opened: <RiIcons.RiArrowUpFill />,
        close: <RiIcons.RiArrowDownFill />,
        sub: true,
        subMenu: [
            {
                page: 'League Of Legends',
                path: 'league/1',
                icon: <MdIcons.MdSportsEsports />
            },
            {
                page: 'Valorant',
                path: '/league/2',
                icon: <MdIcons.MdSportsEsports />
            },
            {
                page: 'CS:GO',
                path: 'league/3',
                icon: <MdIcons.MdSportsEsports />
            },
            {
                page: 'Rainbow Six',
                path: 'league/4',
                icon: <MdIcons.MdSportsEsports />
            },
        ]
    },
]