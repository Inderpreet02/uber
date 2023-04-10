import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://img.icons8.com/carbon-copy/2x/uber-eats.png",
        screen: "EatsScreen",
    }
]

const NavOptions = () => {
    const navigation = useNavigation();


    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={styles.navList}>
                    <View>
                        <Image
                            style={styles.navOptionImg}
                            source={{
                                uri: item.image
                            }}
                        />
                        <Text style={styles.navText}>{item.title}</Text>
                        <Icon 
                            style={styles.navIcon} name="arrowright" color="white" type="antdesign"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({
    navOptionImg: {
        height: 120,
        width: 120,
        resizeMode: "contain",
    },
    navList:{
        paddingLeft: 17,
        paddingBottom: 10,
        paddingTop: 5,
        backgroundColor: "#e5e5e5",
        margin: 4,
        marginLeft: 10,
        width: 150,
    },
    navText: {
        fontWeight: "bold"
    },
    navIcon: {
        padding: 5,
        backgroundColor: "black",
        borderRadius: 25,
        marginTop: 8,
        width: "25%",

    }
})
