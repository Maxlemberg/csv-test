import React, { Component } from "react";
import { CSVReader } from "react-papaparse";
import "./index.css";
import Table from "./Table";

const buttonRef = React.createRef();

class App extends Component {
  state = {
    arr: [],
    isNotCorect: false,
    duplicateEmail: [],
    // duplicatePhone: [],
  };

  handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  handleOnFileLoad = (data, fileInfo) => {
    if (!fileInfo.name.includes("csv")) {
      this.setState({ isNotCorect: true });
    }

    const parseData = data.map((item) => item.data);

    let dataEmail = [];
    let dataPhone = [];

    this.setState({ duplicateEmail: [], duplicatePhone: [] });

    parseData.forEach(({ fullname, phone, email }, index) => {
      !fullname && this.setState({ isNotCorect: true });
      !phone && this.setState({ isNotCorect: true });
      !email && this.setState({ isNotCorect: true });

      dataEmail.includes(email)
        ? this.setState({
            duplicateEmail: [
              ...this.state.duplicateEmail,
              { email: email, index: index },
            ],
          })
        : dataEmail.push(email);

      dataPhone.includes(phone)
        ? this.setState({
            duplicatePhone: [...this.state.duplicatePhone, index],
          })
        : dataPhone.push(phone);
    });

    this.setState({ arr: parseData });
  };

  handleOnError = (err) => {
    console.log("Err");
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    this.setState({ arr: [], isNotCorect: false });
  };

  handleRemoveFile = (e) => {
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  handleTransform = (value) => {
    return value.trim();
  };

  handleHader = (item) => {
    return item.split(" ").join("").toLowerCase();
  };

  render() {
    return (
      <>
        <div className="container">
          <CSVReader
            ref={buttonRef}
            onFileLoad={this.handleOnFileLoad}
            onError={this.handleOnError}
            noClick
            noDrag
            config={{
              header: true,
              skipEmptyLines: true,
              transform: this.handleTransform,
              transformHeader: this.handleHader,
              dynamicTyping: true,
            }}
            onRemoveFile={this.handleOnRemoveFile}
          >
            {({ file }) => (
              <aside className="aside">
                {file ? (
                  <button className="btnRemove" onClick={this.handleRemoveFile}>
                    Remove {file.name}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={this.handleOpenDialog}
                    className="btn"
                  >
                    Import users 🗄️
                  </button>
                )}
              </aside>
            )}
          </CSVReader>
          {this.state.arr.length ? (
            <Table
              isIncorect={this.state.isNotCorect}
              data={this.state.arr}
              duplicateEmail={this.state.duplicateEmail}
              // duplicatePhone={this.state.duplicatePhone}
            />
          ) : (
            <h1 className="title">Загрузіть файл 📁 </h1>
          )}
        </div>
      </>
    );
  }
}

export default App;
