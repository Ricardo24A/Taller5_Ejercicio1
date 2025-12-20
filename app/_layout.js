import { Tabs } from 'expo-router'; 
import { Ionicons } from "@expo/vector-icons"; 


export default function Layout(){
    return (
        <Tabs screenOptions={{
            headerTitleAlign: "center",
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor:"gray"
        }}>
            <Tabs.Screen 
            name="index" 
            options={{ title:'Home', tabBarIcon: () => (
                <Ionicons name="home"/>
                )
            }}
            />
            <Tabs.Screen 
            name="perfil" 
            options={{ title:'Perfil',
                tabBarIcon: () => (
                <Ionicons name="person"/>
                )
            }}/>
            <Tabs.Screen name="acerca" options={{ title:'Acerca',
                tabBarIcon: () => (
                <Ionicons name="information-circle"/>
                 )
            }}/>
            <Tabs.Screen name="ajustes" options={{ title:'Ajustes',
                tabBarIcon: () => (
                <Ionicons name="settings-outline"/>
                 )
            }}/>

        </Tabs>
    )
}