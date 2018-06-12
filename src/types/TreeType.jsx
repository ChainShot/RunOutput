import React, {Component} from 'react';
import RunValue from '../RunValue';
import Clipboard from './Clipboard';
import Flask from './Flask';

class TreeType extends Component {
    renderIcon() {
        const {item} = this.props;
        if(item.t === 'describe') {
            return <Clipboard />
        }
        else if(item.t === 'it') {
            return <Flask />
        }
        return null;
    }
    render() {
        const {item} = this.props;
        const resultName = item.p ? 'passed' : 'failed';
        return (
            <div className={`result-type result-type--tree result-type--${item.t}`}>
                { this.renderIcon() }
                <RunValue className={`result-type__value result-type__value--${resultName}`} value={item.v}></RunValue>
            </div>
        )
    }
}

export default TreeType;