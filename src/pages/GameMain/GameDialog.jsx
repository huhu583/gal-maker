import React from "react"
import cssObj from "@/pages/GameMain/GameDialog.less"

class GameMain extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "huhu583"
        };
    }

    render() {
        return <div className={cssObj["game-dialog-container"]}>
            {this.state.text}
        </div>
    }
}

export default GameMain