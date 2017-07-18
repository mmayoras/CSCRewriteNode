import React, { Component } from 'react';
import CommercialTable from './CommercialTable';
import ConnectToPinpadStarter from '../ConnectToPinpadStarter'
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Commercial extends Component {
  constructor() {
    super();

    // Set state data
    this.state = {commercialApplications: [], comId: 2};
  }

  loadCommercialApplicationsFromServer = () => {
    // let endpointUrl = 'http://jsonplaceholder.typicode.com/posts/1';
    let endpointUrl = 'http://localhost:8080/api/commercialApplications';

    fetch(endpointUrl).then(response => response.json()).then(responseData => {
      this.setState({
        commercialApplications: responseData._embedded.commercialApplications
      });
    });
  };

  // Create new commercialApplication
  createCommercial = (commercialApplication) => {
    this.setState({
      comId: this.state.comId + 1
    });

    commercialApplication.id = this.state.comId;

    fetch('http://localhost:8080/api/commercialApplications', {
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
    if (commercialApplication.id === (this.state.comId - 1)) {
      this.setState({
        comId: this.state.comId - 1
      });
    }

    fetch(commercialApplication._links.self.href,
        {method: 'DELETE',}).then(
        res => this.loadCommercialApplicationsFromServer()
    ).then(() => {
      Alert.success('Commercial Application Deleted', {
        position: 'bottom-left',
        effect: 'slide'
      });
    }).catch(err => console.error(err));
  };

  componentDidMount = () => {
    this.loadCommercialApplicationsFromServer();
  };

  render() {
    return (
        <div>
          <CommercialTable createCommercial={this.createCommercial}
                           deleteCommercialApplication={this.deleteCommercialApplication}
                           commercialApplications={this.state.commercialApplications}/>
          <ConnectToPinpadStarter/>
        </div>
    );
  }
}

export default Commercial;