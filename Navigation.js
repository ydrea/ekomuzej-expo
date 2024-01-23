import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
export const Alo = () => {
	return (
		<>
			<Text>ALO MEDO</Text>
			<Button mode='contained'>papir</Button>
		</>
	);
};

export const NavigationContents = () => {
	const Drawer = createDrawerNavigator();
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='alo' component={Alo} />
		</Drawer.Navigator>
	);
};

export default function Navigation() {
	// IMPORTANT: NavigationContainer needs to not rerender too often or
	// else Safari and Firefox error on too many history API calls. Put
	// any hooks in NavigationContents so this parent doesn't rerender.
	return (
		<NavigationContainer>
			<NavigationContents />
		</NavigationContainer>
	);
}
