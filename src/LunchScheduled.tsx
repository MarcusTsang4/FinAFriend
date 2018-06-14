import * as React from 'react';
import { Button } from 'react-bootstrap';

interface IButtonText {
    buttonStyle: string,
    buttonText: string
}
export default class LunchScheduled extends React.Component<{}, IButtonText> {
    constructor(props: any) {
        super(props);
        this.state = {
            buttonStyle: "primary",
            buttonText: "Schedule Lunch"
        }
    }
    public handleClick = () => {
        this.setState({ buttonStyle: "default", buttonText: "Lunch Scheduled!" })
    }
    public render() {
        return (
            <div>
                <Button bsStyle={this.state.buttonStyle} type={"button"} onClick={this.handleClick}>{this.state.buttonText}</Button>
            </div>
        );
    }
}