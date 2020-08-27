// 玩家和设计者通用的标题头
import React from "react"
import cssObj from "@/components/Header/Header.less"
import { HomeOutlined, HeartOutlined, UsergroupDeleteOutlined, FileTextOutlined, RetweetOutlined } from "@ant-design/icons"

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            // 这里要区分是设计者的头部还是玩家的头部
            headerType: 'designer',
            // 表示当前选中的哪个页签
            choseTag: 'index'
        }
    }

    render() {
        return <div className={cssObj["header-container"]}>
            {
                this.state.headerType == 'player' ?
                    <div>
                        <div className={[cssObj["tag"], this.state.choseTag == 'index' ? cssObj["chose-tag"] : null].join(' ')}>
                            <HomeOutlined /> 首页
                        </div>
                        <div className={cssObj["tag"]}>
                            <HeartOutlined /> 收藏夹
                        </div>
                        <div className={cssObj["tag"]}>
                            <UsergroupDeleteOutlined /> 团队管理
                        </div>
                        <div className={cssObj["tag"]}>
                            <FileTextOutlined /> 留言板
                        </div>
                        <div className={cssObj["tag"]}>
                            <RetweetOutlined /> 切换身份
                        </div>
                    </div>
                    :
                    // 设计者头部
                    <div className={cssObj["content"]}>
                        <div className={[cssObj["tag"], this.state.choseTag == 'index' ? cssObj["chose-tag"] : null].join(' ')}>
                            <HomeOutlined /> 首页
                        </div>
                        <div className={[cssObj["tag"], this.state.choseTag == 'bookmark' ? cssObj["chose-tag"] : null].join(' ')}>
                            <HeartOutlined /> 收藏夹
                        </div>
                        <div className={[cssObj["tag"], this.state.choseTag == 'teamManage' ? cssObj["chose-tag"] : null].join(' ')}>
                            <UsergroupDeleteOutlined /> 团队管理
                        </div>
                        <div className={[cssObj["tag"], this.state.choseTag == 'questionArea' ? cssObj["chose-tag"] : null].join(' ')}>
                            <FileTextOutlined /> 问答专区
                        </div>
                        <div className={[cssObj["tag"], this.state.choseTag == 'changeUserType' ? cssObj["chose-tag"] : null].join(' ')}>
                            <RetweetOutlined /> 切换身份
                        </div>
                    </div>
            }
            <div></div>
        </div>
    }
}

export default Header