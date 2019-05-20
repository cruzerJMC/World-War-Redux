import React, { Component } from "react";

import { Grid, Segment } from "semantic-ui-react";
import WeaponPage from "./WeaponPage";
class HomePage extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Grid columns={2} compact divided>
            <Grid.Row>
              <Grid.Column width={10}>
                <WeaponPage />
              </Grid.Column>
              <Grid.Column width={6}>SPECS</Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default HomePage;
