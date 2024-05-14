import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
    Modal,
    Portal,
    Button,
    PaperProvider,
    TextInput,
    Text,
} from "react-native-paper";
export default function Help() {
    const [visible, setVisible] = useState(false); // booleano é true or false
    const [note, setNote] = useState(""); // é uma string
    const [notes, setNotes] = useState([]); // é um array
    // const showModal = () => setVisible(true);
    // const hideModal = () => setVisible(false);

    function showModal() {
        console.log("Caramba é pra mostrar o Modal")
        setVisible(true);
    }
    function hideModal() {
        console.log("Caramba é pra esconder, esconde logo!")
        setVisible(false);
    }


    const containerStyle = { backgroundColor: "white", padding: 20, margin: 10 };


    const handleSubmit = () => {
        if (note.trim() !== "") {
            const noteId = Date.now();
            setNotes([...notes, { id: noteId, content: note }]);
            setNote("");
            hideModal();
        }
    };

    
    
    const handleDelete = (noteId) => {
        setNotes(notes.filter((note) => note.id !== noteId));
    };
    return (
        <PaperProvider>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={containerStyle}
                >
                    <Text>Add Your Notes</Text>
                    <TextInput
                        value={note}
                        onChangeText={setNote}
                        placeholder="Enter Your Notes..."
                        style={styles.textInpput}
                    />
                    <View style={{ width: 150 }}>
                        <Button mode="contained" onPress={handleSubmit}>
                            Add Node
                        </Button>
                    </View>
                </Modal>
            </Portal>
            <View style={styles.container}>
                <Text variant="titleMedium" style={styles.alinhar}>Precisa de Ajuda, Adiciona Sua Nota</Text>
                <Button
                    style={{ marginTop: 30, backgroundColor: "#f0f0f0" }}
                    onPress={showModal}
                >
                    ADD Notes
                </Button>
                {notes.map((note, index) => (
                    <View key={index} style={styles.noteContainer}>
                        <Text
                            style={{
                                borderLeftColor: "blue",
                                borderLeftWidth: 2,
                                color: "black",
                                padding: 10,
                                borderRadius: 10,
                            }}
                        >
                            {note.content}
                        </Text>
                        <Button onPress={() => handleDelete(note.id)}>Delete</Button>
                    </View>
                ))}
            </View>
        </PaperProvider>
    );
}
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