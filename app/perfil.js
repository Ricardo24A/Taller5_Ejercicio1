import React from "react"; 
import { View, Text, StyleSheet } from "react-native"; 
export default function ProfileScreen() { 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.title}>Perfil del cliente</Text> 
      <Text style={styles.text}>Nombre: Ricardo</Text> 
      <Text style={styles.text}>Rol: Estudiante</Text> 
    </View> 
  ); 
} 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 16, 
  }, 
  title: { 
    fontSize: 26, 
    marginBottom: 12,
    fontWeight: "bold",
  }, 
  text: { 
    fontSize: 18, 
    marginBottom: 8, 
  }, 
}); 