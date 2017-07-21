import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ListView,
    ScrollView
} from 'react-native';

var list = ['Test1','Test2'];

export default class MyStack extends Component{

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds.cloneWithRows(list),
        noteText : '',
        noteArray: [] ,
        };
    }

    render(){

        return(
            <View style={styles.container} >

                <View style={styles.title} >    
                    <Text style={styles.titleInput} > Type something </Text>
                </View>    

                <ScrollView style={styles.scrollView}>
                      <ListView
                            style={styles.container}
                            dataSource={this.state.dataSource}
                            renderRow={(data) => <View style={{ alignItems : 'center'}}><Text>{data}</Text></View>}
                        />
                </ScrollView>

                <View style={styles.footer}>      

                    <View style={{ flexDirection : 'row'} }>
                        <TouchableOpacity style={styles.pushButton} onPress={this.addText.bind(this)} >
                            <Text style={styles.ButtonText}>Push</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.popButton} onPress={this.deleteText.bind(this)}>
                            <Text style={styles.ButtonText}>Pop</Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput style={styles.textInput} pleaceHolder='> note'
                        onChangeText = {(noteText)=>this.setState({noteText})}
                        value = {this.state.noteText}
                        pleaceholderColorAndroid = 'transparent' >
                    </TextInput> 

                </View>              
      
            </View>
     
        );
    }

    addText(){
        if(this.state.noteText){
            this.state.dataSource.push(this.state.noteText);
            this.setState({dataSource : this.state.dataSource});
            this.setState({noteText:''});
        }
    }

    deleteText(){
        this.setStage({noteArray: []})
    }

}

const styles = StyleSheet.create({

    container : {
        flex : 1
    },

    title : {
        backgroundColor : '#E91E63',
        alignItems : 'center',
        justifyContent : 'center'
    },

    
    titleInput : {
        color : 'white',
        fontSize : 18 ,
        padding : 20,
        marginLeft : 5 
    },

    pushButton: {
        backgroundColor : '#E91E63',
        borderRadius : 50,
        borderColor : '#ccc',
        height: 60,
        width : 60 ,
        alignItems : 'center',
        justifyContent : 'center',
        elevation : 8,
        marginBottom : -45,
        zIndex : 10,
        marginRight :5
    },
    popButton: {
        backgroundColor : '#E91E63',
        borderRadius : 50,
        borderColor : '#ccc',
        height: 60,
        width : 60 ,
        alignItems : 'center',
        justifyContent : 'center',
        elevation : 8,
        marginBottom : -45,
        zIndex : 10
    },

    ButtonText : {
        color : 'white',
        fontSize : 16
    },

    scrollView : {
        flex : 1 ,
        marginBottom: 100
    },

    footer : {
        position : 'absolute',
        alignItems : 'center',
        bottom: 0,
        left : 0,
        right : 0
    },

    textInput : {
        alignSelf : 'stretch',
        color : '#fff',
        padding : 5 ,
        paddingTop :60 , 
        backgroundColor : '#252525' ,
        borderTopWidth : 12,
        borderTopColor : '#ededed'
    }

})