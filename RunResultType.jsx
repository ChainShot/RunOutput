import React, {Component} from 'react';
import TreeType from './types/TreeType'
import LogType from './types/LogType'
import ResultType from './types/ResultType'
import ErrorType from './types/ErrorType'
import TimeType from './types/TimeType'

const types = {
    'describe': TreeType,
    'it': TreeType,
    'log': LogType,
    'passed': ResultType,
    'failed': ResultType,
    'error': ErrorType,
    'completedin': TimeType
}

class RunResultType extends Component {
    render () {
        const { item } = this.props;
        const { t } = item;
        const Component = types[t];
        return <Component item={item} />
    }
}

export default RunResultType;