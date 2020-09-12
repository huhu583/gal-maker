import React, { useState, useEffect } from "react"
import cssObj from "@/pages/GameEdit/GameEdit.less"
import { useHistory } from "react-router-dom"


const functionList = [{
    tagCode: "sceneConfig",
    tagName: "场景配置"
}, {
    tagCode: "personConfig",
    tagName: "人物配置"
}, {
    tagCode: "plotConfig",
    tagName: "剧情配置"
}];

function GameEdit() {
    const [name, setName] = useState("");

    useEffect(() => {
        setName("中二病神探")
    })

    const [selectIndex, setSelectIndex] = useState(0);

    // 发布游戏
    const publish = () => {
        alert(name)
    }

    // 选择功能
    const functionChose = (index) => {
        setSelectIndex(index);
    }

    return (<div className={cssObj["main"]}>
        <div className={cssObj["title"]}>
            <div className={cssObj["text"]}>
                {name}
            </div>
            <div className={cssObj["publish"]} onClick={publish}>
                发布
            </div>
        </div>
        <div className={cssObj["edit-area"]}>
            <div className={cssObj["function-chose"]}>
                {functionList.map((item, index) => {
                    return (<div key={item.tagCode} className={index == selectIndex? [cssObj["function-tag"], cssObj["function-tag-select"]].join(" ") : cssObj["function-tag"]} onClick={() => { functionChose(index) }}>
                        {item.tagName}
                    </div>)
                })}
            </div>
            <div className={cssObj["edit-content"]}>
                
            </div>
        </div>
    </div>)
}

export default GameEdit