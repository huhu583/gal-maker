import React, { useState, useEffect } from "react"
import cssObj from "@/pages/GameEdit/PersonConfig.less"

function PersonConfig() {
    var testData = [{
        // 人员ID
        id: '123',
        // 人员名称
        name: 'monika',
        // 表情
        expression: [{
            type: 'smile',
            text: '微笑',
            data: 'base64'
        }, {
            type: 'angry',
            text: '生气',
            data: 'base64'
        }, {
            type: 'sad',
            text: '悲伤',
            data: 'base64'
        }]
    }]
    const [personList, setPersonList] = useState([]);

    useEffect(() => {
        setPersonList(testData);
    });

    return (<div className={cssObj["main"]}>
        {
            personList.map((item) => {
                return (<div className={cssObj["person-item"]} key={item.id} >
                    {item.name}
                </div>)
            })
        }

        <div className={cssObj["add-person"]}>
            添加人员
        </div>
    </div>);
}

export default PersonConfig