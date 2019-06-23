import React from "react";
import "./DummyCart.css";

class IncorporationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      size: "",
      shareholders: [{ size: "" }]
    };
  }


  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, size: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleSizeSubmit = evt => {
    const { size, shareholders } = this.state;
    console.log(size)
    console.log(shareholders)
    // alert(`Incorporated: ${size} with ${shareholders.length} shareholders`);
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ size: "" }])
    });
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <div style={{marginTop:'100px',marginBottom:'200px', textAlign:"center"}}>
      {/* <div style={{width:"100px"}}> */}
        <form onSubmit={this.handleSizeSubmit}>
          {/* ... */}
          <h4>Size</h4>

          {this.state.shareholders.map((shareholder, idx) => (
            <div className="shareholder">
              <input
                type="text"
                placeholder={`Add ${idx + 1} size`}
                value={shareholder.size}
                onChange={this.handleShareholderNameChange(idx)}
              />
              <button
                type="button"
                onClick={this.handleRemoveShareholder(idx)}
                className="small"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={this.handleAddShareholder}
            className="small"
          >
            Add Size
          </button>
          <button>Submit Size</button>
        </form>
        </div>
      // </div>
    );
  }
}

export default IncorporationForm