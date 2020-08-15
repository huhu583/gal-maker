import React from "react"
import Header from "@/components/Header/Header"
import Bottom from "@/components/Bottom/Bottom"
import cssObj from "@/pages/DesignerMain/DesignerMain.less"

class DesignerMain extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return <div>
            {/* 引入通用页面头,类型为设计者 */}
            <Header />

            <div className={cssObj["game-project-content"]}>
                <div className={cssObj["game-project-title"]}>
                    <div>项目列表</div>
                    <div>新建</div>
                </div>
                <div className={cssObj["game-project-search"]}>
                    {/* 这里搜索框使用antd样式 */}
                </div>

                <div>

                </div>
            </div>

            {/* 引入通用底部栏 */}
            <Bottom />
        </div>
    }
}

export default DesignerMain