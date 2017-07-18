import React, {Component} from 'react';
import ConsumerTable from './ConsumerTable';
import ConnectToPinpadStarter from '../ConnectToPinpadStarter';
import fetch from 'isomorphic-fetch'
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Consumer extends Component {
  constructor() {
    super();

    // Set state data
    this.state = {consumerApplications: [], conId: 2};
  }

  loadConsumerApplicationsFromServer = () => {
    fetch('http://localhost:8080/api/consumerApplications').
    then((response) => response.json()).
    then((responseData) => {
      this.setState({
        consumerApplications: responseData._embedded.consumerApplications
      });
    });
  };

  // Create new consumerApplication
  createConsumer = (consumerApplication) => {
    this.setState({
      conId: this.state.conId + 1
    });

    consumerApplication.id = this.state.conId;

    fetch('http://localhost:8080/api/consumerApplications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(consumerApplication)
    }).then(
        res => this.loadConsumerApplicationsFromServer()
    ).catch(err => console.error(err));
  };

  deleteConsumerApplication = (consumerApplication) => {
    if (consumerApplication.id === (this.state.conId - 1)) {
      this.setState({
        conId: this.state.conId - 1
      });
    }

    fetch(consumerApplication._links.self.href,
        {method: 'DELETE',}).then(
        res => this.loadConsumerApplicationsFromServer()
    ).then(() => {
      Alert.success('Consumer Application Deleted', {
        position: 'bottom-left',
        effect: 'slide'
      });
    }).catch(err => console.error(err));
  };

  componentDidMount = () => {
    this.loadConsumerApplicationsFromServer();
  };

  render() {
    return (
        <div>
          <ConsumerTable createConsumer={this.createConsumer}
                         deleteConsumerApplication={this.deleteConsumerApplication}
                         consumerApplications={this.state.consumerApplications}/>
          <ConnectToPinpadStarter/>
        </div>
    );
  }
}

export default Consumer;