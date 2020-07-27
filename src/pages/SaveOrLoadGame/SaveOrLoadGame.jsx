import React from "react"
import ReactDOM from "react-dom"
import cssObj from "@/pages/SaveOrLoadGame/SaveOrLoadGame.less"
import "@/pages/SaveOrLoadGame/SaveOrLoadGame.less"

class SaveOrLoadData extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        // return <div className={cssObj["game-data-container"]}>
        return <div className="game-data-container">
            <div className={cssObj["game-data-top"]}>
                <div className={cssObj["game-data-page-list"]}>

                </div>
            </div>
            <div className={cssObj["game-data-list"]}>

            </div>
            <div className={cssObj["game-data-bottom"]}>
                <div className={cssObj["game-data-bottom-triangle","game-data-bottom-left"]}>
                    
                </div>
                <div className={cssObj["game-data-bottom-center-line"]}>

                </div>
                <div className={cssObj["game-data-bottom-triangle", "game-data-bottom-right"]}>

                </div>
            </div>
        </div>
    }
}

export default SaveOrLoadData