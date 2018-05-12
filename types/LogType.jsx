import React, {Component} from 'react';
import MinusSquare from './MinusSquare';
import PlusSquare from './PlusSquare';

class LogType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }
    renderToggle() {
        if(this.state.expanded) {
            return (
                <span onClick={() => this.setState({ expanded: false })}>
                    <MinusSquare />
                </span>
            )
        }
        return (
            <span onClick={() => this.setState({ expanded: true })}>
                <PlusSquare/>
            </span>
        )
    }
    renderLog() {
        const {item} = this.props;
        if(this.state.expanded) {
            return (
                <pre>{ item.v }</pre>
            )
        }
        return null;
    }
    render() {
        const {l} = this.props.item;
        const label = (l && l.length > 0) ? l.slice(1) : 'Log'
        return (
            <div className="result-type result-type--log">
                { this.renderToggle() }
                <label> { label } </label>
                { this.renderLog() }
            </div>
        )
    }
}

export default LogType;