import { Pressable, Text, StyleSheet } from "react-native";

interface MButtonProps {
    text: string,
    onPress?: () => void
}

export const MButton: React.FC<MButtonProps> = ({ 
    text = 'Button',
    onPress
}) => {
    return (
        <Pressable 
            onPress={onPress}
            style={({pressed}) => [
                {
                    backgroundColor: pressed ? '#5A3DFE' : '#4625FF'
                },
                style.button
            ]}
        >
            <Text style={style.text}>{text}</Text>
        </Pressable>
    );
};

const style = StyleSheet.create({
    button: {
        borderRadius: 5,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    }
})