import React from "react"
import GameDialog from "@/pages/GameMain/GameDialog"
import GameSelect from "@/pages/GameMain/GameSelect"
import cssObj from "@/pages/GameMain/GameMain.less"

class GameMain extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className={cssObj["game-main-container"]}>
            <GameSelect />
            <GameDialog />
        </div>
    }
}

export default GameMain