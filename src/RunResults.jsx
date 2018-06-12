import React, {Component} from 'react';
import RunResultItem from './RunResultItem';

class RunResults extends Component {
    hasError() {
        const {response} = this.props;
        if (response) {
            return response.stderr || response.exitSignal || response.message
        }
    }

    showOutput() {
        const {response} = this.props;
        return response && response.result.output && response.result.output.length;
    }

    render() {
        const {response} = this.props;
        if (!this.showOutput()) return null;
        const classes = ["run-results"];
        if (this.hasError()) classes.push('run-results--stderr');
        return (
            <div className={ classes.join(' ') }>
                <div>
                    <div className="run-results__result-items">
                        {
                            response.result.output.map(item => {
                                return <RunResultItem key={item.v || item.l} item={item}></RunResultItem>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default RunResults;