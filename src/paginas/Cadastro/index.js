import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import PaginaBase from '../PaginaBase';

export default function Cadastro() {
    const [nome, onChangeNome] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');
    const [confirmaSenha, onChangeConfirmaSenha] = React.useState('');
    const [email, onChangeEmail] = React.useState('');

    return (
        <View style={styles.container}>
            <PaginaBase>
                <ImageBackground
                    source={require('../../assets/Patas.png')}
                    style={styles.backgroundImagePatas}
                    imageStyle={{
                        height: 200,
                        left: 250,
                    }}
                >
                    <View style={styles.contentContainer}>
                        <Image source={require('../../assets/Logo-azul.png')} style={styles.imagem} />
                        <View>
                            <Text style={styles.text}>Ainda não tem cadastro?</Text>
                            <Text style={styles.text}>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</Text>
                        </View>

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
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                value={email}
                                placeholder="Digite seu melhor e-mail"
                                placeholderTextColor={'#BCBCBC'}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>Senha</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeSenha}
                                value={senha}
                                placeholder="Crie sua senha"
                                placeholderTextColor={'#BCBCBC'}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>Confirme a senha</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeConfirmaSenha}
                                value={confirmaSenha}
                                placeholder="Repita a senha criada acima"
                                placeholderTextColor={'#BCBCBC'}
                            />
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textoBotao}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </PaginaBase>
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
    },
    backgroundImagePatas: {
        height: '100%',
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 150,
    },
    contentContainer: {
        gap: 16,
    },
    imagem: {
        alignSelf: 'center',
    },
    input: {
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
        textAlign: 'center',
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
    label: {
        color: '#737380',
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center'
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
