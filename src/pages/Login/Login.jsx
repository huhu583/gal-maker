import React from "react"

import cssObj from "@/pages/Login/Login.less"
import http from "@/http.js"
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};
const tailLayout = {
    wrapperCol: { offset: 19 },
};

// function Login() {
//     return ();
// }

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            // 判断当前是登录还是注册
            isLogin: true,

            // 登录信息
            loginName: "",
            loginPassword: "",
            loginErrorData: [],

            // 注册信息
            createName: "",
            createPassword: "",
            createRepeatPassword: "",
            createEmail: "",
            createPhone: "",
            // 账号身份(player,designer),默认player
            createUserType: "player",
            createErrorData: []

        }
    }

    // 因为react是单向绑定,需要手动实现onchange
    // input框改变事件
    textChanged = (e, fieldName) => {
        // 任何input框改变时清除所有错误信息
        this.state.loginErrorData = [""]
        this.state.createErrorData = [""]

        let stateObj = this.state
        stateObj[fieldName] = e.target.value
        this.setState(stateObj)
    }

    // 输入密码后点击回车登录
    handleEnterKey = (e) => {
        if (e.nativeEvent.keyCode === 13) {
            this.login()
        }
    }

    // 点击登录按钮事件
    login = () => {
        // 说明请求成功(根据用户身份跳转对应路由)
        this.jumpPage(res)
        // 登录前清空错误信息
        this.state.loginErrorData = []
        http.post("/user/login", {
            name: this.state.loginName,
            password: this.state.loginPassword,
        }).then((res) => {
            if (res.data.errCode == "0") {
                // 说明请求成功(根据用户身份跳转对应路由)
                this.jumpPage(res)
            }
            else {
                // 说明请求失败,用户名或密码不正确
                this.state.loginErrorData.push("用户名或密码不正确")
                let errorList = this.state.loginErrorData
                this.setState({
                    loginErrorData: errorList
                })
            }
        })
    }

    // 点击注册新账号
    create = () => {
        // 注册前清空错误信息
        this.state.createErrorData = []
        var isCheck = true
        // 首先判断有没有输入用户名,密码及邮箱
        if (this.state.createName == "") {
            this.state.createErrorData.push('用户名不能为空')
            isCheck = false
        }
        if (this.state.createEmail == "") {
            this.state.createErrorData.push('邮箱不能为空')
            isCheck = false
        }
        if (this.state.createPassword == "") {
            this.state.createErrorData.push('密码不能为空')
            isCheck = false
        }
        if (this.state.createPhone == "") {
            this.state.createErrorData.push('手机号不能为空')
            isCheck = false
        }
        // 判断密码和重复密码是否相等
        if (this.state.password == this.state.createRepeatPassword) {
            this.state.createErrorData.push('两次输入的密码不一致')
            isCheck = false
        }

        if (isCheck) {
            http.post("/user/create", {
                name: this.state.createName,
                email: this.state.createEmail,
                password: this.state.createPassword,
                phone: this.state.createPhone,
                type: this.state.createUserType,
            }).then((res) => {
                if (res.data.errCode == "0") {
                    // 说明请求成功(根据用户身份跳转对应路由)
                    this.jumpPage(res)
                }
                else {
                    // 说明请求失败
                    this.state.createErrorData.push("用户名已存在")
                    let errorList = this.state.createErrorData
                    this.setState({
                        createErrorData: errorList
                    })
                }
            })
        }
        else {
            this.setState({
                createErrorData: this.state.createErrorData
            })
        }
    }

    // 登录或者注册成功后执行方法
    jumpPage = (res) => {
        this.props.history.push('/Content/DesignerMain', '')
        return
        sessionStorage.setItem("userId", res.data.data.userId)
        sessionStorage.setItem("userType", res.data.data.type)
        if (res.data.data.type == "player") {
            this.props.history.push('/GameList', '')
        }
        else {
            this.props.history.push('/Content/DesignerMain', '')
        }
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

    // 用户身份改变事件
    userTypeChange = (type) => {
        this.setState({
            createUserType: type
        })
    }

    // 组件展示前,需要判断sessionStorage里面有没有用户ID,如果已经有用户ID,说明已经登录过直接跳转
    componentWillMount() {
        if (sessionStorage.userId != undefined) {
            // 跳转到
            if (sessionStorage.userType == "player") {
                this.props.history.push('/GameList', '')
            }
            else {
                this.props.history.push('/Content/DesignerMain', '')
            }
        }
    }

    onFinish = (value)=> {
        // 登录前清空错误信息
        // 说明请求成功(根据用户身份跳转对应路由)
        this.jumpPage()
        return
        this.state.loginErrorData = []
        http.post("/user/login", {
            name: value.username,
            password: value.password,
        }).then((res) => {
            if (res.data.errCode == "0") {
                // 说明请求成功(根据用户身份跳转对应路由)
                this.jumpPage(res)
            }
            else {
                // 说明请求失败,用户名或密码不正确
                this.state.loginErrorData.push("用户名或密码不正确")
                let errorList = this.state.loginErrorData
                this.setState({
                    loginErrorData: errorList
                })
            }
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
                                <Form {...layout} onFinish={this.onFinish}>
                                    <Form.Item
                                        label="用户名"
                                        name="username"
                                        rules={[{ required: true, message: '请输入你的用户名' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="密码"
                                        name="password"
                                        rules={[{ required: true, message: '请输入你的密码' }]}>
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit">
                                            登录
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <div className={cssObj["bottom-area"]}>
                                    <div onClick={() => { this.createChange() }}>注册</div>
                                    <div className={cssObj["split"]}> | </div>
                                    <div>忘记密码</div>
                                </div>
                                {/* <div className={cssObj["label"]}>用户名</div>
                                <div>
                                    <input type="text" value={this.state.loginName} onChange={(e) => { this.textChanged(e, "loginName") }} />
                                </div>
                                <div className={cssObj["label"]}>密码</div>
                                <div>
                                    <input type="password" value={this.state.loginPassword} onKeyPress={(e) => { this.handleEnterKey(e) }} onChange={(e) => { this.textChanged(e, "loginPassword") }} />
                                </div>
                                <div className={cssObj["error-data"]}>
                                    {
                                        this.state.loginErrorData.map((item, index) => {
                                            return <p key={index}>{item}</p>
                                        })
                                    }
                                </div>
                                <div className={cssObj["button-area"]}>
                                    <div></div>
                                    <div className={cssObj["login-button"]} onClick={() => { this.login() }}>
                                        登录
                                    </div>
                                </div>

                                <div className={cssObj["bottom-area"]}>
                                    <div onClick={() => { this.createChange() }}>注册</div>
                                    <div className={cssObj["split"]}> | </div>
                                    <div>忘记密码</div>
                                </div> */}
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
                                <div className={cssObj["user-type-button-area"]}>
                                    <div className={this.state.createUserType == "player" ? cssObj["type-select"] : ""} onClick={() => { this.userTypeChange("player") }}>玩家</div>
                                    <div className={this.state.createUserType == "designer" ? cssObj["type-select"] : ""} onClick={() => { this.userTypeChange("designer") }}>设计者</div>
                                </div>

                                <div className={cssObj["error-data"]}>
                                    {
                                        this.state.createErrorData.map((item, index) => {
                                            return <p key={index}>{item}</p>
                                        })
                                    }
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