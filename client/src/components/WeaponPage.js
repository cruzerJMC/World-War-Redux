import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Table
} from "semantic-ui-react";
import { fetchAllTanks } from "../actions/weapons";

class WeaponPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllTanks());
  }

  render() {
    console.log("Weapons Page", this.props);
    return (
      <div>
        {/* <Segment> */}
        <Segment>
          <Table color="grey" inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>PLANES AT WAR</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
          Test
        </Segment>
        <Segment>
          <Table color="green" inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>TANKS AT WAR</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
          Test
        </Segment>
        <Segment>
          <Table color="blue" inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>SHIPS AT WAR</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
          Test
        </Segment>

        {/* </Segment> */}
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   tanks: state.tanks
// });
export default connect(null)(WeaponPage);
