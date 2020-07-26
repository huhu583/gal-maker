// 网站通用的底部栏（2020-2025）- made by huhu583 - 加入我们 - 捐赠
import React from "react"
import cssObj from "@/components/Bottom/Bottom.less"

class Bottom extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className={cssObj["bottom-container"]}>
                <div>© 2020 - Now  Made By huhu583 | </div>
                <div className={cssObj["bottom-button"]}>About Us</div> |
                <div className={cssObj["bottom-button"]}>Donate</div> |
                <div className={cssObj["bottom-button"]}>Join Us</div>
            </div>
        );
    }
}

export default Bottom