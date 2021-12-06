import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: [
                { judul: 'apel', desc: 'apel adalah sebuah buah' },
                { judul: 'jeruk', desc: 'jeruk adalah sebuah buah' },
                { judul: 'pear', desc: 'pear adalah sebuah buah' },
                { judul: 'nanas', desc: 'apel adalah sebuah buah' },
                { judul: 'durian', desc: 'jeruk adalah sebuah buah' },
                { judul: 'anggur', desc: 'pear adalah sebuah buah' },
                { judul: 'pisang', desc: 'apel adalah sebuah buah' },
                { judul: 'manggis', desc: 'jeruk adalah sebuah buah' },
                { judul: 'semangka', desc: 'pear adalah sebuah buah' }
            ],

            dataTampil: [{ judul: 'apel', desc: 'apel adalah sebuah buah' },
            { judul: 'jeruk', desc: 'jeruk adalah sebuah buah' },
            { judul: 'pear', desc: 'pear adalah sebuah buah' },
            { judul: 'nanas', desc: 'apel adalah sebuah buah' },
            { judul: 'durian', desc: 'jeruk adalah sebuah buah' },
            { judul: 'anggur', desc: 'pear adalah sebuah buah' },
            { judul: 'pisang', desc: 'apel adalah sebuah buah' },
            { judul: 'manggis', desc: 'jeruk adalah sebuah buah' },
            { judul: 'semangka', desc: 'pear adalah sebuah buah' }
            ],

            pencarian: '',
        };
    }

    pencarian = () => {
        let data = this.state.data
        data = data.filter(item => item.judul.toLowerCase().includes(this.state.pencarian.toLowerCase()))

        this.setState({ dataTampil: data });
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                        <Icon style={{ marginRight: 10 }}
                            name="info"
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

                <TextInput
                    value={this.state.pencarian}
                    onChangeText={(text) => this.setState({ pencarian: text }, () => this.pencarian())}
                    style={{
                        marginTop: 20,
                        marginHorizontal: 20,
                        backgroundColor: '#FFFF'
                    }}
                    placeholder="masukkan kata disini"
                />

                <FlatList
                    data={this.state.dataTampil}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{
                            backgroundColor: "#2196f3",
                            margin: 10,
                            padding: 5
                        }}
                            onPress={() => this.props.navigation.navigate('Detail',
                                {
                                    judul: item.judul,
                                    desc: item.desc,
                                })}
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