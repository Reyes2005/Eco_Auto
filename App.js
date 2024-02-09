import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import Button from './components/Button'; 
import ImageViewer from './components/ImageViewer';
import { useState } from 'react';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';

const PlaceholderImage = require("./assets/icon.png");

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.optionsContainer}>
   <Button label="Buscar dispositivos" theme="primary" onPress="findDevices" />
<Button label="Desconectar" theme="primary" onPress="disconnect" />
<Button label="Modos de uso" theme="primary" onPress="useModes" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    top: 20,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
