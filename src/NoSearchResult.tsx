import * as React from 'react';
interface ISearchResult {
    itemGroup: string;
}
export default class NoSearchResult extends React.Component<ISearchResult> {
    constructor(props: ISearchResult) {
        super(props);
    }
    public render() {
        return (
            <div className="container"> No {this.props.itemGroup} found! </div>
        );
    }
}