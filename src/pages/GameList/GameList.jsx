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
                // 最新发布时间
                publishTime: "2020-07-25",
                // 类型
                type: "悬疑、推理"
            },{
                title: "doki doki",
                maker: "huhu583",
                tip: "欧阳岚遇到了令人头疼的诡异吊尸事件，这时，一位中二病美少女突然出现在了他的眼前。于是，一段充满着魔幻的推理故事即将在你的眼前展开。。",
                bgImg: "",
                publishTime: "2020-07-25",
                type: "恋爱、校园"
            },{
                title: "异世界穿越",
                maker: "huhu583",
                tip: "欧阳岚遇到了令人头疼的诡异吊尸事件，这时，一位中二病美少女突然出现在了他的眼前。于是，一段充满着魔幻的推理故事即将在你的眼前展开。。",
                bgImg: "",
                publishTime: "2020-07-25",
                type: "青春、回忆"
            },{
                title: "just flew time",
                maker: "huhu583",
                tip: "欧阳岚遇到了令人头疼的诡异吊尸事件，这时，一位中二病美少女突然出现在了他的眼前。于是，一段充满着魔幻的推理故事即将在你的眼前展开。。",
                bgImg: "",
                publishTime: "2020-07-25",
                type: "悬疑、推理"
            }]
        };
    }

    render() {
        return <div className={cssObj["game-list-container"]}>
            {this.state.gameDataList.map(item => <div className = {cssObj["game-list-item"]}>
                <div className={cssObj["game-list-title"]}>{item.title}</div>
                <div className={cssObj["game-list-tip"]}>
                    <div className={cssObj["game-list-tip-item"]}>
                        {item.publishTime}
                    </div>
                    <div className={cssObj["game-list-tip-item"]}>
                        创作者:{item.maker}
                    </div>
                    <div className={cssObj["game-list-tip-item"]}>
                        {item.type}
                    </div>
                </div>
            </div>)}
        </div>
    }
}

export default GameList