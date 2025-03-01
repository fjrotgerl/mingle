import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export const MFilter = () => {
    const emojisWithIcons = [
        { title: "Más recientes", icon: "" },
        { title: "Más relevantes", icon: "" }
    ];

    return (
        <SelectDropdown
            data={emojisWithIcons}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
                return (
                    <View style={styles.dropdownButtonStyle}>
                        <Text style={styles.dropdownButtonTxtStyle}>
                            {(selectedItem && selectedItem.title) || "Filtro"}
                        </Text>
                    </View>
                );
            }}
            renderItem={(item, index, isSelected) => {
                return (
                    <>
                        <View
                            style={{
                                ...styles.dropdownItemStyle,
                                ...(isSelected && {
                                    backgroundColor: "#D2D9DF",
                                }),
                            }}
                        >
                            <Text style={styles.dropdownItemTxtStyle}>
                                {item.title}
                            </Text>
                        </View>

                        { index < emojisWithIcons.length - 1 && <View style={styles.dropdownSeparator}></View>}
                    </>
                );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#000",
        fontWeight: "bold",
        textAlign: "center",
    },
    dropdownButtonStyle: {
        borderWidth: 2,
        borderColor: "#FF7F50",
        padding: 8,
        borderRadius: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        color: "black",
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: "#E9ECEF",
        borderRadius: 10,
        marginTop: 5,
        borderColor: "black",
    },
    dropdownItemStyle: {
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        color: "#151E26",
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownSeparator: {
        width: "90%",
        height: 1,
        backgroundColor: "#888",
        marginHorizontal: 10
    },
});
