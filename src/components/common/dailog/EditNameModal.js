import React, {Component} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {Cancel} from '@material-ui/icons';

import "./EditNameModal.scss";

class EditNameModal extends Component {
    render() {
        const {openModal, handleModalClose, editDetails, handleNameChange } = this.props;
        return (
            <Dialog
                maxWidth="sm"
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="edit-name-form-dialog-title"
                className="edit-name-modal"
            >
                <DialogTitle
                    id="edit-name-form-dialog-title"
                    className="cc-dialog-title"
                    onClick={handleModalClose}
                >
                    {"Update campaign title"}
                </DialogTitle>
                <DialogContent className="cc-dialog-body">
                    <div className="edit-name-details">
                        <form onSubmit={this.props.updateCampaign} autoComplete="off">
                            <div>
                                <TextField
                                  id="standard-name"
                                  label={null}
                                  className={"name-textField"}
                                  value={editDetails.name}
                                  onChange={(e) => handleNameChange(e, editDetails._id)}
                                  margin="normal"
                                  variant="outlined"
                                  required={true}
                                  placeholder="Enter campaign name"
                                />
                            </div>
                            <div className="action-wrapper">
                                <Button
                                    onClick={handleModalClose}
                                    variant="contained"
                                    className="cancel-button"
                                >
                                    {"Cancel"}
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className="sumbit-button"
                                >
                                    Update
                                </Button>
                            </div>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}

export default EditNameModal;
