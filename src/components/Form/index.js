import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import OperationResult from '../Form/OperationResult';

export default function Form() {
    const [message, setMessage] = React.useState(null);
    const [result, setResult] = React.useState(null);

    return (
        <View>
            <View>
                <Text>Weight</Text>
                <TextInput />
                <Text>Height</Text>
                <TextInput/>
                <TouchableOpacity>Calculate</TouchableOpacity>
            </View>
            <OperationResult bmiResultMessage={message} bmiResult={result}/>
        </View>
    );
}