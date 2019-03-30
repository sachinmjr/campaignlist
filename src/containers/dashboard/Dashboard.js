import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Email, FormatListBulleted, Add} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

import List from "../../components/campaign/List";
import SearchBar from "../../components/common/searchbar/SearchBar";
import EditNameModal from "../../components/common/dailog/EditNameModal";
import "./Dashboard.scss";
const data = require("../../resources/data.json");

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class Dasboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      searchKey: "",
      openModal: false,
      editDetails: {}
    }
  }

  componentDidMount() {
      this.updateCampaignList();
  }

  updateCampaignList = () => {
      this.setState({list: data});
  }

  handleOpen = () => {
    this.setState({ openNewCreateModal: true });
  };

  handleClose = () => {
    this.setState({
      openNewCreateModal: false
    });
  };

  handleChange = (event) => {

  }

  handleSearchChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    }, () => {
      setTimeout(() => {
          this.updateListBySearch();
      }, 500)
    });
  }

  updateListBySearch = () => {
    let searchText = this.state.searchKey.toLowerCase();

    if (searchText === "") {
      this.setState({list: data});
    } else {
      let filteredRow = data.filter((campaign) => {
        let found = campaign.name.toLowerCase().includes(searchText);
        return found;
      });
      this.setState({list: filteredRow})
    }
  }

  clearSearchQuery = () => {
      this.setState({
          searchKey: "",
      });
  }

  handleDelete = (event, id) => {
    const tempState = {...this.state};
    let indexValue = tempState.list.findIndex((row) => row._id === id);
    tempState.list.splice(indexValue, 1);
    this.setState(tempState);
    alert("Successfully deleted");
  }

  handleEdit = (event, id) => {
    const tempState = {...this.state};
    let indexValue = tempState.list.findIndex((row) => row._id === id);
    tempState.editDetails = tempState.list[indexValue];
    tempState.openModal = true;
    this.setState(tempState);
  }

  handleNameChange = (event, id) => {
    const tempState = {...this.state};
    if (typeof event !== "string") {
        let indexValue = tempState.list.findIndex((row) => row._id === id);
        console.log(indexValue);
        tempState.list[indexValue]["name"] = event.target.value;
    }
    this.setState(tempState);
  }

  updateCampaign  = (event) => {
    event.preventDefault();
    // call API for update
    this.handleModalClose();
  }

  handleModalClose = () => {
    this.setState({openModal: false});
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="dashboard-wrapper">
        <Grid container spacing={24} >
          <Grid item xs={12} className="search-wrapper">
              <SearchBar searchKey={this.state.searchKey} handleSearchChange={this.handleSearchChange} clearSearchQuery={this.clearSearchQuery}/>
          </Grid>
          <Grid item xs={12} className="list-wrapper">
              <List details={this.state.list} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />

              <EditNameModal handleModalClose={this.handleModalClose} openModal={this.state.openModal} editDetails={this.state.editDetails} updateCampaign={this.updateCampaign} handleNameChange={this.handleNameChange}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Dasboard);
