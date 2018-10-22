import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
import API from './API';

export default class ListMoviesScreen extends Component{
    static navigationOptions = {
        title: 'Movie Explorer'
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged : (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
        API.search('Batman').then((data) => {
            this.setState({dataSource: ds.cloneWithRows(data)});
        });
    }

    render(){
        return(
            <ListView style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => {
                    return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {id: rowData.imdbID})} >
                            <View style={styles.row}>
                                <View style={{flex: 3}}>
                                    <Image style={styles.image} source={{uri: rowData.Poster}} />
                                </View>
                                <View style={{flex: 10}}>
                                    <Text style={styles.title}>{rowData.Title} ({rowData.Year})</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                renderSeperator={(sectionID, rowID, adjacentRowHighlighted) =>
                    <View style={{height:1, backgroundColor:'#000000'}} />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    row: {
        flexDirection: 'row',
        height: 130,
        borderBottomColor: '#474747',
        borderBottomWidth: 0.5,
        marginBottom: 5
    },
    image: {
        height: 130
    },
    title: {
        fontSize: 20,
        paddingLeft: 10
    }
});