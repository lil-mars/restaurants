import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-easy-toast';
import AddRestaurantForm from "../../components/restaurants/AddRestaurantForm";
export default function AddRestaurantStack(props) {
    const {navigation} = props;
    const [isLoading, setIsLoading] = useState(false);
    const toastRef = useRef();

    return(
        <View>
            <AddRestaurantForm
                toastRef={toastRef}
                isLoading={isLoading}
                navigation={navigation}
            />
            <Toast ref={toastRef} position='center' opacity={0.9}/>
        </View>
    )
}
const styles = StyleSheet.create({

});
