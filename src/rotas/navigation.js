import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../paginas/Home';
import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListaPets from '../paginas/ListaPets';
import Mensagem from '../paginas/Mensagem'
import { Image } from "react-native";
import Sobre from '../paginas/Sobre';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name="Lista de Pets" component={ListaPets}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/pets-green.png')} style={{ width: 24, height: 24 }} />
                    )
                }} />
            <Tab.Screen name="Mensagem" component={Mensagem}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/mensagens.png')} style={{ width: 24, height: 24 }} />
                    )
                }} />
        </Tab.Navigator>
    );

}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerTitle: '',
                    headerShown: false
                }}>
                <Stack.Screen name='Home'
                    component={Home} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Cadastro' component={Cadastro} />
                <Stack.Screen name='Tab' component={TabRoutes} />
                <Stack.Screen name='Sobre' component={Sobre} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}