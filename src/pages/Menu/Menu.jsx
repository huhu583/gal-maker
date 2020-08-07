import React from "react"
import ReactDOM from "react-dom"
import cssObj from "@/pages/Menu/Menu.less"
import SaveOrloadGame from "@/pages/SaveOrLoadGame/SaveOrLoadGame"

class Menu extends React.Component {
    constructor() {
        super();
    }

    // 点击继续游戏后进入加载存档页面
    entryLoadDataPage = () => {
        // 操作路由跳转到加载存档页面、
         this.props.history.push("/SaveOrLoadGame", "跳转到存档页面");
        // ReactDOM.render(<SaveOrloadGame></SaveOrloadGame>, document.getElementById("main"));
    }

    render() {
        const menuObj = <div className={cssObj["menu-list"]}>
            <div>开始游戏</div>
            <div onClick={()=>{this.entryLoadDataPage()}}>
                继续游戏
            </div>
            <div>
                系统设置
            </div>
            <div>
                结束游戏
            </div>
        </div>
        return menuObj
    }
}

export default Menu