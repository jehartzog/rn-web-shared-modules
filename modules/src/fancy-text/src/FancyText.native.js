import React from 'react';
import { Text } from 'react-native';

const FancyText = ({ children }) => (
    <Text style={{ fontSize: 30 }}>{children}</Text>
)

export default FancyText;