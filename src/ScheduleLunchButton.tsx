import * as React from 'react';
import { Button } from 'react-bootstrap';
import { pages } from './pages';

interface IScheduleButtonProps {
    onClickScheduleLunchButton: (page: pages) => void;
}

export default class ScheduleLunchButton extends React.Component<IScheduleButtonProps> {
    constructor(props: IScheduleButtonProps) {
        super(props);
    }
    public render() {
        return (
            <div>
                <Button bsStyle={"primary"} onClick={this.handleClick}><i className="fas fa-calendar-alt" /> Schedule Lunch!</Button>
            </div>
        );
    }
    public handleClick = () => {
        this.props.onClickScheduleLunchButton(pages.scheduling);
    }
}