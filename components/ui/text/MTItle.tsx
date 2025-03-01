import { View, Text, StyleSheet } from 'react-native'

interface MTitleProps {
    title: string,
    subtitle?: string
}

export const MTitle: React.FC<MTitleProps> = ({
    title,
    subtitle
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{title}</Text>
            { subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 2,
        paddingBlock: 25
    },
    headerText: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "600"
    },
    subtitleText: {
        textAlign: "center",
        color: "#999"
    }
})