import React, { Component } from "react";
import { CSVReader } from "react-papaparse";
import "./index.css";
import Table from "./Table";

const buttonRef = React.createRef();

class App extends Component {
  state = {
    arr: [],
    isNotCorect: false,
  };

  handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  handleOnFileLoad = (data, fileInfo) => {
    // console.log("DATA", data);
    if (!fileInfo.name.includes("csv")) {
      this.setState({ isNotCorect: true });
    }
    const parseData = data.map((item) => item.data);
    // console.log("parseData", parseData);

    this.setState({ arr: parseData });
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log("Err");
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log("Delate");
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
    // console.log(new Date());
    // console.log(new Date().toLocaleString());
    return (
      <>
        <div className="container">
          <CSVReader
            ref={buttonRef}
            onFileLoad={this.handleOnFileLoad}
            onError={this.handleOnError}
            noClick
            noDrag
            // progressBarColor=''
            config={{
              header: true,
              skipEmptyLines: true,
              transform: this.handleTransform,
              transformHeader: this.handleHader,
              // chunk: this.handleChanke,
              // step: (results, parser) => {
              // for (const key of results.data) {
              //   key.split(" ").join("").toLowerCase();
              // }
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
                    Import users
                  </button>
                )}
              </aside>
            )}
          </CSVReader>
          {/* {this.state.isNotCorect && <NotCorect/> } */}

          {this.state.arr.length ? (
            <Table isIncorect={this.state.isNotCorect} data={this.state.arr} />
          ) : (
            <h1 className="title">Загрузіть файл</h1>
          )}
        </div>
      </>
    );
  }
}

export default App;
