import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import PaginaBase from "../PaginaBase";

export default function Mensagem() {
    const route = useRoute();
    const { nomePet } = route.params;

    const [nome, onChangeNome] = React.useState('');
    const [telefone, onChangeTelefone] = React.useState('');
    const [mensagem, onChangeMensagem] = React.useState('');

    return (
        <View style={styles.container}>
            <ScrollView>
                <PaginaBase>
                    <View style={styles.contentContainer}>
                        <Text style={styles.text}>Envie uma mensagem para o tutor:</Text>
                        <View style={styles.formContainer}>
                            <View>
                                <Text style={styles.label}>Nome</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNome}
                                    value={nome}
                                    placeholder='Digite seu nome completo'
                                    placeholderTextColor={'#BCBCBC'}
                                />
                            </View>

                            <View>
                                <Text style={styles.label}>Telefone</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeTelefone}
                                    value={telefone}
                                    placeholder='Insira seu telefone e/ou whatsapp'
                                    placeholderTextColor={'#BCBCBC'}
                                />
                            </View>

                            <View>
                                <Text style={styles.label}>Nome do animal</Text>
                                <TextInput
                                    style={styles.input}
                                    value={nomePet}
                                />
                            </View>

                            <View>
                                <Text style={styles.label}>Mensagem</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeMensagem}
                                    value={mensagem}
                                    placeholder='Escreva sua mensagem'
                                    placeholderTextColor={'#BCBCBC'}
                                    multiline
                                    numberOfLines={4}
                                />
                            </View>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textoBotao}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </PaginaBase>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    text: {
        color: "#3772FF",
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        fontWeight: '400',
        marginHorizontal: 67
    },
    contentContainer: {
        gap: 32,
        paddingTop: 150,
    },
    formContainer: {
        backgroundColor: '#F6F6F6',
        padding: 24,
        gap: 24,
        marginHorizontal: 24,
        marginBottom: 24
    },
    label: {
        color: '#3772FF',
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 24,
        marginTop: 18,
        marginBottom: 6
    },
    input: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        padding: 12,
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