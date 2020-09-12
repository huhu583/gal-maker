import React from 'react'
import cssObj from '@/pages/ContentContainer/ContentContainer.less'
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import DesignerMain from "@/pages/DesignerMain/DesignerMain"
import GameEdit from "@/pages/GameEdit/GameEdit"

// 创建路由字典
const dictionary = {
    "DesignerMain": DesignerMain,
    "GameEdit": GameEdit
}

function ContentContainer(props) {

    let Content = dictionary[props.match.params[0]];

    return (<div className={cssObj["content-container"]}>
        {/* 引入通用页面头,类型为设计者 */}
        <Header />

        <Content />

        {/* 引入通用底部栏 */}
        <Footer />
    </div>)
}

export default ContentContainer