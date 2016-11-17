import React from "react";
import {Form, Button, Row, Col, Input, Checkbox, Icon, message} from "antd";

// es6语法, 自定义的函数 changeUsername() 取不到this,这样setState就会报错, 所以要在调用的地方 thi.changeUsername.bind(this)处理
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            status: false
        }
    }
    changeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    submitFun() {
        console.log(this.state.username + this.state.password);
        if(this.state.username == "zhangxuchao" && this.state.password == "heping") {
            sessionStorage.setItem("status", true);
            this.setState({
                status: true
            });
            window.location.href="index.html#/";
            window.location.reload();
        }
        else {
            message.error("用户名和密码不匹配");
        }
    }
    render() {
        return (
            <Row>
                <Col span={10} offset={6}>
                    <br/>
                    <br/>
                    <br/>
                    <Form>
                        <h2>登录</h2>
                        <br/>
                        <p>
                            <Input type="text" name="username" className="username" placeholder="请输入用户名" value={this.state.username} onChange={this.changeUsername.bind(this)} />
                        </p>
                        <br/>
                        <p>
                            <Input type="password" name="password" className="password" placeholder="请输入用户名" value={this.state.password} onChange={this.changePassword.bind(this)} />
                        </p>
                        <br/>
                        <p>
                            <Checkbox name="rememeber" className="remember"/> <a>记住密码</a>
                        </p>
                        <br/>
                        <p>
                            <Button type="primary" name="submit" onClick={this.submitFun.bind(this)}>提交</Button>
                        </p>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Login;
