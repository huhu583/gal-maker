import React from "react"
import Header from "@/components/Header/Header"
import Bottom from "@/components/Bottom/Bottom"
import cssObj from "@/pages/DesignerMain/DesignerMain.less"
import { Input } from 'antd'
import { PlusOutlined } from "@ant-design/icons"

const { Search } = Input;

class DesignerMain extends React.Component {
    constructor() {
        super()

        this.state = {
            gameList: [{
                // 游戏ID
                id: "1",
                // 游戏名称
                name: "galmaker-demo",
                // 发布状态
                isPublish: true,
            }, {
                // 游戏ID
                id: "2",
                // 游戏名称
                name: "二次元神探",
                // 发布状态
                isPublish: false,
            }],
        }


    }

    // 查找游戏列表
    searchGames = (value)=> {
        console.log(value);
    }

    // 跳转到新建游戏页面
    skipCreateGamePage = ()=> {
        this.props.history.push('/CreateGame', '')
    }

    render() {
        return <div className={cssObj["game-designer"]}>
            {/* 引入通用页面头,类型为设计者 */}
            <Header />

            <div className={[cssObj["game-project-content"], 'area'].join(" ")}>
                <div className={cssObj["game-project-title"]}>
                    <div>项目列表</div>
                    <div className={cssObj["game-project-create-button"]} onClick={()=>{this.skipCreateGamePage()}} >
                        <PlusOutlined /> 新建
                    </div>
                </div>
                <div className={cssObj["game-project-search"]}>
                    <Search
                        placeholder="搜索..."
                        onSearch={(value) => { this.searchGames(value) }}
                    />
                </div>
                <div className={cssObj["game-project-list"]}>
                    {this.state.gameList.map(item =>
                        <div className={cssObj["game-project-item"]} key={item.id}>
                            {item.name}
                        </div>
                    )}
                </div>
            </div>

            {/* 引入通用底部栏 */}
            <Bottom />
        </div>
    }
}

export default DesignerMain