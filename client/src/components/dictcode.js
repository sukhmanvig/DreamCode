import React, { Fragment, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../css/dictcode-style.css";
import "../css/nav.css";
import ChangeFontSize from "./ChangeFontSize.js";

const DictionaryCodeSnippets = () => {
    useEffect(() => {
        ChangeFontSize();
      }, []);

    
      return(<Fragment>
        <title>Learn If Statements</title>
        <body id="dictcode_body">
            <div id="dictCodeContent">
            <h1 className="dictcode_h1">Python Dictionaries</h1>
            <div className="dictNotes">
                <div id="fontsizer">
                <ul>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                </ul>
                </div>
            </div>
            <p>A Python dictionary is a data structure which stores data in <strong> key-value pairs </strong>. Each key and value is separated by a colon.</p>
	    <p>In the example below, 'akey' is a key which maps to a value 'avalue'.</p>
            <pre className="dictcode_pre">
                <code>{`my_dict = {'akey' : 'avalue'}`}</code>
            </pre>
            <p>
                A Python dictionary can be created using curly brackets <strong>({"{}"})</strong>. You may also prefill the dictionary with key-value pairs. 
            </p>
            <pre className="dictcode_pre">
                <code>
                {`my_empty_dict = {} # empty dictionary 
non_empty_dict = {'akey' : 'avalue'} # dictionary with prefilled key-value pairs`}
                </code>
            </pre>
            <p>
                Multiple key-value pairs are separated by commas.
            </p>
            <pre className="dictcode_pre">
                <code>
                {`multi_element_dict = {'key1' : 'value1', 'key2' : 'value2'}`}
                </code>
            </pre>
            <p>
                A key-value pair can have different types and a Python dictionary may store keys and values of different types as well.
            </p>
            <pre className="dictcode_pre">
                <code>
                {`my_dict = {'astringkey' : 1, 2 : 'astringvalue'}`}
                </code>
            </pre>
            <p>Each key in a Python dictionary is unique. This means that each key has exactly one value.</p>
            <pre className="dictcode_pre">
                <code>
                {`good_dict = {'key1' : 'value1'} # Good dictionary

# Bad dictionary, 'key1' : 'value2' overwrites the assignment 'key1' : 'value1'
bad_dict = {'key1' : 'value1', 'key1' : 'value2'}

print(bad_dict) # {'key1' : 'value2'}`}
                </code>
            </pre>
            <p>You can insert and modify key-value pairs using the assignment operator. If the key exists, the corresponding value is updated.</p>
	    <p>Otherwise, a new key-value pair is created.</p>
            <pre className="dictcode_pre">
                <code>
                {`my_dict = {}
my_dict['key1'] = 'value1' 

print(my_dict) # {'key1' : 'value1'}

my_dict['key1'] = 'value2' # Changes the key-value pair 'key1' : 'value1' to 'key1' : 'value2'
    
print(my_dict) # {'key1' : 'value2'}`}
                </code>
            </pre>
            <p>You can get the value of a key by using square brackets <strong>([])</strong> or with the <strong>get()</strong> method.</p>
            <p>If a key-value pair does not exist, using square brackets will throw an error whereas the get() method will return None.</p>
            <pre className="dictcode_pre">
                <code>
                {`my_dict = {'key1' : 'value1'}
my_dict['key1'] # returns 'value1'
my_dict['key2'] # Error
    
my_dict.get('key1') # returns 'value1'
my_dict.get('key2') # returns None`}
                </code>
            </pre>
            <p>
                You can remove a key-value pair from the dictionary using the <strong>pop()</strong> method, <strong>popitem()</strong> method or using the keyword <strong>del</strong>.</p>
                <p>The <strong>pop()</strong> method removes a key-value pair given the key. The removed value is returned.</p>
                <p>The <strong>del</strong> keyword removes a key-value pair given the value. Returns nothing.</p>
                <p>The <strong>popitem()</strong> method removes the last key-value pair inserted into the dictionary. The removed key-value pair is returned as a tuple.</p>
            <pre className="dictcode_pre">
                <code>
                {`my_dict =  {'name' : 'John', 'age': 16, 'followers' : 40000}

my_dict.pop('age') # returns 16

print(my_dict) # {'name' : 'John', 'followers' : 40000}

my_dict.popitem() # returns ('followers', 40000)

print(my_dict) # {'name' : 'John'}

del my_dict['name'] # returns nothing

print(my_dict) # {}
    
my_dict.pop('age') # Error
my_dict.popitem() # Error
del my_dict['name'] # Error`}
                </code>
            </pre>
            <p>
            The <strong>clear()</strong> method is used to delete all key-value pairs within a dictionary. The <strong>del</strong> keyword can be used to delete the entire dictionary itself.
            </p>
            <pre className="dictcode_pre">
                <code>
                {`my_dict = {'name' : 'Alex', 'age' : 18, 1 : 'hello'}

my_dict.clear() # Returns nothing

print(my_dict) # {}

del my_dict

print(my_dict) # Error`}
                </code>
            </pre>
            <Link to="/dictgame">
                <input
                type="submit"
                id="toGameButton"
                name="game"
                value="Dictionary Game"
                />
            </Link>
            </div>
        </body>
      </Fragment>)

}

export default DictionaryCodeSnippets;
