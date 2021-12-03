import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#212121' }}>
                <StatusBar backgroundColor='#000000' />
                <View style={{
                    backgroundColor: '#2196f3',
                    paddingVertical: 15
                }}>
                    <Text style={{
                        color: '#FFFF',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}>
                        Home
                    </Text>
                </View>
            </View>
        );
    }
}

export default Detail;