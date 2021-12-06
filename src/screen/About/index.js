import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
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
                    paddingVertical: 15,
                    elevation: 3,
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Icon style={{ marginRight: 10 }}
                            name="500px"
                            size={25}
                            color="#FFF" />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#FFFF',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}>
                        Home
                    </Text>
                </View>

                <Text style={{ color: '#fff' }} >App by reza</Text>
            </View>
        );
    }
}

export default Home;