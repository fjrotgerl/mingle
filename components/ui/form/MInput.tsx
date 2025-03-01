import { useState } from "react";
import { MUserIcon } from "@/components/misc/icons/MUserIcon";
import { TextInput, Text, View, StyleSheet } from "react-native";

interface MInputProps {
    label: string;
    value: string;
    onChangeValue: (text: string) => void;
}

export const MInput: React.FC<MInputProps> = ({
    label,
    value,
    onChangeValue,
}) => {
    const [isInputOpen, setInputOpen] = useState(false);

    return (
        <View style={styles.container}>
            {/* Label */}
            <Text style={styles.label}>{label}</Text>

            {/* Input */}
            <View style={[styles.inputContainer, isInputOpen ? styles.borderWithFocus : styles.borderWithoutFocus]}>
                <MUserIcon fill="#666" width={15} height={15}></MUserIcon>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeValue}
                    value={value}
                    onFocus={() => setInputOpen(true)}
                    onEndEditing={() => setInputOpen(false)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    label: {
        paddingBlock: 4,
        fontWeight: "600",
        fontSize: 15,
    },
    inputContainer: {
        flexDirection: "row",
        borderRadius: 100,
        padding: 10,
        gap: 10,
        alignContent: "center",
    },
    borderWithoutFocus: {
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "#ACACAC",
    },
    borderWithFocus: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: "#FF7F50",
    },
    input: {
        flex: 1,
    },
});
