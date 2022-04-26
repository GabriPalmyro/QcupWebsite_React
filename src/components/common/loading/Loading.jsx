import React, { useContext } from "react";
import './loading.css';

import { TimeContext } from '../../../contexts/time/TimeContext';
import { LigaContext } from '../../../contexts/liga/LigaContext';

export default function Backdrop(props) {

    const { loading } = useContext(TimeContext);
    const { loadingLiga } = useContext(LigaContext);

    return (
        ( loading || loadingLiga) ? <div className="backdrop">
            <div className="loader"></div>
        </div> : <div></div>
    )
}