import React, {useState} from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {Icon, Avatar, Image, Input, Button} from 'react-native-elements';
import {colors} from "../../utils/colors";

export default function AddRestaurantForm(props) {
    const {toastRef, setIsLoading, navigation} = props;
    const [restaurant, setRestaurant] = useState({
        name: null,
        address: null,
        desc: null,
        time: null
    });
    const addRestaurant = () => {
        console.log(restaurant);
    };
    return (
        <ScrollView style={styles.scrollView}>
            <AddForm
                restaurant={restaurant}
            />
            <UploadImage/>
            <Button
                title='Crear restaurante'
                titleStyle={styles.titleButton}
                onPress={addRestaurant}
                buttonStyle={styles.addButton}
            />
        </ScrollView>
    )

};

function AddForm(props) {
    const {restaurant} = props;
    return (
        <View style={styles.viewForm}>
            <Input
                placeholder='Nombre del restaurante'
                containerStyle={styles.input}
                onChange={e => {
                    restaurant.name = e.nativeEvent.text
                }}
            />
            <Input
                placeholder='Direccion'
                containerStyle={styles.input}
                onChange={e => {
                    restaurant.address = e.nativeEvent.text
                }}
            />
            <Input
                placeholder='Horarios de atencion'
                containerStyle={styles.input}
                onChange={e => {
                    restaurant.time = e.nativeEvent.text
                }}
            />
            <Input
                placeholder='Descripcion'
                multiline={true}
                containerStyle={styles.textArea}
                onChange={e => {
                    restaurant.desc = e.nativeEvent.text
                }}
            />
        </View>
    )
}

function UploadImage(props) {
    const imageSelect = () => {
        console.log('Imagenes');
    };
    return (
        <View style={styles.viewImages}>
            <Icon
                type="material-community"
                name='camera'
                color='#7a7a7a'
                style={styles.icon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        height: '100%'
    },
    viewForm: {
        marginLeft: 10,
        marginRight: 10
    },
    textArea: {
        height: 100,
        width: '100%',
        padding: 0,
        margin: 0,
    },
    input: {

    },
    addButton: {
        borderWidth: 2,
        backgroundColor: colors.primary,
        borderColor: colors.dark,
        margin: 20
    },
    titleButton: {
        color: colors.secondary
    },
    viewImages: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
    },
    icon: {
        justifyContent: 'center',
        marginRight: 10,
        height: 70,
        width: 70,
        backgroundColor: '#e3e3e3'
    }
});
