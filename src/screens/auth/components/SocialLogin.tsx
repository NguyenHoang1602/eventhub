import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColors'
import { fontFamilies } from '../../../constants/fontFamilies'
import { Facebook, Google } from '../../../assets/svgs'


const SocialLogin = () => {
    return (
        <SectionComponent>
            <TextComponent
                styles={{ textAlign: "center" }}
                text='OR'
                color={appColors.grey4}
                size={16}
                font={fontFamilies.medium}
            />
            <SpaceComponent height={16}/>
            <ButtonComponent
                type="primary"
                color={appColors.white}
                textColor={appColors.text}
                textFont={fontFamilies.regular}
                text='Login with Google'
                iconFlex="left"
                icon={<Google />}
            />
             <ButtonComponent
                type="primary"
                color={appColors.white}
                textColor={appColors.text}
                textFont={fontFamilies.regular}
                text='Login with Facebook'
                iconFlex="left"
                icon={<Facebook />}
            />
        </SectionComponent>
    )
}

export default SocialLogin