import React, { useState } from "react";
import { LeagueLabel } from "./styles"


const LeagueLink = ({ label, path }) => {

    return (
        <>
            <LeagueLabel>{label}</LeagueLabel>
        </>
    )
}

export default LeagueLink