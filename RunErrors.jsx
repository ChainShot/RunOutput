import React, {Component} from 'react';
import ErrorType from './types/ErrorType';

class RunErrors extends Component {
    executionFailure() {
        const {response} = this.props;
        if (!response.flags || !response.flags.executionFailure) return null;
        const {message, stderr} = response;
        let error = (message || stderr) ? (message || stderr) :
            `The server attempted to execute your code but there was an issue with the request. 
            This should be a rare issue. Please try running your code again. 
            If the issue persists, please contact us.`;
        return (
            <div>
                <h2>Server Execution Error:</h2>
                <ErrorType>
                    <pre> {error} </pre>
                </ErrorType>
            </div>
        )
    }

    exitSignal() {
        const {response} = this.props;
        if (!response.exitSignal) return null;
        const message = `Process exited prematurely with a ${response.exitSignal} signal.`;
        return (
            <div>
                <h2>Signal:</h2>
                <ErrorType>
                    {message}
                </ErrorType>
            </div>
        )
    }

    timeout() {
        const {response} = this.props;
        if (!response.flags || !response.flags.timeout) return null;
        return (
            <ErrorType>
                <strong>Why did my code time out?</strong>
                <p>
                    Our servers are configured to only allow a certain amount of time for your code to execute.
                    In rare
                    cases the server may be taking on too much work and simply wasn't able to run your code
                    efficiently enough.
                    Most of the time though this issue is caused by inefficient algorithms. If you see this
                    error
                    multiple times you should try to optimize your code further.
                </p>
            </ErrorType>
        )
    }

    stderr() {
        const {response} = this.props;
        if (!response.stderr) return null;
        return (
            <ErrorType>
                <pre>
                    {response.stderr}
                </pre>
            </ErrorType>
        )
    }

    errorResponse() {
        const {response} = this.props;
        if (!response) return null;
        return (
            <React.Fragment>
                {this.stderr()}
                {this.timeout()}
                {this.exitSignal()}
                {this.executionFailure()}
            </React.Fragment>
        )
    }

    render() {
        return (
            <div className="run-errors">
                {this.errorResponse()}
            </div>
        )
    }
}

export default RunErrors;