import React from "react"

import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
    {
        page: 'Home',
        path: '/principal',
        icon: <FaIcons.FaHome />,
        sub: false,
        subMenu: []
    },
    {
        page: 'Home',
        path: '/principal',
        icon: <FaIcons.FaHome />,
        sub: false,
        subMenu: []
    },
    {
        page: 'Cadastros',
        path: '#',
        icon: <FaIcons.FaFile />,
        opened: <RiIcons.RiArrowUpFill />,
        close: <RiIcons.RiArrowDownFill />,
        sub: false,
        subMenu: [
            {
                page: 'Usuário',
                path: '/usuario/listar',
                icon: <FaIcons.FaUser />
            },
            {
                page: 'Grupo',
                path: '/grupo/listar',
                icon: <FaIcons.FaLayerGroup />
            },
        ]
    },
]