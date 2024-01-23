import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
//
export const Medo = () => {
	return (
		<>
			<Text>Alo Medo!</Text>
			<Button mode='outlined'>papir</Button>
		</>
	);
};
//
export const Zeko = () => {
	return (
		<>
			<Text>Alo Zeko!</Text>
			<Button mode='outlined'>aaaaa</Button>
		</>
	);
};

const Drawer = createDrawerNavigator();

export const NavigationContents = () => {
	return (
		<Drawer.Navigator screenOptions={{ headerShown: true }}>
			<Drawer.Screen name='medo' component={Medo} />
			<Drawer.Screen name='zeko' component={Zeko} />
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
