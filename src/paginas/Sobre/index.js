import { View, ScrollView, StyleSheet, Image, FlatList, Text } from "react-native";
import PaginaBase from "../PaginaBase";
import { Link, useRoute } from "@react-navigation/native";
import uuid from 'react-native-uuid';
export default function Sobre({ navigation }) {
    const route = useRoute();
    const { nome, imagem, descricao, localidade } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView>
                <PaginaBase>
                    <View style={styles.contentContainer}>
                        <Image source={imagem} style={styles.imagem} />
                        <Text style={styles.text}>{nome}</Text>

                        {
                            descricao.informacoes.map((item) => <Text style={styles.textList} key={uuid.v4()}>{item}</Text>)
                        }

                        <View style={styles.containerContato}>
                            <Text style={styles.local}>
                                {localidade}</Text>
                            <View style={styles.informacoes}>
                                <View style={styles.containerInteracoes}>
                                    <Image source={require('../../assets/chat.png')} />
                                    <Link to={{
                                        screen: 'Mensagem', params: {
                                            nomePet: nome
                                        },
                                    }} style={styles.local}>
                                        Falar com responsável
                                    </Link>
                                </View>

                                <View style={styles.containerInteracoes}>
                                    <Image source={require('../../assets/share.png')} />
                                    <Link to={{
                                        screen: 'Mensagem', params: {
                                            nomePet: nome
                                        },
                                    }} style={styles.local}>
                                        Compartilhar
                                    </Link>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.textResumo}>{descricao.resumo}</Text>

                        {
                            descricao.fotos.map((item) => <Image source={item} key={uuid.v4()} style={styles.image} />)
                        }
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
