import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import 'react-native-gesture-handler';
import Navigation from './Navigation';

export default function App() {
	return (
		<View style={styles.container}>
			<Navigation />
			<SafeAreaView>
				<Text>medo i zeko</Text>
			</SafeAreaView>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6babab',
		// alignItems: 'center',
		justifyContent: 'center',
	},
});
