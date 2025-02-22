import { View, Text, StyleSheet } from "react-native";
import { MSeetingsIcon } from "@/components/misc/icons/MSettingsIcon";
import { MUserIcon } from "@/components/misc/icons/MUserIcon";

export const MFooter = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.button}>
        <MSeetingsIcon />
      </View>
      <View style={styles.button}>
        <MUserIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    footer: {
      flexDirection: "row",
      gap: 20,
      height: 90,
      backgroundColor: "#1D0B04",
      justifyContent: "space-evenly",
    },
    button: {
      flexDirection: "row",
      justifyContent: "center",
      paddingTop: 10,
      flex: 1,
    }
  });
  