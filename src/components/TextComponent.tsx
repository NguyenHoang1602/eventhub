import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStykes';

interface Props {
    text: string;
    color?: string;
    size?: number;
    flex?: number;
    font?: string;
    styles?: StyleProp<TextStyle>;
    title?: boolean;

}

const TextComponent = (props: Props) => {

    const {text, size, flex, font, color, title} = props;

  return <Text 
        style={[
            globalStyles.text,
            {
            color: color ?? appColors.text,
            flex: flex ?? 0,
            fontSize: size ?? title ? 24 : 14,
            fontFamily: font ?? title ? fontFamilies.bold : fontFamilies.medium,
            }
        ]}>{text}</Text>
}
export default TextComponent