import React from 'react';

const url = 'https://raw.githubusercontent.com/developeranku/dashboard/master/src/data.json';

export class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        fetch(url).then(res => res.json()).then(data => console.log(data)).catch(console.log('Error'));
    }

    render() {
        return (
            <React.Fragment>
                <div className="box">
                    <p>I am table</p>
                </div>
            </React.Fragment>
        )
    }
}

