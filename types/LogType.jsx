import React, {Component} from 'react';

class LogType extends Component {
    render() {
        const {item} = this.props;
        const {v,l} = item;
        const label = (l && l.length > 0) ? l.slice(1) : 'Log'
        return (
            <React.Fragment>
                <label> { label } </label>
                <pre className="result-type result-type--log">
                    { v }
                </pre>
            </React.Fragment>
        )
    }
}

export default LogType;