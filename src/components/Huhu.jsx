import React from "react"

class Huhu {
    // 类中的构造器
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static info = "huhu是最强的";
}

class Didi extends Huhu {
    constructor(name, age, text) {
        super(name, age);
        this.text = text;
    }
}

// 使用class创建组件
class HuhuComponent extends React.Component {

    constructor() {
        super();

        // 调用super才有this对象
        this.state = {
            isShow: true
        };
    }

    // 在组件内部必须有render函数,作用渲染当前组件对应的虚拟dom
    render() {
        // props中数据都是只读的
        return <div>组件:{this.props.name + "component"}</div>;
    }
}
export default HuhuComponent