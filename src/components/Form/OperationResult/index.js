import React from "react";
import { View, Text } from "react-native";

export default function OperationResult(props) {
    return (
        <View>
            <Text>props.imcResultMessage</Text>
            <Text>props.imcResult</Text>
        </View>
    );
}