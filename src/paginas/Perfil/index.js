import { Image, StyleSheet, Text, View } from "react-native";
import PaginaBase from "../PaginaBase";
import { ScrollView } from "react-native-gesture-handler";

export default function Perfil() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <PaginaBase>

                    <View style={styles.contentContainer}>
                        <Text style={styles.text}>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</Text>
                        <View style={styles.perfilContainer}>
                            <Text style={styles.perfilTitle}>Perfil</Text>
                            <View>
                                <Text style={styles.perfilLabel}>Foto</Text>
                                <Image style={styles.perfilImagem} source={require('../../assets/avatar.png')} />
                                <Text style={styles.perfilInfo}>Clique na foto para editar</Text>
                            </View>
                            <View>
                                <Text style={styles.perfilLabel}>Nome</Text>
                                <Text style={styles.perfilDescription}>Joana Magalhães</Text>
                            </View>
                            <View>
                                <Text style={styles.perfilLabel}>Telefone</Text>
                                <Text style={styles.perfilDescription}>55 11 XXXXX-XXXX</Text>
                            </View>
                            <View>
                                <Text style={styles.perfilLabel}>Cidade</Text>
                                <Text style={styles.perfilDescription}>São Paulo</Text>
                            </View>
                            <View>
                                <Text style={styles.perfilLabel}>Sobre</Text>
                                <Text style={styles.perfilDescription}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</Text>
                            </View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textoBotao}>Editar</Text>
                            </TouchableOpacity>

                        </View>

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
        gap: 32,
        paddingTop: 150,
    },
    text: {
        color: "#3772FF",
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        fontWeight: '400',
        marginHorizontal: 67
    },
    perfilTitle: {
        fontSize: 21,
        fontWeight: '600',
        color: "#737380",
        fontFamily: 'PoppinsRegular',
        textAlign: 'center',
        marginBottom: 32
    },
    perfilLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: "#3772FF",
    },
    perfilContainer: {
        backgroundColor: '#F6F6F6',
        padding: 24,
        gap: 24,
        marginHorizontal: 24,
        marginBottom: 24
    },
    perfilImagem: {
        alignSelf: 'center',
    },
    perfilInfo: {
        color: '#FC7071',
        textAlign: 'center',
        fontSize: 12,
    },
    perfilDescription: {
        color: '#737380',
        fontSize: 14,
        marginTop: 16,
        marginBottom: 24
    },

    button: {
        borderRadius: 8,
        backgroundColor: '#FC7071', // Pode ser ajustado conforme necessário
        shadowColor: 'rgba(0, 0, 0, 0.12)',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4, // Adiciona a elevação para sombra no Android
        padding: 10, // Pode ser ajustado conforme necessário
        width: 200,
        alignSelf: 'center',
    },
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});