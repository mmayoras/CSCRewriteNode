import React, { Component } from 'react';
import CommercialTable from './CommercialTable';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Commercial extends Component {
  constructor() {
    super();

    // Set state data
    this.state = {
      commercialApplications: [],
      commercialId: -1,
    };
  }

  loadCommercialApplicationsFromServer = () => {
    // debugger;
    fetch('/api/commercialApplications').
    then((response) => response.json()).
    then((responseData) => {
      // debugger;
      this.setState({
        commercialApplications: responseData,
        commercialId: responseData.length + 1,
      });
    }).catch((err) => {
      // debugger;
      console.info(err);
    });
  };

  // Create new commercialApplication
  createCommercial = (commercialApplication) => {
    fetch('/api/commercialApplications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commercialApplication)
    }).then(
        res => this.loadCommercialApplicationsFromServer()
    ).catch(err => console.error(err));
  };

  deleteCommercialApplication = (commercialApplication) => {
    fetch('/api/deletecommercial/' + commercialApplication.id, {
      method: 'DELETE',
    }).
    then((response) => {
      debugger;
      console.log(response);
      this.loadCommercialApplicationsFromServer();
    })
    .then(() => {
      Alert.success('Commercial Application Deleted', {
        position: 'bottom-left',
        effect: 'slide',
      });
    }).catch((err) => console.info(err));
  };

  componentDidMount = () => {
    this.loadCommercialApplicationsFromServer();
  };

  render() {
    return (
        <div>
          <CommercialTable createCommercial={this.createCommercial}
                           deleteCommercialApplication={this.deleteCommercialApplication}
                           commercialApplications={this.state.commercialApplications}
                           nextId={this.state.commercialId}
          />
        </div>
    );
  }
}

export default Commercial;
