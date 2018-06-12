import React, {Component} from 'react';

class ErrorType extends Component {
    render() {
        const { children, item } = this.props;
        const value = children || (item && item.v);
        return (
            <div className="result-type result-type--error">
                <pre>{ value }</pre>
            </div>
        )
    }
}

export default ErrorType;