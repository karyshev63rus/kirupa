import React, { Component } from 'react';
import axios from 'axios';
import IPAddress from './IPAddress';

// let xhr

class IPAddressContainer extends Component {
    constructor(props) {
        super(props)
        this.state={
            ip_address: '...'
        }
        this.processRequest = this.processRequest.bind(this)
    }

    processRequest () {axios.get('https://ipinfo.io/json')
        .then((response) => {
            this.setState({ip_address: response.city})
        })
        .catch(function (error) {
            console.log(error)
        })
    } 
 
    render () {
        return (
            <IPAddress ip={this.state.ip_address} />
        )
    }
}

export default IPAddressContainer;