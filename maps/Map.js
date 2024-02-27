import MapView from './ymap'
import { PROVIDER_GOOGLE } from 'react-native-maps'

export default function Map () {
    return (
        <MapView provider={PROVIDER_GOOGLE} />
    )
}