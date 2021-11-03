import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const getQuiz=async()=>{
        const url="https://opentdb.com/api.php?amount=10";
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results[0]);
    }
    console.log(questions);
    useEffect(()=>{
        getQuiz()
    }, [])
    return (
        <View style={styles.container}> 
            {questions && 
            (<View style={styles.parent}>
                <View style={styles.question}> 
                    <Text style={styles.questionText}> Q. Is this my first project? </Text>
                </View>
                <View style={styles.optionContainer}> 
                    <TouchableOpacity style={styles.optionButton}> 
                        <Text style={styles.options}> Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} >
                        <Text style={styles.options}> Of course </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton}> 
                        <Text style = {styles.options}> Hell Yeah </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton}> 
                        <Text style = {styles.options}> Done some API, Not working tho</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.bottom}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> SKIP </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.button}> 
                        <Text style={styles.buttonText}> NEXT </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Result')}> 
                        <Text style = {styles.buttonText}> END </Text>
                    </TouchableOpacity>
                </View>
            </View>)}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
        height: '100%',
    }, 
    question: {
        marginVertical: 16,
    },
    optionContainer: {
        marginVertical: 16,
        flex: 1
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#56b39b',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 32,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
    questionText: {
        fontSize: 28,
    },
    options: {
        fontSize: 18,
        fontWeight: '500',
        color: 'green'
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#82bfaf',
        paddingHorizontal: 12,
        borderRadius: 12
    },
    parent:
    {
        height: '100%',
    }
})

export default Quiz;