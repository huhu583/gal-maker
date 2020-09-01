import React from "react"
import cssObj from "@/pages/CreateGame/CreateGame.less"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import http from "@/http.js"
import { Form, Input, Button,Checkbox } from 'antd'

// var form = Form.useForm()

const { TextArea } = Input;

class CreateGame extends React.Component {
    constructor() {
        super()

        // 获取所有的tips类型
        http.get("/game/getAllTips").then((res) => {
            if (res.data.errCode == "0") {
                this.setState({
                    tips: res.data.data[0].tips
                })
            }
        })

        this.state = {
            name: "",
            tips: []
        }
    }

    handleCreateGame = () => {
        // form.commit();
    }

    // form表单提交
    onFinish = (value) => {
        debugger
        // 发送请求,创建游戏,并进入游戏主页面
        http.post("/game/create", {// 游戏名称
            name: value.name,
            // 创建人
            creator: sessionStorage.getItem("userId"),
            // 热度
            hot: 0,
            // 标签（字符串数组）
            tips: value.tips,
            // 介绍
            introduce: value.description,
            // 游戏状态(0：开发中, 1：已发布)
            state: 0
        }).then((res) => {
            if (res.data.errCode == "0") {
                // 
                debugger
            }
            else {
                debugger
            }
        })
    }

    render() {
        return <div className={cssObj["create-game"]}>
            {/* 引入通用页面头,类型为设计者 */}
            <Header />

            <div className={[cssObj["create-game-content"], 'area'].join(" ")}>
                <div className={cssObj["create-game-title"]}>
                    创建一个新的游戏项目
                </div>
                <div className={cssObj["create-game-message"]}>
                    {/*  form={form} */}
                    <Form onFinish={this.onFinish}>

                        <div className={cssObj["create-game-text"]}>
                            游戏名称
                        </div>
                        <div className={cssObj["create-game-input"]}>
                            <Form.Item
                                name="name">
                                <Input placeholder="请输入游戏名称" />
                            </Form.Item>
                        </div>

                        <div className={cssObj["create-game-text"]} >
                            类型标签
                        </div>

                        <div className={cssObj["create-game-input"]}>
                            {/* {this.state.tips.map(item => <div>
                                {item}
                            </div>)} */}
                            <Form.Item
                                name="tips">
                                <Checkbox.Group options={this.state.tips} />
                            </Form.Item>
                            {/* <Form.Item
                                name="description">
                                <TextArea rows={4} placeholder="请输入游戏描述" />
                            </Form.Item> */}
                        </div>

                        <div className={cssObj["create-game-text"]} >
                            游戏描述
                        </div>
                        <div className={cssObj["create-game-input"]}>
                            <Form.Item
                                name="description">
                                <TextArea autoSize={{ minRows: 4, maxRows: 16 }} placeholder="请输入游戏描述" />
                            </Form.Item>
                        </div>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                创建游戏
                            </Button>
                        </Form.Item>
                    </Form>

                </div>
                {/* <div className={cssObj["creaste-game-button"]}>
                    <div className={"green-button"} style={{ width: "90px" }} onClick={this.handleCreateGame}>
                        创建游戏{this.state.name}
                    </div>
                </div> */}
            </div>

            {/* 引入通用底部栏 */}
            <Footer />
        </div>
    }
}

export default CreateGame