import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import {Delete, Edit, CheckBoxOutlineBlank, CheckBox} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from "@material-ui/core/TableHead";
import TablePagination from '@material-ui/core/TablePagination';
import {DateFormat} from "../../utility/common";
import "./List.scss";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 700,
  },
});

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 10,
    }
  }

  handleChangePage = (event, newpage) => {
      this.setState({page: newpage});
  }

  handleChangeRowsPerPage = (event) => {
    this.setState({rowsPerPage: event.target.value});
  }

  render() {
    const { classes, details } = this.props;

    return (
      <div className="list-wrapper">
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell align="center"> <span><CheckBoxOutlineBlank /></span> </TableCell>
                    <TableCell align="left">Compaign name</TableCell>
                    <TableCell align="left"> Type </TableCell>
                    <TableCell align="left"> Last Saved </TableCell>
                    <TableCell align="left"> Actions </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                  details.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                  .map((campaign, key) => (
                    <TableRow key={key}>
                        <TableCell align="center"> <span><CheckBoxOutlineBlank /></span>  </TableCell>
                        <TableCell align="left">
                          <div className="name">{campaign.name}</div>
                        </TableCell>
                        <TableCell align="left">{campaign.type}</TableCell>
                        <TableCell align="left"> <div>{DateFormat(parseInt(new Date().getTime()))}</div> </TableCell>
                        <TableCell align="left">
                            <span className="edit-icon" onClick={(e) => this.props.handleEdit(e, campaign._id)}><Edit /></span>
                            <span className="delete-icon" onClick={(e) => this.props.handleDelete(e, campaign._id) }><Delete /></span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={this.props.details.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />

      </div>
    )
  }
}

export default withStyles(styles)(List);
