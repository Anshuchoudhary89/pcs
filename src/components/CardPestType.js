import React,{StyleSheet,  TouchableWithoutFeedback, Dimensions} from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
// import { StyleSheet, View, Image, TouchableWithoutFeedback, Dimensions,AsyncStorage } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { argonTheme } from './Theme';
const { width, height } = Dimensions.get("screen");
const USER_KEY = '@UserName';
class CardPestType extends React.Component {
    
    handleSubmit = async SK => {
        const {  item, horizontal, full, style, ctaColor, imageStyle } = this.props;
        const { navigation } = this.props;
        const valuePest = navigation.getParam('pestvalue', 0); 
        const PestType = JSON.stringify(valuePest);
        const UserName = await AsyncStorage.getItem('USER_KEY'); 
     
        if (UserName == 'Logout') {
            console.log('Name is now in IF'+UserName)
            navigation.navigate('Login')
            
        }
        else {
            navigation.navigate("PestApply", { pestvalue: item.pestvalue, pestrate: item.pestrate, cta: item.cta })
            
        }
      };
    render() {

        const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;

        const imageStyles = [
            full ? styles.fullImage :
                styles.horizontalImage
            , imageStyle
        ];
        const cardContainer = [styles.card, styles.shadow, style];
        const imgContainer = [styles.imageContainer,
        horizontal ? styles.horizontalStyles : styles.verticalStyles,
        styles.shadow
        ];

        return (
            <Block row={horizontal} card flex style={cardContainer}>

                <Block flex space="between" style={styles.cardDescription}>
                    <Text size={20} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text>
                    <Text size={14} style={styles.cardTitle}>{item.servicenm}</Text>
                    <Text size={12} style={styles.cardTitle}>{item.title}</Text>
                    <Text size={12} style={styles.cardTitle}>Composition: {item.composition}</Text>
                    <Text size={12} style={styles.cardTitle}>Chemical: {item.chemical}</Text>
                    <Text size={12} style={styles.cardTitle}>Frequency: {item.frequency}</Text>
                    <Text size={12} style={styles.cardTitle}> {item.note}</Text>
                </Block> 
                <Block middle> 
                    {/* <TouchableWithoutFeedback style={styles.createButton} middle onPress={() => navigation.navigate("PestApply", { pestvalue: item.pestvalue, pestrate: item.pestrate, cta: item.cta })}> */}
                    <TouchableWithoutFeedback style={styles.createButton} middle onPress={this.handleSubmit}>
                        {/* <LinearGradient colors={['#6D931C', '#83A92B', '#9ABE42']} style={{ padding: 7, alignItems: 'center', borderRadius: 4, width: width * 0.5, height: 40 }}> */}
                            <Text bold size={16} color={argonTheme.COLORS.WHITE}>
                                Confirm
                        </Text>
                        {/* </LinearGradient> */}
                    </TouchableWithoutFeedback>

                </Block>
                <Text>{"\n"}</Text>
            </Block>
        );
    }
}

CardPestType.propTypes = {
    item: PropTypes.object,
    horizontal: PropTypes.bool,
    full: PropTypes.bool,
    ctaColor: PropTypes.string,
    imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
    createButton: {
        width: width * 0.4,
        marginTop: 35,
        //color:'#FF0000'
    },
    card: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: theme.SIZES.BASE,
        borderWidth: 0,
        minHeight: 114,
        marginBottom: 16
    },
    cardTitle: {
        flex: 1,
        flexWrap: 'wrap',
        paddingBottom: 6
    },
    cardDescription: {
        padding: theme.SIZES.BASE / 3
    },
    imageContainer: {
        borderRadius: 3,
        elevation: 1,
        overflow: 'hidden',
    },
    image: {
        // borderRadius: 3,
    },
    horizontalImage: {
        height: 120,
        width: 'auto',
    },
    horizontalStyles: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    verticalStyles: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    fullImage: {
        height: 215
    },
    shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 2,
    },
});

export default withNavigation(CardPestType);