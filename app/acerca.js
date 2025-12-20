import React from "react"; 
import { View, Text, StyleSheet } from "react-native"; 

export default function AboutScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Informacion acerca de la pagina</Text>
            <Text style={styles.text}>Inicie sesión para ver la informacion completa!</Text>
        </View>
    )
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
    textAlign: "center", 
    padding: 7,
  }, 
  text: { 
    fontSize: 16, 
    marginBottom: 8, 
    textAlign: "center", 
  }, 
});