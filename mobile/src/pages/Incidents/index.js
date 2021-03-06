import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png'

import styles from './styles';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <view style={styles.header}>
                <Image source={logoImg} />

                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </view>

            <Text style={style.title}>Bem-vindo</Text>
            <Text style={styles.description}>Escolha um caso abaixo e salve o dia.</Text>
            
        </View>
    );
}