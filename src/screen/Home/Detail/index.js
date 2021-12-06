import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Container from '../../../common/container';
import Icon from 'react-native-vector-icons/FontAwesome';

function Detail({ route, navigation }) {
    const { judul, desc } = route.params

    return (
        <View style={{ flex: 1, backgroundColor: '#212121' }}>
            <StatusBar backgroundColor='#000000' />
            <View style={{
                backgroundColor: '#2196f3',
                paddingVertical: 15,
                elevation: 3,
                flexDirection: 'row',
                paddingHorizontal: 20,
                alignItems: 'center'
            }}>

                <TouchableOpacity onPress={() => this.navigation.pop()}>
                    <Icon style={{ marginRight: 10 }}
                        name="airbnb"
                        size={30}
                        color="#900" />
                </TouchableOpacity>
                <Text style={{
                    color: '#FFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 18,
                }}>
                    DETAIL
                </Text>
            </View>

            <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 20 }}>{judul}</Text>
            <Text style={{ textAlign: 'center', color: '#fff', marginTop: 20 }} > {desc}</Text>
        </View >
    );
}
export default Detail;