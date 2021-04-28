import React, { Component } from "react";
import { CSVReader } from "react-papaparse";
import Table from "./Table";
import { CSSTransition } from "react-transition-group";

const buttonRef = React.createRef();

class App extends Component {
  state = {
    arr: [],
    isNotCorect: false,
    isActive: false,
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

    this.setState((state) => ({ isActive: true }));

    parseData.forEach(({ fullname, phone, email }, index) => {
      !fullname && this.setState({ isNotCorect: true });
      !phone && this.setState({ isNotCorect: true });
      !email && this.setState({ isNotCorect: true });
    });

    this.setState({ arr: parseData });
  };

  handleOnError = (err) => {
    console.log("Err");
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    this.setState({ arr: [], isNotCorect: false, isActive: false });
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
      <CSSTransition in={true} appear={true} timeout={250} classNames="anim">
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

          <CSSTransition
            in={this.state.isActive}
            timeout={250}
            classNames="fade"
            unmountOnExit
          >
            <Table isIncorect={this.state.isNotCorect} data={this.state.arr} />
          </CSSTransition>

          <CSSTransition
            in={!this.state.arr.length}
            timeout={250}
            classNames="h1"
            unmountOnExit
          >
            <h1 className="title">Загрузіть файл 📁 </h1>
          </CSSTransition>
        </div>
      </CSSTransition>
    );
  }
}

export default App;
