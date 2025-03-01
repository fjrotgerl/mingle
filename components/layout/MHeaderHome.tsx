import { View, Text, StyleSheet } from 'react-native'

export const MHeaderHome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ubicado en</Text>
            <Text style={styles.ubicationText}>El Arenal - Palma</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FF7F50",
        padding: 10,
        marginBlock: 10,
        borderRadius: 8
    },
    text: {
        color: "white"
    },
    ubicationText: {
        color: "white",
        fontWeight: 600,
        fontSize: 20
    }
})