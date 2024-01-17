import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import pets from "../../mocks/pets";
import PaginaBase from "../PaginaBase";

export default function ListaPets({ navigation }) {
    return (
        <View style={styles.container}>
            <PaginaBase>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>Olá! Veja os amigos disponíveis para adoção!</Text>
                    <FlatList
                        data={pets}
                        renderItem={({ item }) => <Card {...item}
                            navigation={navigation} />}
                    >
                    </FlatList>
                </View>
            </PaginaBase>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    contentContainer: {
        gap: 32,
        paddingTop: 160,
        zIndex: 1,
    },
    text: {
        color: "#3772FF",
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        fontWeight: '400',
        marginHorizontal: 67
    },
});