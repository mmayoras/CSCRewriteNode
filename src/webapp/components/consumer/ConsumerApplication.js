import React, {Component} from 'react';

class ConsumerApplication extends Component {
  render() {
    const tableData = {
      textAlign: 'center',
    };

    let date = new Date(this.props.consumerApplication.date);;

    return (
        <tr>
          <td style={tableData}>{this.props.consumerApplication.id}</td>
          <td style={tableData}>{this.props.consumerApplication.firstName}</td>
          <td style={tableData}>{this.props.consumerApplication.middleInitial}</td>
          <td style={tableData}>{this.props.consumerApplication.lastName}</td>
          <td style={tableData}>{this.props.consumerApplication.strNumber}</td>
          <td style={tableData}>{date.toDateString()}</td>
          <td style={tableData}>{this.props.consumerApplication.addressLine1}</td>
          <td style={tableData}>{this.props.consumerApplication.addressLine2}</td>
          <td style={tableData}>{this.props.consumerApplication.city}</td>
          <td style={tableData}>{this.props.consumerApplication.state}</td>
          <td style={{
            padding: '0',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: '#CCCCCC',
          }}>
            <button className="button secondary small"
                    onClick={() => this.props.deleteConsumerApplication(
                        this.props.consumerApplication)}>Delete
            </button>
          </td>
        </tr>
    );
  }
}

export default ConsumerApplication;