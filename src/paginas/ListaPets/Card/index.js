import { Link } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Card({ nome, idade, porte, imagem, caracteristicas, localidade, descricao, navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Sobre', {
                nome: nome,
                imagem: imagem,
                localidade: localidade,
                descricao: descricao,
            })}>
                <Image source={imagem} />
            </TouchableOpacity>
            <View style={styles.containerInformacoes}>
                <Text style={styles.title}>{nome}</Text>

                <View style={styles.informacoes}>
                    <Text style={styles.informacoesTexto}>{idade}</Text>
                    <Text style={styles.informacoesTexto}>{porte}</Text>
                    <Text style={styles.informacoesTexto}>{caracteristicas}</Text>
                </View>

                <View style={styles.informacoes}>
                    <Text style={styles.local}>
                        {localidade}</Text>
                    <View style={styles.containerChat}>
                        <Image source={require('../../../assets/chat.png')} />
                        <Link to={{
                            screen: 'Mensagem', params: {
                                nomePet: nome
                            },
                        }} style={styles.local}>
                            Falar com responsável
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 16,
        paddingHorizontal: 21,
        marginBottom: 16
    },
    title: {
        color: "#3772FF",
        fontWeight: "600",
        lineHeight: 24,
        fontSize: 16,
        marginBottom: 8
    },
    informacoesTexto: {
        color: "#737380",
        lineHeight: 20,
        fontSize: 14,
    },
    informacoes: {
        display: 'flex',
        gap: 6,
        fontFamily: 'PoppinsRegular',
        marginBottom: 16
    },
    local: {
        color: "#737380",
        lineHeight: 16,
        fontSize: 12,
    },
    containerChat: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    }

})
