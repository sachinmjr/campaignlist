import moment from "moment";

export const DateFormat = (timestamp) => {
  return moment(timestamp).format("ddd, MMM Do, h:mm a");
}
