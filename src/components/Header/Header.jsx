// 玩家和设计者通用的标题头
import React from "react"
import cssObj from "@/components/Header/Header.less"

class Header extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return <div className={cssObj["header-container"]}>

        </div>;
    }
}

export default Header