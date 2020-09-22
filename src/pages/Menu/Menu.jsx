import React from "react"
import cssObj from "@/pages/Menu/Menu.less"
import { useHistory } from "react-router-dom";

function Menu() {
    const history = useHistory();

    // 点击继续游戏后进入加载存档页面
    const entryLoadDataPage = () => {
        // 操作路由跳转到加载存档页面、
        history.push("/SaveOrLoadGame", "跳转到存档页面");
    }

    const page = (<div className={cssObj["menu-list"]}>
        <div>开始游戏</div>
        <div onClick={() => { entryLoadDataPage() }}>
            继续游戏
        </div>
            <div>
                系统设置
        </div>
            <div>
                结束游戏
        </div>
    </div>);
    return page;
}

export default Menu