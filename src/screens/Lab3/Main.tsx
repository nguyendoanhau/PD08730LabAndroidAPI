import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

export type UserType = {
    name: string;
    avatar: string;
};
const colorFooter = [
    'white',
    '#FAE6D1',
    '#FAF9D1',
    '#EBFAD1',
    '#D1FAD7',
    '#D1F3FA',
    '#FAD3D1',
];

const Main = () => {
    const [user, setUser] = useState({
        name: 'No name yet',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU',
    });

    const [lastTimeUpdate, setLastTimeUpdate] = useState(
        `You have't update your informations`,
    );
    const [footerColor, setFooterColor] = useState(colorFooter[0]);

    //Update informations account
    const handleUpdateInfor = useCallback((_user: UserType) => {
        setUser(_user);
    }, []);

    //Functions ramdom backgroundColor footer
    const handleRamColor = useCallback(() => {
        const numberRamdom = Math.floor(Math.random() * colorFooter.length);
        setFooterColor(colorFooter[numberRamdom]);
    }, []);

    //Informations user update , update time update
    useEffect(() => {
        const currentDate = new Date();
        const dataTime =
            currentDate.getDate() +
            '/' +
            (currentDate.getMonth() + 1) +
            '/' +
            currentDate.getFullYear() +
            '   ' +
            currentDate.getHours() +
            ' : ' +
            currentDate.getMinutes() +
            ' : ' +
            currentDate.getSeconds();
        setLastTimeUpdate(dataTime);
    }, [user]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'whitesmoke' }}>
            <Header user={user} />
            <Body
                onClickChangeBgFooter={handleRamColor}
                onUpdateInfor={handleUpdateInfor}
            />
            <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
        </SafeAreaView>
    );
}

export default Main;

const styles = StyleSheet.create({});