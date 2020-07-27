import React from "react"
// import ReactDOM from "react-dom"
import { Link } from "react-router-dom"
import cssObj from "@/pages/Identity/Identity.less"
import GameList from '@/pages/GameList/GameList'

// export default () => {
//     return <div className={cssObj["identity-content"]}>
//         <div className={cssObj["identity-title"]}>
//             <div>欢迎使用galmaker</div>
//             <div>你的身份是？</div>
//         </div>
//         <div className={cssObj["identity-button"]}>
//             <div>玩家</div>
//             <div>设计者</div>
//         </div>
//     </div>;
// }
class Identity extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    // 按钮点击事件
    typeButtonClick = (type) => {
        switch (type) {
            case 1:
                // ReactDOM.render(<GameList></GameList>, document.getElementById("main"));
                break;
            case 2:
                // ReactDOM.render(<GameList></GameList>, document.getElementById("main"));
                break;
            default:
                return;
        }
    }

    render() {
        return <div className={cssObj["identity-content"]}>
            <div className={cssObj["identity-title"]}>
                <div>欢迎使用galmaker</div>
                <div>你的身份是？</div>
            </div>
            <div className={cssObj["identity-button"]}>
                <Link to="/GameList">玩家</Link>
                <div onClick={()=>{this.typeButtonClick(1)}}>
                    玩家
                </div>
                <div onClick={()=>{this.typeButtonClick(2)}}>设计者</div>
            </div>
        </div>;
    }
}

export default Identity