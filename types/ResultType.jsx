import React, {Component} from 'react';
import Check from './Check';
import Fail from './Fail';

class ResultType extends Component {
    renderSVG() {
        if(this.props.item.t === 'passed') {
            return <Check />
        }
        return <Fail />
    }
    render() {
        const {item} = this.props;
        const value = item.v.replace(/^[\n ]*/, "").trim();
        return (
            <div className={`result-type result-type--${item.t} ${item.t}`}>
                { this.renderSVG() }
                <span className={`result-type__value ${item.t}`}>{ value }</span>
            </div>

        )
    }
}

export default ResultType;
