import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: [
                { judul: 'Apel', desc: 'apel adalah sebuah buah' },
                { judul: 'jeruk', desc: 'jeruk adalah sebuah buah' },
                { judul: 'pear', desc: 'pear adalah sebuah buah' },
                { judul: 'nanas', desc: 'apel adalah sebuah buah' },
                { judul: 'durian', desc: 'jeruk adalah sebuah buah' },
                { judul: 'anggur', desc: 'pear adalah sebuah buah' },
                { judul: 'pisang', desc: 'apel adalah sebuah buah' },
                { judul: 'manggis', desc: 'jeruk adalah sebuah buah' },
                { judul: 'semangka', desc: 'pear adalah sebuah buah' }
            ],

            pencarian: ''
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

                <TextInput
                    value={this.state.pencarian}
                    onChangeText={(text) => this.setState({ pencarian: text })}
                    style={{
                        marginTop: 20,
                        marginHorizontal: 20,
                        backgroundColor: '#FFFF'
                    }}
                />

                <FlatList
                    data={this.state.data}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={{
                            backgroundColor: "#2196f3",
                            margin: 10,
                            padding: 5
                        }}
                            onPress={() => this.props.navigation.navigate('Detail')}
                        >
                            <Text style={{ color: 'white' }}>{item.judul}</Text>
                            <Text style={{ color: 'white' }}>{item.desc}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.judul}
                />
            </View>
        );
    }
}

export default Home;