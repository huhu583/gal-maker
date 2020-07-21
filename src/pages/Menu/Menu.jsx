import React from "react"
import cssObj from "@/pages/Menu/Menu.less"
console.log(cssObj)
class Menu extends React.Component {
    constructor () {
        super();
    }

    render() {
        const menuObj = <div className={cssObj["menu-list"]}>
            <div>开始游戏</div>
            <div>继续游戏</div>
            <div>系统设置</div>
            <div>结束游戏</div>
        </div>
        return menuObj
    }
}

export default Menu