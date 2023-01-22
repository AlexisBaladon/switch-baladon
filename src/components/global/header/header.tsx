import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
    title: string;
}

const Header: React.FC<IProps> = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginLeft: 15, marginRight: 20,
        marginTop: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        paddingLeft: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    hamburger: {
        width: 37.5, height: 37.5,
    }
})

export default Header;