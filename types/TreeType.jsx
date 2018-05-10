import React, {Component} from 'react';
import RunValue from '../RunValue';

class TreeType extends Component {
    renderToggle() {
        return null;
    }
    render() {
        const {item} = this.props;
        const resultName = item.p ? 'passed' : 'failed';
        return (
            <div class="result-type result-type--tree" className={`result-type--${item.t}`}>
                { this.renderToggle() }
                <RunValue className={`result-type__value result-type__value--${resultName}`} value={item.v}></RunValue>
            </div>
        )
    }
}

export default TreeType;