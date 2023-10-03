import { Text } from "react-native";
import React from "react";

const CommonBtn = ({ name }) => {
    return (
        <Text style={{ color: "#fff", fontWeight: "bold" }}>{name}</Text>
    );
};

export default CommonBtn;