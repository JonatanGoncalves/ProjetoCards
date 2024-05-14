import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    textInpput: {
        height: 40,
        borderColor: "grey",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    noteContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        padding: 10,
    },
    alinhar: {
        textAlign: "center",
        marginTop: 20,
    }
});

export default styles;