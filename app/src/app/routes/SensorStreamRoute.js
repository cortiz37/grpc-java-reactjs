import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SensorStream from "./views/SensorStream";

class SensorDataRoute extends Component {

    render() {
        return <SensorStream {...this.props}  />
    }
}

export default withRouter(SensorDataRoute);
