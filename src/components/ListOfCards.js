import React from "react";
import { Image, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export const ListOfCards = () => {
    const renderItem = ({ item }) => (
        <Image
            style={{
                width: "100%",
                height: 288,
                borderRadius: 20,
                marginBottom: 32,
            }}
            source={{ uri: item.url }}
        />
    );

    const arrayOfImages = [
        {
            id: "101",
            url: "https://images.unsplash.com/photo-1751221019361-ccb29188b8b2?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "102",
            url: "https://images.unsplash.com/photo-1747227825543-5da2c9f03222?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "103",
            url: "https://images.unsplash.com/photo-1752001198783-a50a87122934?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "104",
            url: "https://images.unsplash.com/photo-1751647670943-74e2045c942a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <View style={{ paddingVertical: 30 }}>
            <FlatList
                data={arrayOfImages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};
