import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import YDrawer from './comps/YDrawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YAppbar from './comps/YAppbar';
import Map from './maps/Map';
//
// const stackScreenOptions = {
// 	header: props => <YAppbar {...props} />,
// };
//
const MedoStack = createNativeStackNavigator();
const Medo = () => {
	return (
		<MedoStack.Navigator
			// screenOptions={stackScreenOptions}
			screenOptions={{
				header: props => <YAppbar {...props} back={false} />,
			}}
		>
			<MedoStack.Screen
				name='MedoDetail'
				component={MedoDetail}
				options={{ title: 'medo' }}
			/>
		</MedoStack.Navigator>
	);
};
//
const MedoDetail = () => {
	// console.log('fubar');
	return (
		<View>
			<Text>Alo Medo!</Text>
			<Button mode='outlined'>papir</Button>
		</View>
	);
};
//
const ZekoStack = createNativeStackNavigator();
const Zeko = () => {
	return (
		<ZekoStack.Navigator
			// screenOptions={stackScreenOptions}
			screenOptions={{
				header: props => <YAppbar {...props} back={true} />,
			}}
		>
			<ZekoStack.Screen
				name='ZekoDetail'
				component={ZekoDetail}
				options={{ title: 'zeko' }}
			/>
		</ZekoStack.Navigator>
	);
};

//
const ZekoDetail = () => {
	return (
		<View>
			<Text>Alo Zeko!</Text>
			<Button mode='outlined'>aaaaa</Button>
		</View>
	);
};
//

// const MapStack = createNativeStackNavigator();
// const Mapa = () => {
// 	return (
// 		<MapStack.Navigator
// 			// screenOptions={stackScreenOptions}
// 			screenOptions={{
// 				header: props => <YAppbar {...props} back={true} />,
// 			}}
// 		>
// 			<MapStack.Screen
// 				name='MapaDetail'
// 				component={MapDetail}
// 				options={{ title: 'mapa' }}
// 			/>
// 		</MapStack.Navigator>
// 	);
// };

//
// const MapDetail = () => {
// 	return (
// 		<View>
// 			<Map/>
// 		</View>
// 	);
// };

//
const Drawer = createDrawerNavigator();

export const NavigationContents = () => {
	return (
		<Drawer.Navigator
			screenOptions={{ headerShown: false }}
			drawerContent={props => <YDrawer {...props} />}
		>
			<Drawer.Screen name='medo' component={Medo} />
			<Drawer.Screen name='zeko' component={Zeko} />
			{/* <Drawer.Screen name='mapa' component={Mapa} /> */}
		</Drawer.Navigator>
	);
};

export default function Navigation() {
	//put the hooks in NavigationContents so this parent doesn't rerender!
	return (
		<NavigationContainer>
			<NavigationContents />
		</NavigationContainer>
	);
}
