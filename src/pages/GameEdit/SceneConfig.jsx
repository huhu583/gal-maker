import React, {useState, useEffect} from "react"
import { Menu } from 'antd';
import cssObj from "@/pages/GameEdit/SceneConfig.less"

function SceneConfig() {

    const [current, setCurrent] = useState("background");

    const handleClick = (e) => {
        setCurrent(e.key);
    };

    // 背景区域组件
    const BackgroundSetting = ()=>{
        if(current == "background") {
            return (
                <div >
                    背景图片设置区域（包括背景图片，背景音乐）
                </div>
            )
        }
        else {
            return null;
        }
    };

    // 人物设置
    
    return (
        <React.Fragment>
            <Menu onClick={(e)=>{handleClick(e)}} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="background">
                    背景设置
                </Menu.Item>
                <Menu.Item key="personSetting">
                    页面设置
                </Menu.Item>
                <Menu.Item key="personSetting">
                    人物设置
                </Menu.Item>
                <Menu.Item key="textSetting">
                    文本设置
                </Menu.Item>
                <Menu.Item key="preview">
                    预览效果
                </Menu.Item>
            </Menu>

            {/* 背景区域设置 */}
            <BackgroundSetting />


        </React.Fragment>
    );
}

export default SceneConfig