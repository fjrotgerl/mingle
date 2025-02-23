import { View, Text, StyleSheet } from 'react-native'

export const MHeaderHome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Soy un header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1D0B04"
    },
    text: {
        color: "white"
    }
})