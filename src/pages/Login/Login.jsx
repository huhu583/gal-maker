import React, { useEffect, useState } from "react"

import cssObj from "@/pages/Login/Login.less"
import http from "@/common/http.js"
import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom"

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};
const tailLayout = {
    wrapperCol: { offset: 19 },
};

function Login() {

    // 组件展示前,需要判断sessionStorage里面有没有用户ID,如果已经有用户ID,说明已经登录过直接跳转
    useEffect(() => {
        if (sessionStorage.userId != undefined) {
            // 跳转到
            if (sessionStorage.userType == "player") {
                history.push('/GameList', '')
            }
            else {
                history.push('/Content/DesignerMain', '')
            }
        }
    })

    const history = useHistory();

    // 判断当前是登录还是注册
    const [isLogin, setIsLogin] = useState(true);

    const [loginErrorData, setLoginErrorData] = useState([]);

    const [createErrorData, setCreateErrorData] = useState([]);

    const [createUserType, setCreateUserType] = useState("player");
    
    const onFinish = (value) => {
        // 登录前清空错误信息
        // 说明请求成功(根据用户身份跳转对应路由)
        setLoginErrorData([]);
        http.post("/user/login", {
            name: value.username,
            password: value.password,
        }).then((res) => {
            if (res.data.errCode == "0") {
                // 说明请求成功(根据用户身份跳转对应路由)
                jumpPage(res);
            }
            else {
                // 说明请求失败,用户名或密码不正确
                setLoginErrorData([...loginErrorData, "用户名或密码不正确"]);
            }
        })
    }

    // 注册账户
    const createAccount = (value) => {
        // 注册前清空错误信息
        setLoginErrorData([]);
        var isCheck = true
        // 首先判断有没有输入用户名,密码及邮箱
        if (value.createName == "") {
            value.createErrorData.push('用户名不能为空')
            isCheck = false
        }
        if (value.createEmail == "") {
            value.createErrorData.push('邮箱不能为空')
            isCheck = false
        }
        if (value.createPassword == "") {
            value.createErrorData.push('密码不能为空')
            isCheck = false
        }
        if (value.createPhone == "") {
            value.createErrorData.push('手机号不能为空')
            isCheck = false
        }
        // 判断密码和重复密码是否相等
        if (value.password == value.createRepeatPassword) {
            value.createErrorData.push('两次输入的密码不一致')
            isCheck = false
        }

        if (isCheck) {
            http.post("/user/create", {
                name: value.createName,
                email: value.createEmail,
                password: value.createPassword,
                phone: value.createPhone,
                type: value.createUserType,
            }).then((res) => {
                if (res.data.errCode == "0") {
                    // 说明请求成功(根据用户身份跳转对应路由)
                    jumpPage(res)
                }
                else {
                    // 说明请求失败
                    setLoginErrorData([...loginErrorData, "用户名已存在"]);
                }
            })
        }
    }

    // 用户身份改变事件
    const userTypeChange = (type) => {
        setCreateUserType(type);
    }

    // 切换到注册
    const createChange = () => {
        setIsLogin(false);
    }

    // 切换到登录
    const loginChange = () => {
        setIsLogin(true);
    }

    // 登录或者注册成功后执行方法
    const jumpPage = (res) => {
        sessionStorage.setItem("userId", res.data.data.userId)
        sessionStorage.setItem("userType", res.data.data.type)
        if (res.data.data.type == "player") {
            history.push('/GameList', '')
        }
        else {
            history.push('/Content/DesignerMain', '')
        }
    }

    return (<div className={cssObj["main"]}>
        {
            <div className={cssObj["login-content"]}>
                <div className={cssObj["title-img"]}>
                    galmaker
            </div>
                {
                    isLogin ?
                        <div className={cssObj["data-area"]}>
                            <Form {...layout} onFinish={onFinish}>
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

                                {/* 错误信息提示 */}
                                <div className={cssObj["error-data"]}>
                                    {
                                        loginErrorData.map((item, index) => {
                                            return <p key={index}>{item}</p>
                                        })
                                    }
                                </div>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        登录
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div className={cssObj["bottom-area"]}>
                                <div onClick={() => { createChange() }}>注册</div>
                                <div className={cssObj["split"]}> | </div>
                                <div>忘记密码</div>
                            </div>
                        </div>
                        :
                        // 注册页面区域
                        <div className={cssObj["data-area"]}>
                            <Form {...layout} onFinish={createAccount}>
                                <Form.Item
                                    label="用户名"
                                    name="createName"
                                    rules={[{ required: true, message: '请输入你的用户名' }]}
                                >
                                    <Input />
                                </Form.Item>
                                
                                <Form.Item
                                    label="电子邮箱"
                                    name="createEmail"
                                    rules={[{ required: true, message: '请输入你的电子邮箱' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="手机号"
                                    name="createPhone"
                                    rules={[{ required: true, message: '请输入你的电话号码' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="密码"
                                    name="createPassword"
                                    rules={[{ required: true, message: '请输入你的密码' }]}>
                                    <Input.Password />
                                </Form.Item>
                                
                                <Form.Item
                                    label="重复密码"
                                    name="createRepeatPassword"
                                    rules={[{ required: true, message: '重复输入你的密码' }]}>
                                    <Input.Password />
                                </Form.Item>

                                {/* 用户身份选择 */}
                                <div className={cssObj["label"]}>用户身份</div>
                                <div className={cssObj["user-type-button-area"]}>
                                    <div className={createUserType == "player" ? cssObj["type-select"] : ""} onClick={() => { userTypeChange("player") }}>玩家</div>
                                    <div className={createUserType == "designer" ? cssObj["type-select"] : ""} onClick={() => { userTypeChange("designer") }}>设计者</div>
                                </div>

                                {/* 报错信息提示 */}
                                <div className={cssObj["error-data"]}>
                                    {
                                        createErrorData.map((item, index) => {
                                            return <p key={index}>{item}</p>
                                        })
                                    }
                                </div>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        注册
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div className={cssObj["bottom-area"]}>
                                <div onClick={() => { loginChange() }}>登录</div>
                                <div className={cssObj["split"]}> | </div>
                                <div>忘记密码</div>
                            </div>
                        </div>
                }
            </div>
        }
    </div>);
}

export default Login