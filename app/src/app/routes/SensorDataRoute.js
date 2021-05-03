import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SensorData from "./views/SensorData";

class SensorDataRoute extends Component {

    render() {
        return <SensorData {...this.props}  />
    }
}

export default withRouter(SensorDataRoute);
