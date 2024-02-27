import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import 'react-native-gesture-handler';
import Navigation from './Navigation';

import { DefaultTheme, PaperProvider } from 'react-native-paper';
import useTheme from './useTheme';

//
export default function App() {
	const theme = useTheme();
	return (
		<PaperProvider theme={theme}>
			<Navigation />
			{/* <SafeAreaView> */}
			<Text>medo i zeko</Text>
			<StatusBar style='auto' />
			{/* </SafeAreaView> */}
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: '#cbcbcb',
		// alignItems: 'center',
		justifyContent: 'center',
	},
});
