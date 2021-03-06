import React from "react";
import { connect } from "react-redux";
import styles from "../styles/EventsContainerStyles";
import Events from "../components/Events";
import SortAndFilterContainer from "./SortAndFilterContainer";
import * as actions from "../ducks/events-duck/Actions";
import * as authActions from "../ducks/auth-duck/Actions"
import * as selectors from "../ducks/events-duck/Selectors";
import * as authSelectors from "../ducks/auth-duck/Selectors"
import axios from "axios";
class EventsContainer extends React.Component {
  componentDidMount() {
    // !this.props.eventsList.length && this.props.fetchEvents();
    this.props.fetchEvents();
    this.props.fetchTags();
    this.props.fetchUsers();
    //   axios
    //     .get("http://104.41.217.114:1984/api/v001/events")
    //     .then(response => console.log(response.data));
  }
  click = () => {
    this.props.history.push("/login");
  };
  render() {
    console.log("filtred", this.props.eventsList);
    return (
      <div>
        <SortAndFilterContainer events={this.props.eventsList} />
        <Events events={this.props.eventsList}  users={this.props.users}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // eventsList: selectors.selectEventsList(state),
  // selectFiltredEventsList: selectors.selectFiltredEventsList(state)
  eventsList: selectors.selectFiltredEventsList(state),
    users: authSelectors.selectUsers(state)
});

const mapDispatchToProps = {
  fetchEvents: actions.fetchEventsRequest,
  fetchTags: actions.fetchTagsRequest,
    fetchUsers: authActions.fetchUsersRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsContainer);
