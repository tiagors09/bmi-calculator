import React from "react";
import { View, Text } from "react-native";

export default function OperationResult(props) {
    return (
        <View>
            <Text>{props.bmiResultMessage}</Text>
            <Text>{props.bmiResult}</Text>
        </View>
    );
}