import { ImageBackground, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#1F1E25",
        padding: 15,
        borderRadius: 4,

        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },

    nameText: {
        color: "#FFFFFF",
        flex: 1
    },

    remove: {
        backgroundColor: "#E23C44",
        width: 30,
        height: 30,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center"
    },

    removeText: {
        color: "#FFFFFF"
    }
})