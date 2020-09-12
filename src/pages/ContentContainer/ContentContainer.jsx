import React from 'react'
import cssObj from '@/pages/ContentContainer/ContentContainer.less'
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import DesignerMain from "@/pages/DesignerMain/DesignerMain"

let Container = null

class ContentContainer extends React.Component {
    constructor(props) {
        super()
        switch (props.match.params[0]) {
            // 匹配路由参数
            case "DesignerMain":
                Container = DesignerMain                
                break
            default: 
                break
        }
    }

    render() {
        return <div className={cssObj["content-container"]}>
            {/* 引入通用页面头,类型为设计者 */}
            <Header />

            <Container />

            {/* 引入通用底部栏 */}
            <Footer />
        </div>
    }
}

export default ContentContainer