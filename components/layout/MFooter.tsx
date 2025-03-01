import { View, Text, StyleSheet } from "react-native";
import { MSeetingsIcon } from "@/components/misc/icons/MSettingsIcon";
import { MUserIcon } from "@/components/misc/icons/MUserIcon";
import { Link } from "expo-router";

export const MFooter = () => {
    return (
        <View style={styles.footer}>
            <Link href="/(tabs)/profile" style={{flex: 1}}>
                <View style={styles.button}>
                    <MUserIcon />
                </View>
            </Link>

            <Link href="/(tabs)/user-settings" style={{flex: 1}}>
                <View style={styles.button}>
                    <MSeetingsIcon />
                </View>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        gap: 20,
        height: 90,
        backgroundColor: "#FF7F50",
        justifyContent: "space-evenly",
        borderTopColor: "#DC6336",
        borderWidth: 1
    },
    button: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "center",
        paddingTop: 10,
        
    },
});
