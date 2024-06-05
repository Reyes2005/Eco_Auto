import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { useState } from 'react';

// Importación de componentes personalizados
import Button from './components/Button'; 
import ImageViewer from './components/ImageViewer';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';

// Imagen de marcador de posición
const PlaceholderImage = require("./assets/icon.png");

// Variable de datos
let data;

// Función principal del componente App
export default function App() {
  // Estado para mostrar u ocultar opciones de la app
  const [showAppOptions, setShowAppOptions] = useState(false);

  return (
    <View style={styles.container}>
      {/* Contenedor de la imagen */}
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      
      {/* Fila de botones de opciones */}
      <View style={styles.optionsRow}>
        <Button label="Buscar dispositivos" theme="primary" onPress="findDevices" />
        <Button label="Desconectar" theme="primary" onPress="disconnect" />
        <Button label="Modos de uso" theme="primary" onPress="useModes" />
      </View>
      
      {/* Contenedor de opciones adicionales */}
      <View style={styles.optionsContainer}>
        <Text>{data !== '' ? 'Sin datos' : data}</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos para los componentes
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
