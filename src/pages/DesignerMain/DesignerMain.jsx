import React from "react"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import cssObj from "@/pages/DesignerMain/DesignerMain.less"
import { Input } from 'antd'
import http from "@/http.js"
import { PlusOutlined } from "@ant-design/icons"

const { Search } = Input;

class DesignerMain extends React.Component {
    constructor() {
        super()

        // 发送请求获取游戏列表
        http.get("/game/getCreateGameList", { userId: sessionStorage.getItem("userId") }).then((res) => {
            if (res.data.errCode == "0") {
                this.setState({
                    gameList: res.data.data
                })
            }
        })

        this.state = {
            gameList: [],
        }
    }

    // 查找游戏列表
    searchGames = (value) => {
        console.log(value);
    }

    // 跳转到新建游戏页面
    skipCreateGamePage = () => {
        this.props.history.push('/CreateGame', '')
    }

    render() {
        return <div className={cssObj["game-designer"]}>
            {/* 引入通用页面头,类型为设计者 */}
            <Header />

            <div className={[cssObj["game-project-content"], 'area'].join(" ")}>
                <div className={cssObj["game-project-title"]}>
                    <div>项目列表</div>
                    <div className={"green-button"} style={{ width: "70px" }} onClick={() => { this.skipCreateGamePage() }} >
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
                        <div className={cssObj["game-project-item"]} key={item.gameId}>
                            {item.name}
                        </div>
                    )}
                </div>
            </div>

            {/* 引入通用底部栏 */}
            <Footer />
        </div>
    }
}

export default DesignerMain