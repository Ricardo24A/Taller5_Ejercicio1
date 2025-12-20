import React from "react"; 
import { View, Text, StyleSheet } from "react-native"; 

export default function Ajustes() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ajustes de la aplicacion</Text>
            <Text style={styles.text}>Informacion</Text>
            <Text style={styles.text}>Accesibilidad</Text>
            <Text style={styles.text}>Cerrar sesion</Text>
        </View>
    )
}
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 17, 
  }, 
  title: { 
    fontSize: 26, 
    marginBottom: 6, 
    fontWeight: "bold",
    textAlign: "center", 
    padding: 12,
  }, 
  text: { 
    fontSize: 16, 
    marginBottom: 8, 
    textAlign: "center", 
    padding: 12,
  }, 
});