import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Sensors from "./views/Sensors";

class SensorsRoute extends Component {

    render() {
        return <Sensors {...this.props}  />
    }
}

export default withRouter(SensorsRoute);
