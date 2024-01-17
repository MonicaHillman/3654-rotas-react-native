import { ImageBackground, StyleSheet } from 'react-native';

export default function PaginaBase({ children }) {
    return <ImageBackground
        source={require('../../assets/Vector.png')}
        style={styles.backgroundImage}
        imageStyle={{
            resizeMode: "cover",
            height: 300, // the image height
            top: 0,
        }}
    >

        {children}
    </ImageBackground>
}


const styles = StyleSheet.create({
    backgroundImage: {
        height: '100%',
    },
});
