import React, {Component} from 'react';

class RunValue extends Component {
    renderToggle() {
        return null;
    }
    render() {
        const { value } = this.props;
        return <span className="run-value">{ value }</span>
    }
}

export default RunValue;