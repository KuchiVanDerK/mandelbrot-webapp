import React, {Component} from 'react';
import './Clients.css';

class Clients extends Component {

    render() {

        function toTime(date){
            return date.split('T')[1];
        }

        const clients = this.props.clients;

        const body = clients.map(client => {
            return <tr key={client.name}>
                <td>{client.name}</td>
                <td>{client.cores}</td>
                <td>{toTime(client.timestamp)}</td>
            </tr>
        });

        return (

            <div className="Clients">
                Connected clients: {clients.length}

                <table id="clients-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cores</th>
                        <th>Timestamp</th>
                    </tr>
                    </thead>
                    <tbody>
                    {body}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Clients;