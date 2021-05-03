import React, {Component} from 'react';
import '../css/App.css';
import 'antd/dist/antd.css'
import {Route, Switch, withRouter} from 'react-router-dom';
import {Layout, Spin} from 'antd';
import MainRoute from "./routes/MainRoute";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import SensorsRoute from "./routes/SensorsRoute";
import SensorDataRoute from "./routes/SensorDataRoute";
import SensorStreamRoute from "./routes/SensorStreamRoute";

const {Content} = Layout;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
        window.app = this;
    }

    render() {
        if (this.state.isLoading) {
            return <div className="main-spin-container"><Spin size="large"/></div>
        }
        return (
            <Layout className="app-container">
                <AppHeader/>
                <Content className="app-content">
                    <div className="container container-main">
                        <AppMenu {...this.props} />
                        <Switch>
                            <Route exact path="/" render={(props) => <MainRoute {...this.state} />}/>
                            <Route path="/sensors" render={(props) => <SensorsRoute {...this.state} />}/>
                            <Route path="/data/:sensorId" render={(props) => <SensorDataRoute
                                sensorId={props.match.params.sensorId} {...this.state} />}
                            />
                            <Route path="/stream/:sensorId" render={(props) => <SensorStreamRoute
                                sensorId={props.match.params.sensorId} {...this.state} />}
                            />
                        </Switch>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default withRouter(App);
