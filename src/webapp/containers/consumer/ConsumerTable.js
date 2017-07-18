import React, {Component} from 'react';
import ConsumerApplication from '../../components/consumer/ConsumerApplication';
import ConsumerForm from '../../components/consumer/ConsumerForm';

class ConsumerTable extends Component {
  render() {
    const imageStyle = {
      height: '200px',
      width: '300px',
      paddingLeft: '25px',
      paddingRight: '25px',
      paddingTop: '10px',
      paddingBottom: '25px',
    };
    const tableHead = {
      textAlign: 'center',
    };

    let consumerApplications = this.props.consumerApplications.map(
        consumerApplication =>
            <ConsumerApplication key={consumerApplication.id}
                                 consumerApplication={consumerApplication}
                                 deleteConsumerApplication={this.props.deleteConsumerApplication}
            />,
    );

    return (
        <div name="ConsumerApplication">
          <h1 style={{textAlign: 'center', margin: '0'}}>Consumer Accounts</h1>
          <h2 style={{
            textAlign: 'center',
            color: 'grey',
            margin: '0',
            padding: '10px',
          }}>for your home</h2>
          <div style={{display: 'table', width: '100%'}}>
            <div style={{width: '50%', float: 'left'}}>
              <div style={{float: 'right'}}>
                <img src='/images/rpl.gif' alt="consumer card"
                     style={imageStyle}/>
              </div>
            </div>
            <div style={{width: '50%', float: 'right'}}>
              <img src='/images/projectloanNew02APR2014.gif'
                   alt="consumer card" style={imageStyle}/>
            </div>
          </div>
          <ConsumerForm createConsumer={this.props.createConsumer}/>
          <div style={{overflowX: 'auto'}}>
            <table className="standard-table">
              <thead>
              <tr>
                <th style={tableHead}>ID</th>
                <th style={tableHead}>FirstName</th>
                <th style={tableHead}>Middle Initial</th>
                <th style={tableHead}>LastName</th>
                <th style={tableHead}>StoreNumber</th>
                <th style={tableHead}>Date</th>
                <th style={tableHead}>Address Line 1</th>
                <th style={tableHead}>Address Line 2</th>
                <th style={tableHead}>City</th>
                <th style={tableHead}>State</th>
              </tr>
              </thead>
              <tbody>{consumerApplications}</tbody>
            </table>
          </div>
        </div>);
  }
}

export default ConsumerTable;