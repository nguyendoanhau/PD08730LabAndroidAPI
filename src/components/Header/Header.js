import React from "react";
import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./styles"

const Header = ({
    leftComponent,
    iconLeft,
    onPressLeft,
    inconLeftColor,
    centerComPonent,
    title,
    numberOfLines,
    rightComponent,
    iconRight,
    onPressRight,
    
})=> {
    const renderLeft= () =>{
        return(
            leftComponent || (
                <View style={styles.containerLeft}>
                {iconLeft ? (
                    <Pressable hitSlop={15}>
                        <Image
                        source = {iconLeft} style={styles.icon}/>
                    </Pressable>

                ) : (
                    <View style={{width: 7,height: 7}}/>
                )} 
                    
                </View>
            )
        );
    };

    const renderCenter = () => {
        return (
            centerComPonent || (
                <View style={styles.containerCenter}>
                    <Text style={styles.title} numberOfLines={numberOfLines}>
                        {title}
                    </Text>
                </View>
            )
        );
    };
    const renderRight= () =>{
        return(
            rightComponent || (
                <View style={styles.containerRight}>
                {iconRight ? (
                    <Pressable hitSlop={15} onPress={onPressRight}>
                        <Image
                        source = {iconRight} style={styles.icon}/>
                    </Pressable>

                ) : (
                    <View style={{width: 7,height: 7}}/>
                )} 
                    
                </View>
            )
        );
    };

    return(
        <View style={styles.mainContainer}>
            {renderLeft()}
            {renderCenter()}
            {renderRight()}
        </View>
    );
};
export default React.memo(Header);