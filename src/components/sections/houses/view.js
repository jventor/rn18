import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { Actions } from "react-native-router-flux";
import * as api from "../../../api";
import styles from "./styles";

export default class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houselist: []
    };
  }

  componentWillMount() {
    this._fetchHousesList();
  }

  _fetchHousesList() {
    api
      .fetchHouses()
      .then(response => {
        console.log("response", response);
        this.setState({
          houselist: response.data.records
        });
      })
      .catch(
        this.setState({
          houselist: []
        })
      );
  }

  _renderItem({ item }) {
    //console.log("_renderItem item:", item);
    //console.log("_renderItem index:", index);
    return (
      <HouseCell house={item} onHousePress={() => this._onHouseTapped(item)} />
    );
  }

  _onHouseTapped(house) {
    Alert.alert("Casa", house.nombre);
  }

  render() {
    console.log("render: ", this.state.houselist);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.houselist}
          renderItem={value => this._renderItem(value)}
          keyExtractor={(v, i) => "cell" + i}
        />
      </View>
    );
  }
}

class HouseCell extends Component {
  static defaultsProps = {
    house: null,
    onHousePress: () => {}
  };

  render() {
    const { house } = this.props;
    const name = house ? house.nombre : "Sin nombre";
    return (
      <TouchableOpacity
        onPress={() => this.props.onHousePress(house)}
        style={{
          height: 120,
          borderWidth: 1,
          borderColor: "blue",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  }
}
