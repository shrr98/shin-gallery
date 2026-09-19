import { Component } from 'react';

class CatAvatar extends Component{
    constructor(props) {
        super(props);

        this.default = `^;;;^\n=o_o=`;
        this.blink = `^;;;^\n=^.^=`;

        this.state = {
            isBlinking: false
        };
    }

    render() {
        const face = this.state.isBlinking ? this.blink : this.default;
        return (
            <div {...this.props} onMouseEnter={() => this.setState({ isBlinking: true })} onMouseLeave={() => this.setState({ isBlinking: false })}>
                <pre>
                    {face}
                </pre>
            </div>
        );
    }
}

export default CatAvatar;