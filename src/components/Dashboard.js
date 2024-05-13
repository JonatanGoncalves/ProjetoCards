import React from "react";
import { ScrollView, StyleSheet, Text} from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default function Dashboard() {
    return (
        <ScrollView style={styles.container}>
            <Card style={styles.cardBox}>
                <Card.Title
                    title="Imagens Aleatórias"
                    subtitle="Mostrará imagens aleatórias"
                    left={LeftContent}
                />
                <Card.Content>
                    <Text variant="titleLarge">Imagens feita por</Text>
                    <Text variant="bodyMedium">https://picsum.photos</Text>
                </Card.Content>
                <Card.Cover
                    source={{ uri: "https://picsum.photos/498" }}
                    style={styles.img}
                />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>OK</Button>
                </Card.Actions>
            </Card>
            <Card style={styles.cardBox}>
                <Card.Title
                    title="Imagens Aleatórias"
                    subtitle="Mostrará imagens aleatórias"
                    left={LeftContent}
                />
                <Card.Content>
                    <Text variant="titleLarge">Imagens feita por</Text>
                    <Text variant="bodyMedium">https://picsum.photos</Text>
                </Card.Content>
                <Card.Cover
                    source={{ uri: "https://picsum.photos/715" }}
                    style={styles.img}
                />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>OK</Button>
                </Card.Actions>
            </Card>
            <Card style={styles.cardBox}>
                <Card.Title
                    title="Imagens Aleatórias"
                    subtitle="Mostrará imagens aleatórias"
                    left={LeftContent}
                />
                <Card.Content>
                    <Text variant="titleLarge">Imagens feita por</Text>
                    <Text variant="bodyMedium">https://picsum.photos</Text>
                </Card.Content>
                <Card.Cover
                    source={{ uri: "https://picsum.photos/325" }}
                    style={styles.img}
                />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>OK</Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    cardBox: {
        margin: 10,
    },
    img: {
        padding: 10,
    },
});