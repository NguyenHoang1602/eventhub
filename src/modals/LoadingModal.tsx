import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles';
import { SpaceComponent, TextComponent } from '../components';
import { appColors } from '../constants/appColors';
import { Flow, Wave, Grid, Pulse } from 'react-native-animated-spinkit';


interface Props {
    visible: boolean;
    mess?: string;
}
const LoadingModal = (props: Props) => {

    const { visible, mess } = props;
    return (
        <Modal
            visible={visible}
            style={{}}
            transparent
            statusBarTranslucent
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,1)',
                    opacity: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Wave color={appColors.white} size={40}/>
                <SpaceComponent height={5}/>
                <TextComponent text='Loading' flex={0} color={appColors.white}/>
            </View>
        </Modal>
    )
}

export default LoadingModal;