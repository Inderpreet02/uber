import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.test}>
            <View>
                <Image style={styles.homeImg} source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
                }} />
                <GooglePlacesAutocomplete
                    query ={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    placeholder = "Where From?"
                    debounce = {400}
                    nearbyPlacesAPI = "GooglePlacesSearch"
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                />
                <NavOptions/>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    test: {
        marginTop: 25,
        paddingLeft: 15,
        paddingRight: 15,
    },
    homeImg: {
        height: 100,
        width: 100,
        resizeMode: "contain",
    },
    homeAutoCom : {
        flex: 0,
        fontSize: 18,
    
    }
})
