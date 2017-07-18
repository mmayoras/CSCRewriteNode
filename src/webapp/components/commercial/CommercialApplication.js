import React, {Component} from 'react';

class CommercialApplication extends Component {
  render() {
    const tableData = {
      textAlign: 'center',
    };

    let date = new Date(this.props.commercialApplication.date);

    return (
        <tr>
          <td style={tableData}>{this.props.commercialApplication.id}</td>
          <td style={tableData}>{this.props.commercialApplication.firstName}</td>
          <td style={tableData}>{this.props.commercialApplication.middleInitial}</td>
          <td style={tableData}>{this.props.commercialApplication.lastName}</td>
          <td style={tableData}>{this.props.commercialApplication.strNumber}</td>
          <td style={tableData}>{date.toDateString()}</td>
          <td style={tableData}>{this.props.commercialApplication.addressLine1}</td>
          <td style={tableData}>{this.props.commercialApplication.addressLine2}</td>
          <td style={tableData}>{this.props.commercialApplication.city}</td>
          <td style={tableData}>{this.props.commercialApplication.state}</td>
          <td style={{
            padding: '0',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: '#CCCCCC',
          }}>
            <button className="button secondary small"
                    onClick={() => this.props.deleteCommercialApplication(
                        this.props.commercialApplication)}>Delete
            </button>
          </td>
        </tr>
    );
  }
}

export default CommercialApplication;