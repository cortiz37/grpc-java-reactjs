import React, {Component} from 'react';
import {Menu} from "antd";
import {HomeOutlined, OrderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

class AppMenu extends Component {

    render() {
        return <div style={{marginBottom: '10px'}}>
            <Menu mode="horizontal" selectedKeys={[this.props.location.pathname]}>
                <Menu.Item key="/" icon={<HomeOutlined/>}>
                    <Link to="/">
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="/sensors" icon={<OrderedListOutlined/>}>
                    <Link to="/sensors">
                        Sensors
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    }
}

export default AppMenu;