import React, {Component} from 'react';
import RunResultType from './RunResultType';

class RunResultItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="run-result-item">
                <RunResultType item={item}></RunResultType>
                <div className="run-result-item__test-results">
                {
                    (item.items || []).map(child => {
                        return <RunResultItem key={child.v || child.l} item={child}></RunResultItem>
                    })
                }
                </div>
            </div>
        )
    }
}

export default RunResultItem;