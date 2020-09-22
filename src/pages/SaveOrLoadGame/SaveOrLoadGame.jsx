import React from "react"
import cssObj from "@/pages/SaveOrLoadGame/SaveOrLoadGame.less"
import "@/pages/SaveOrLoadGame/SaveOrLoadGame.less"

function SaveOrLoadData() {
    const page = (<div className="game-data-container">
        <div className={cssObj["game-data-top"]}>
            <div className={cssObj["game-data-page-list"]}>

            </div>
        </div>
        <div className={cssObj["game-data-list"]}>

        </div>
        <div className={cssObj["game-data-bottom"]}>
            <div className={cssObj["game-data-bottom-triangle", "game-data-bottom-left"]}>

            </div>
            <div className={cssObj["game-data-bottom-center-line"]}>

            </div>
            <div className={cssObj["game-data-bottom-triangle", "game-data-bottom-right"]}>

            </div>
        </div>
    </div>);
    return page;
}

export default SaveOrLoadData