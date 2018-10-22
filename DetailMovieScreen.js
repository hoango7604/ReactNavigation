import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import API from './API';

export default class DetailMovieScreen extends Component{
    static navigationOptions = {
        title: 'Movie Detail'
    };

    constructor() {
        super();
        this.state = {
            Title: '',
            Poster: '',
            Metascore: '',
            imdbRating: '',
            Year: '',
            Genre: '',
            Runtime: '',
            Released: '',
            Plot: '',
            Director: '',
            Writer: '',
            Actors: '',
        };
    }

    render(){
        let id = this.props.navigation.getParam('id');
        API.view(id).then((data) => {
            this.setState(data);
        });

        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <View style={styles.imageView}>
                        <Image style={styles.image} source={{uri: this.state.Poster}} />
                    </View>
                    <View style={styles.rateView}>
                        <Text style={styles.rate}>Meta: {this.state.Metascore}</Text>
                        <Text style={styles.rate}>imdb: {this.state.imdbRating}</Text>
                    </View>
                </View>

                <View style={styles.right}>
                    <View style={styles.contentView}>
                        <Text style={styles.title}>
                            {this.state.Title}
                        </Text>

                        <Text style={styles.title}>
                            ({this.state.Year})
                        </Text>

                        <Text style={styles.content}>
                            Genre: {this.state.Genre}
                        </Text>

                        <Text style={styles.content}>
                            ({this.state.Runtime})
                        </Text>

                        <View style={styles.separator} />

                        <Text style={styles.content}>
                            Released: {this.state.Released}
                        </Text>

                        <View style={styles.separator} />

                        <Text style={styles.content}>
                            {this.state.Plot}
                        </Text>

                        <View style={styles.separator} />

                        <Text style={styles.content}>
                            Director: {this.state.Director}
                        </Text>

                        <View style={styles.separator} />

                        <Text style={styles.content}>
                            Writer: {this.state.Writer}
                        </Text>

                        <View style={styles.separator} />

                        <Text style={styles.content}>
                            Actor: {this.state.Actors}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    left: {
        flex: 1,
        flexDirection: 'column',
    },
    imageView: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    rateView: {
        flex: 2,
        padding: 5
    },
    rate: {
        fontSize: 20
    },
    right: {
        flex: 2,
        flexDirection: 'column',
    },
    contentView: {
        flex: 1,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 30,
    },
    content: {
        fontSize: 18
    },
    separator: {
        height: 0.5,
        backgroundColor: '#474747',
        marginTop: 5,
        marginBottom: 5
    }
});