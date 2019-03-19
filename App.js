import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {

	state={
		region:{
			latitude:37.78825,
      		longitude:-122.4324,
      		latitudeDelta:0.0922,
      		longitudeDelta:0.0421
		}
	}

	region = this.state.region;


	onRegionChange=(region)=>{
		this.setState({region})
		console.log(region);
	}

  render() {
    return (
    	<View style={styles.container}>
      		<MapView
      		style={{flex:1}}
      		initialRegion={this.state.region}
      		onRegionChange={this.onRegionChange}
      		/>
      	</View>
      	);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
