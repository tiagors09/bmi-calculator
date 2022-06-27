import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import OperationResult from '../Form/OperationResult';

export default function Form() {
    const [message, setMessage] = React.useState(null);
    const [result, setResult] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [height, setHeight] = React.useState(null);
    const [textButton, setTextButton] = React.useState("Calculate BMI");

    function calculateBMI() {
        return setResult((weight/(height*height)).toFixed(2));
    }

    function validationBMI() {
        if(weight != null && height != null) {
            calculateBMI();
            setWeight(null);
            setHeight(null);
            setMessage("Your BMI is: ");
            setTextButton("Calculate again");
        } else {
            setResult(null)
            setTextButton("Calculate");
            setMessage("Fill fields with your informations");
        }
    }

    return (
        <View>
            <View>
                <Text>Weight</Text>
                <TextInput 
                placeholder="Ex.: 75.0"
                onChangeText={setWeight}
                value={weight}
                keyboardType='numeric'
                />
                <Text>Height</Text>
                <TextInput 
                placeholder="Ex.: 1.75"
                onChangeText={setHeight}
                value={height}
                keyboardType='numeric'
                />
                <TouchableOpacity onPress={() => { validationBMI(); }} value={textButton}>
                    Calculate
                </TouchableOpacity>
            </View>
            <OperationResult bmiResultMessage={message} bmiResult={result}/>
        </View>
    );
}