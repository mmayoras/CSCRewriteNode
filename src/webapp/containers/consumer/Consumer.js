import React, {Component} from 'react';
import ConsumerTable from './ConsumerTable';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Consumer extends Component {
  constructor() {
    super();

    // Set state data
    this.state = {
      consumerApplications: [],
      consumerId: -1,
    };
  }

  loadConsumerApplicationsFromServer = () => {
    fetch('/api/consumerApplications').
    then((response) => response.json()).
    then((responseData) => {
      // debugger;
      this.setState({
        consumerApplications: responseData,
        consumerId: responseData.length + 1,
      });
    }).catch((err) => {
      console.info(err);
    });
  };

  // Create new consumerApplication
  createConsumer = (consumerApplication) => {
    console.log(JSON.stringify(consumerApplication));

    fetch('/api/consumerApplications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(consumerApplication),
    }).then(res => {
      this.loadConsumerApplicationsFromServer();
      },
    ).catch(err => console.error(err));
  };

  deleteConsumerApplication = (consumerApplication) => {
    fetch('/api/deleteconsumer/' + consumerApplication.id, {
      method: 'DELETE',
    }).
    then((response) => {
      debugger;
      console.log(response);
      this.loadConsumerApplicationsFromServer();
    })
    .then(() => {
      Alert.success('Consumer Application Deleted', {
        position: 'bottom-left',
        effect: 'slide',
      });
    }).catch((err) => console.info(err));
  };

  componentDidMount = () => {
    this.loadConsumerApplicationsFromServer();
  };

  render() {
    return (
        <div>
          <ConsumerTable createConsumer={this.createConsumer}
                         deleteConsumerApplication={this.deleteConsumerApplication}
                         consumerApplications={this.state.consumerApplications}
                         nextId={this.state.consumerId}
          />
        </div>
    );
  }
}

export default Consumer;
