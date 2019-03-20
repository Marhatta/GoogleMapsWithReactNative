import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Location,Permissions} from 'expo';
import MapView from 'react-native-maps';


export default class App extends React.Component {

	state={
		region:{
			latitude:18.4907,
      		longitude:73.8093,
      		latitudeDelta:0.0922,
      		longitudeDelta:0.0421
		},
		hasLocationPermissions:false,
		location:null
	}

	region = this.state.region;


	onRegionChange=(region)=>{
		this.setState({region})
		console.log(region);
	}

	componentDidMount(){

		this._getLocationAsync();
	}


	_getLocationAsync = async ()=>{
		
		const {status,permissions} = await Permissions.askAsync(Permissions.LOCATION);
			if(status === 'granted'){
				this.setState({hasLocationPermissions:true});
				return await Location.getCurrentPositionAsync({enableHighAccuracy:true})
				
				// this.setState({location});
				// console.log(location);
			} else {
				throw new Error('Location permission not granted');
			}

			
	
	}

  render() {
    return (
    	<View style={styles.container}>
      		<MapView
      		style={{flex:1}}
      		initialRegion={this.state.region}
      		onRegionChange={this.onRegionChange}
      		showsUserLocation
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
