import { useEffect } from 'react';
import { Appbar } from 'react-native-paper';

export default function YAppbar({ navigation, options, back }) {
	useEffect(() => {
		console.log({ options, back, navigation });
	}, []);

	return (
		<Appbar.Header>
			{back && (
				<Appbar.BackAction
					onPress={navigation.goBack}
					accessibilityLabel='Back'
				/>
			)}
			<Appbar.Content title={options.title} />
			{/* {showDrawerToggle && ( */}
			<Appbar.Action
				accessibilityLabel='Menu'
				icon='menu'
				onPress={navigation.toggleDrawer}
			/>
			{/* )}{' '} */}
		</Appbar.Header>
	);
}
