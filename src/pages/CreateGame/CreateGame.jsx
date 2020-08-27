import React from "react"
import cssObj from "@/pages/CreateGame/CreateGame.less"
import Header from "@/components/Header/Header"
import Bottom from "@/components/Bottom/Bottom"

class CreateGame extends React.Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return <div className={cssObj["create-game"]}>
            {/* 引入通用页面头,类型为设计者 */}
            <Header />

            <div className={[cssObj["create-game-content"], 'area'].join(" ")}>
            </div>

            {/* 引入通用底部栏 */}
            <Bottom />
        </div>
    }
}

export default CreateGame