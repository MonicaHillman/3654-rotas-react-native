import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import conversas from "../../mocks/conversas";

export default function Inbox() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/Vector.png')}
                style={styles.backgroundImage}
                imageStyle={{
                    resizeMode: "cover",
                    height: 300, // the image height
                    top: 0,
                    zIndex: 1
                }}
            >
                <Text style={styles.text}>Caixa de mensagens</Text>
                <FlatList
                    data={conversas}
                    renderItem={(conversa) => (
                        <View style={styles.containerText}>
                            <Text style={styles.textMessageTitle}>{conversa.item.nome}</Text>
                            <Text style={styles.textMessage}>{conversa.item.mensagem}</Text>
                        </View>
                    )
                    }
                >
                </FlatList>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    backgroundImage: {
        paddingTop: 170,
        flex: 1,
    },
    containerText: {
        backgroundColor: '#F6F6F6',
        paddingHorizontal: 21,
        paddingVertical: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 16
    },
    textMessageTitle: {
        color: "#3772FF",
    },
    textMessage: {
        color: "black",
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