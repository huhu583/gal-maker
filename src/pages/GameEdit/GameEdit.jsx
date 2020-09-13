import React, { useState, useEffect } from "react"
import cssObj from "@/pages/GameEdit/GameEdit.less"
import { useHistory } from "react-router-dom"
import PersonConfig from "@/pages/GameEdit/PersonConfig"
import SceneConfig from "@/pages/GameEdit/SceneConfig"

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

const dictionary = {
    "sceneConfig": SceneConfig,
    "personConfig": PersonConfig,
    "plotConfig": PersonConfig
}

function GameEdit() {
    const [name, setName] = useState("");

    useEffect(() => {
        setName("中二病神探")
    })

    const [select, setSelect] = useState('sceneConfig');
    const Component = dictionary[select];
    // 发布游戏
    const publish = () => {
        alert(name)
    }

    // 选择功能
    const functionChose = (key, tagCode) => {
        setSelect(key);
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
                    return (
                        <div
                            key={item.tagCode}
                            className={
                                item.tagCode == select ?
                                    [cssObj["function-tag"], cssObj["function-tag-select"]].join(" ") :
                                    cssObj["function-tag"]
                            }
                            onClick={() => { functionChose(item.tagCode, item.tagCode) }}
                        >
                            {item.tagName}
                        </div>)
                })}
            </div>
            <div className={cssObj["edit-content"]}>
                <Component />
            </div>
        </div>
    </div>)
}

export default GameEdit