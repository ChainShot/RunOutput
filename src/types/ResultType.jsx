import React, {Component} from 'react';

class ResultType extends Component {
    render() {
        const {item} = this.props;
        const value = item.v.replace(/^[\n ]*/, "").trim();
        return (
            <div className={`result-type result-type--${item.t} ${item.t}`}>
                <span className={`result-type__value ${item.t}`}>{ value }</span>
            </div>

        )
    }
}

export default ResultType;
