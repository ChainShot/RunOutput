import React, {Component} from 'react';
import SVG from 'components/SVG'

class ResultType extends Component {
    renderSVG() {
        const {t} = this.props.item;
        if(t === 'passed') {
            return <SVG name="check" />
        }
        else if(t === 'failed') {
            return <SVG name="fail" />
        }
        return null;
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