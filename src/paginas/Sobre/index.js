import { View, ScrollView, StyleSheet, Image, Text } from "react-native";
import PaginaBase from "../PaginaBase";
import { Link } from "@react-navigation/native";
export default function Sobre() {

    return (
        <View style={styles.container}>
            <ScrollView>
                <PaginaBase>
                    <View style={styles.contentContainer}>
                        <Image source={require('../../assets/Dunga.png')} style={styles.imagem} />
                        <Text style={styles.text}>Dunga</Text>
                        <Text style={styles.textList}>Macho</Text>
                        <Text style={styles.textList}>Porte pequeno</Text>
                        <Text style={styles.textList}>Calmo e educado</Text>
                        <Text style={styles.textList}>Se dá bem com outros cachorros</Text>
                        <Text style={styles.textList}>Gosta de brincar e passear</Text>
                        <Text style={styles.textList}>Gosta de crianças mais velhas mas se assusta com bebês</Text>
                        <View style={styles.containerContato}>
                            <Text style={styles.local}>
                                Rio de Janeiro (RJ)</Text>
                            <View style={styles.informacoes}>
                                <View style={styles.containerInteracoes}>
                                    <Image source={require('../../assets/chat.png')} />
                                    <Link to={'/'}>
                                        Falar com responsável
                                    </Link>
                                </View>

                                <View style={styles.containerInteracoes}>
                                    <Image source={require('../../assets/share.png')} />
                                    <Link to={'/'}>
                                        Compartilhar
                                    </Link>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.textResumo}>{descricao.resumo}</Text>
                        <Image source={require('../../assets/Dunga1.png')} style={styles.image} />
                        <Image source={require('../../assets/Dunga2.png')} style={styles.image} />
                    </View>


                </PaginaBase>
            </ScrollView>
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    contentContainer: {
        paddingTop: 150,
        marginHorizontal: 40,
        zIndex: 1,
    },
    text: {
        color: "#3772FF",
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imagem: {
        alignSelf: 'center',
    },
    textList: {
        color: '#737380',
        fontSize: 14,
        lineHeight: 20
    },
    containerInteracoes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    informacoes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    local: {
        color: '#737380',
        fontSize: 12,
    },
    containerContato: {
        paddingVertical: 32
    },
    textResumo: {
        color: '#737380',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 24
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 24
    }
});
