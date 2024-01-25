import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import 'react-native-gesture-handler';
import Navigation from './Navigation';

import { DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#b71c1c',
	},
};

//
export default function App() {
	return (
		<PaperProvider theme={theme}>
			<Navigation />
			<SafeAreaView>
				<Text>medo i zeko</Text>
			</SafeAreaView>
			<StatusBar style='auto' />
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#cbcbcb',
		// alignItems: 'center',
		justifyContent: 'center',
	},
});
