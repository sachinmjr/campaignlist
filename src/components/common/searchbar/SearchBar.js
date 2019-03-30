import React, {Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import {Cancel, Search} from '@material-ui/icons';
import InputBase from "@material-ui/core/InputBase";
import "./SearchBar.scss";

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    renderCrossIcon = () => {
        const { searchKey } = this.props;
        let icon = null;
        if (searchKey !== "") {
            icon = (
                <div className="crossIcon" onClick={this.props.clearSearchQuery}>
                    <Cancel />
                </div>
            );
        } else {
            icon = null;
        }
        return icon;
    }

    render() {
        return (
            <div className="search">
              <div className="searchIcon">
                <Search />
              </div>
              <InputBase
                name="searchKey"
                onChange={this.props.handleSearchChange}
                value={this.props.searchKey}
                placeholder="Search by campaign name"
                className={"inputRoot"}
              />
              {this.renderCrossIcon()}
            </div>
        );
    }
}

export default SearchBar;
