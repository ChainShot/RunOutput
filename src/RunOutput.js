import React, {Component} from 'react';
import RunResults from './RunResults';
import RunErrors from './RunErrors';

class RunOutput extends Component {
    render() {
        const {response} = this.props;
        return (
            <div className="run-output">
                <RunResults response={response} />
                <RunErrors response={response} />
            </div>
        )
    }
}

export default RunOutput;
