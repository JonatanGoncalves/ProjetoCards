import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import  styles  from "../styles/ProfileStyle";
import axios from "axios";
export default function Profile() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .catch((err) => console.log(err));
    }, []);
    const resderUserCard = ({ item }) => {
        return (
            <View style={styles.card}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.website}>{item.website}</Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={resderUserCard}
            />
        </View>
    );
}
