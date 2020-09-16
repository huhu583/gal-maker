import React, { useState, useEffect} from "react"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import cssObj from "@/pages/DesignerMain/DesignerMain.less"
import { Input } from 'antd'
import http from "@/http.js"
import { PlusOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom"

const { Search } = Input;

function DesignerMain() {
    const history = useHistory();
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        initPage();
    }, []);

    const initPage = () => {
        // 发送请求获取游戏列表
        http.get("/game/getCreateGameList", { userId: sessionStorage.getItem("userId") }).then((res) => {
            if (res.data.errCode == "0") {
                setGameList(res.data.data);
            }
        })
    }

    // 查找游戏列表
    const searchGames = (value) => {
        console.log(value);
    }

    // 编辑游戏页面
    const handleSkipGameEdit = (item) => {
        history.push('/Content/GameEdit', item)
    }

    // 跳转到新建游戏页面
    const skipCreateGamePage = () => {
        history.push('/CreateGame', '')
    }

    return <div className={cssObj["game-designer"]}>

        <div className={[cssObj["game-project-content"], 'area'].join(" ")}>
            <div className={cssObj["game-project-title"]}>
                <div>项目列表</div>
                <div className={"green-button"} style={{ width: "70px" }} onClick={() => { skipCreateGamePage() }} >
                    <PlusOutlined /> 新建
                    </div>
            </div>
            <div className={cssObj["game-project-search"]}>
                <Search
                    placeholder="搜索..."
                    onSearch={(value) => { searchGames(value) }}
                />
            </div>
            <div className={cssObj["game-project-list"]}>
                {gameList.map((item) => {
                    return (
                        <div className={cssObj["game-project-item"]} key={item.gameId} onClick={() => {
                            handleSkipGameEdit(item)
                        }}>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
}

// class DesignerMain extends React.Component {
//     constructor() {
//         super()

//         // 发送请求获取游戏列表
//         // http.get("/game/getCreateGameList", { userId: sessionStorage.getItem("userId") }).then((res) => {
//         //     if (res.data.errCode == "0") {
//         //         this.setState({
//         //             gameList: res.data.data
//         //         })
//         //     }
//         // })

//         this.state = {
//             gameList: [],
//         }
//     }

//     // 查找游戏列表
//     searchGames = (value) => {
//         console.log(value);
//     }

//     // 编辑游戏页面
//     handleSkipGameEdit = (item) => {
//         debugger
//         this.props.history.push('/Content/GameEdit', item)
//     }

//     // 跳转到新建游戏页面
//     skipCreateGamePage = () => {

//         history.push('/Content/GameEdit', "")
//         // this.props.history.push('/CreateGame', '')
//     }

//     render() {
//         return <div className={cssObj["game-designer"]}>
//             {/* 引入通用页面头,类型为设计者 */}
//             {/* <Header /> */}

//             <div className={[cssObj["game-project-content"], 'area'].join(" ")}>
//                 <div className={cssObj["game-project-title"]}>
//                     <div>项目列表</div>
//                     <div className={"green-button"} style={{ width: "70px" }} onClick={() => { this.skipCreateGamePage() }} >
//                         <PlusOutlined /> 新建
//                     </div>
//                 </div>
//                 <div className={cssObj["game-project-search"]}>
//                     <Search
//                         placeholder="搜索..."
//                         onSearch={(value) => { this.searchGames(value) }}
//                     />
//                 </div>
//                 <div className={cssObj["game-project-list"]}>
//                     {this.state.gameList.map((item) => {
//                         // return <div className={cssObj["game-project-item"]} key={item.gameId} onClick={this.handleSkipGameEdit.bind(this, item)}>
//                         //     {item.name}
//                         // </div>

//                         return <div className={cssObj["game-project-item"]} key={item.gameId} onClick={() => {
//                             this.handleSkipGameEdit(item)
//                         }}>
//                             {item.name}
//                         </div>
//                     })}
//                 </div>
//             </div>

//             {/* 引入通用底部栏 */}
//             {/* <Footer /> */}
//         </div>
//     }
// }

export default DesignerMain