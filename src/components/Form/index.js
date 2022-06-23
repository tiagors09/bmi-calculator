import React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";

export default function Form() {
    return (
        <View>
            <View>
                <Text>Weight</Text>
                <TextInput />
                <Text>Height</Text>
                <TextInput/>
                <TouchableOpacity>Button</TouchableOpacity>
            </View>
            
        </View>
    );
}