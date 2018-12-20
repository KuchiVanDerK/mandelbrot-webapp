import React, {Component} from 'react';
import './Clients.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/es/Button/Button";

class Clients extends Component {

    render() {

        function toTime(date) {
            return date.split('T')[1];
        }

        const clients = this.props.clients;

        return (
            <Paper className="Clients">

                <Badge color="primary" badgeContent={clients.length} className="client-badge">
                    <Button className="client-badge-text">Active Clients</Button>
                </Badge>


                <Table className="client-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Cores</TableCell>
                            <TableCell align="right">Timestamp</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients.map(row => {
                            return (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.cores}</TableCell>
                                    <TableCell align="right">{toTime(row.timestamp)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );

        // return (
        //     {/*<div className="Clients">*/}
        //         {/*Connected clients: {clients.length}*/}
        //
        //         {/*<table id="clients-table">*/}
        //             {/*<thead>*/}
        //             {/*<tr>*/}
        //                 {/*<th>Name</th>*/}
        //                 {/*<th>Cores</th>*/}
        //                 {/*<th>Timestamp</th>*/}
        //             {/*</tr>*/}
        //             {/*</thead>*/}
        //             {/*<tbody>*/}
        //             {/*{body}*/}
        //             {/*</tbody>*/}
        //         {/*</table>*/}
        //     {/*</div>*/}
        //
        // );
    }
}

export default Clients;