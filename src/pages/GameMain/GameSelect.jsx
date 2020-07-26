import React from "react"
import cssObj from "@/pages/GameMain/GameSelect.less"

class GameSelect extends React.Component {
    constructor() {
        super();
        this.state = {
            optionList: [{
                id: "1",
                option: "选项1"
            }, {
                id: "2",
                option: "选项2"
            }, {
                id: "3",
                option: "选项3"
            }]
        };
    }

    render() {
        return <div className={cssObj["game-option-container"]}>
            <div className={cssObj["game-option-list"]}>
                {this.state.optionList.map(item =>
                    <div className={cssObj["game-option-item"]} key={item.id}>{item.option}</div>
                )}
            </div>
        </div>
    }
}

export default GameSelect