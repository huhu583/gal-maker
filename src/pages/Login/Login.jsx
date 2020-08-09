import React from "react"
import axios from "axios"

import cssObj from "@/pages/Login/Login.less"

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            // 判断当前是登录还是注册
            isLogin: true,

            // 登录信息
            loginName: "",
            loginPassword: "",

            // 注册信息
            createName: "",
            createPassword: "",
            createReapeatPassword: "",
            createEmail: "",
            createPhone: "",
            // 账号身份(player,designer)
            createUserType: ""
        }
    }

    // 因为react是单向绑定,需要手动实现onchange
    // input框改变事件
    textChanged = (e, fieldName) => {
        var stateObj = this.state
        stateObj[fieldName] = e.target.value
        this.setState(stateObj)
    }

    // 点击登录按钮事件
    login = () => {
        axios.get("https://api.github.com").then((res)=>{
            console.log(res.data)
        })
        axios.get("http://127.0.0.1:5837/huhu").then((res)=>{
            alert(res)
        })
    }

    // 点击注册新账号
    create = () => {

    }

    // 切换到注册
    createChange = () => {
        this.setState({
            isLogin: false
        })
    }

    // 切换到登录
    loginChange = () => {
        this.setState({
            isLogin: true
        })
    }

    render() {
        const LoginObj = <div className={cssObj["main"]}>
            {
                <div className={cssObj["login-content"]}>
                    <div className={cssObj["title-img"]}>
                        galmaker
                    </div>
                    {
                        this.state.isLogin ?
                            <div className={cssObj["data-area"]}>
                                <div className={cssObj["label"]}>用户名</div>
                                <div>
                                    <input type="text" value={this.state.loginName} onChange={(e) => { this.textChanged(e, "loginName") }} />
                                </div>
                                <div className={cssObj["label"]}>密码</div>
                                <div>
                                    <input type="password" value={this.state.loginPassword} onChange={(e) => { this.textChanged(e, "loginPassword") }} />
                                </div>
                                <div className={cssObj["button-area"]}>
                                    <div>记住我的登录信息</div>
                                    <div className={cssObj["login-button"]} onClick={() => { this.login() }}>
                                        登录
                                    </div>
                                </div>

                                <div className={cssObj["bottom-area"]}>
                                    <div onClick={() => { this.createChange() }}>注册</div>
                                    <div className={cssObj["split"]}> | </div>
                                    <div>忘记密码</div>
                                </div>
                            </div>
                            :
                            // 注册页面区域
                            <div className={cssObj["create-area"]}>

                                <div className={cssObj["label"]}>用户名</div>
                                <div>
                                    <input type="text" value={this.state.createName} onChange={(e) => { this.textChanged(e, "createName") }} />
                                </div>
                                <div className={cssObj["label"]}>电子邮件</div>
                                <div>
                                    <input type="text" value={this.state.createEmail} onChange={(e) => { this.textChanged(e, "createEmail") }} />
                                </div>
                                <div className={cssObj["label"]}>手机号</div>
                                <div>
                                    <input type="text " value={this.state.createPhone} onChange={(e) => { this.textChanged(e, "createPhone") }} />
                                </div>
                                <div className={cssObj["label"]}>密码</div>
                                <div>
                                    <input type="password" value={this.state.createPassword} onChange={(e) => { this.textChanged(e, "createPassword") }} />
                                </div>
                                <div className={cssObj["label"]}>重复密码</div>
                                <div>
                                    <input type="password" value={this.state.createRepeatPassword} onChange={(e) => { this.textChanged(e, "createRepeatPassword") }} />
                                </div>
                                <div className={cssObj["label"]}>用户身份</div>
                                <div>
                                    玩家/设计者
                                </div>
                                
                                <div className={cssObj["button-area"]}>
                                    <div></div>
                                    <div className={cssObj["login-button"]} onClick={() => { this.create() }}>
                                        注册
                                    </div>
                                </div>

                                <div className={cssObj["bottom-area"]}>
                                    <div onClick={() => { this.loginChange() }}>登录</div>
                                    <div className={cssObj["split"]}> | </div>
                                    <div>忘记密码</div>
                                </div>
                            </div>
                    }
                </div>
            }
        </div>
        return LoginObj
    }
}

export default Login