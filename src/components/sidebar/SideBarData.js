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
        path: '/meu-time',
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
                path: 'liga/1',
                icon: <MdIcons.MdSportsEsports />
            },
            {
                page: 'Valorant',
                path: '/liga/2',
                icon: <MdIcons.MdSportsEsports />
            },
            {
                page: 'CS:GO',
                path: 'liga/3',
                icon: <MdIcons.MdSportsEsports />
            },
            {
                page: 'Rainbow Six',
                path: 'liga/4',
                icon: <MdIcons.MdSportsEsports />
            },
        ]
    },
]