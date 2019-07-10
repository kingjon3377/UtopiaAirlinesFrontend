"use strict"

import React from 'react';
import PropTypes from 'prop-types';


export class FlightList extends React.Component {

    createFlightRow(flight) {
        return (
            <tr key={flight.id}>
                <td> {flight.id} </td>
                <td> {flight.departure} </td>
                <td> {flight.departure_date} </td>
                <td> {flight.destination} </td>
                <td> {flight.arrival_date} </td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <h1>Available Flights</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Departure</th>
                            <th>Departure Date/Time</th>
                            <th>Destination</th>
                            <th>Arrival Date/Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.flightList.map(this.createFlightRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

FlightList.propTypes = {
    flightList: PropTypes.array.isRequired
};



