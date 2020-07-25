import React from "react"
import cssObj from "@/pages/GameList/GameList.less"

class GameList extends React.Component {
    constructor() {
        super();
        this.state = {
            // 游戏列表
            gameDataList: [{
                // 游戏名称
                title: "中二病神探",
                // 制作者
                maker: "huhu583",
                // 简介
                tip: "欧阳岚遇到了令人头疼的诡异吊尸事件，这时，一位中二病美少女突然出现在了他的眼前。于是，一段充满着魔幻的推理故事即将在你的眼前展开。。",
                // 封面图片
                bgImg: "",
            },{
                // 游戏名称
                title: "中二病神探",
                // 制作者
                maker: "huhu583",
                // 简介
                tip: "欧阳岚遇到了令人头疼的诡异吊尸事件，这时，一位中二病美少女突然出现在了他的眼前。于是，一段充满着魔幻的推理故事即将在你的眼前展开。。",
                // 封面图片
                bgImg: "",
            },{
                // 游戏名称
                title: "中二病神探",
                // 制作者
                maker: "huhu583",
                // 简介
                tip: "欧阳岚遇到了令人头疼的诡异吊尸事件，这时，一位中二病美少女突然出现在了他的眼前。于是，一段充满着魔幻的推理故事即将在你的眼前展开。。",
                // 封面图片
                bgImg: "",
            },{
                // 游戏名称
                title: "中二病神探",
                // 制作者
                maker: "huhu583",
                // 简介
                tip: "欧阳岚遇到了令人头疼的诡异吊尸事件，这时，一位中二病美少女突然出现在了他的眼前。于是，一段充满着魔幻的推理故事即将在你的眼前展开。。",
                // 封面图片
                bgImg: "",
            }]
        };
    }

    render() {
        return <div className={cssObj["game-list-container"]}>
            {this.state.gameDataList.map(item => <div className = {cssObj["game-list-item"]}>
                {item.title}
            </div>)}
        </div>
    }
}

export default GameList