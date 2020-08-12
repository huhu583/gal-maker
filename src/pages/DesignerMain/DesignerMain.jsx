import React from "react"
import Header from "@/components/Header/Header"
import cssObj from "@/pages/DesignerMain/DesignerMain.less"

class DesignerMain extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            {/* 引入通用页面头,类型为设计者 */}
            <Header />
        </div>
    }
}

export default DesignerMain