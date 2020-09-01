import React from 'react'
import cssObj from '@/pages/ContentContainer/ContentContainer.less'
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

class ContentContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className={cssObj["content-container"]}>
            {/* 引入通用页面头,类型为设计者 */}
            <Header />

            <div>
                
            </div>

            {/* 引入通用底部栏 */}
            <Footer />
        </div>
    }
}

export default ContentContainer