import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent';
import { globalStyles } from '../styles/globalStykes';
import { appColors } from '../constants/appColors';

interface Props {
    icon?: ReactNode;
    text: string;
    type?: 'primary' | 'text' | 'link';
    color?: string;
    styles?: StyleProp<ViewStyle>;
    textColor?: string;
    textStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
    iconFlex?: 'right' | 'left';
}
const ButtonComponent = (props: Props) => {

    const { icon, text, type, color, styles, textColor, textStyle, onPress, iconFlex } = props;

    return type === 'primary' ? (

        <TouchableOpacity onPress={onPress}
            style={[
                globalStyles.button,
                {
                    backgroundColor: color ?? appColors.primary,
                },
                styles]}>
            {icon && icon}
            <TextComponent
                text={text}
                color={textColor ?? appColors.white}
                styles={[textStyle,
                    {
                        marginLeft: icon ? 12 : 0,
                    }]}
                flex={icon && iconFlex === 'right' ? 1 : 0} />
            {icon && iconFlex === 'right' && icon}
        </TouchableOpacity>
    ) : (
        <TouchableOpacity>
            <TextComponent text={text} color={type === 'link' ? appColors.link : appColors.text} />
        </TouchableOpacity>
    )

}

export default ButtonComponent