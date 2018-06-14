import * as React from 'react';
interface ISearchResult {
    itemGroup: string;
}
export default class SearchResult extends React.Component<ISearchResult> {
    constructor(props: ISearchResult) {
        super(props)
    }
    public render() {
        return (
            <div className="container"> {this.props.itemGroup} found! </div>
        );
    }
}