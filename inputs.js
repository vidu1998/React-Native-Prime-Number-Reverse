import React,{Component} from 'react'
import{View,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native'

class Inputs extends Component {
  state={
    number:'',
   

  }
  handleNumber=(text)=>{
    this.setState({number:text})
  }
  

  check=(num)=>{

   const lastDigit2Str = String(num).slice(-1); 
const lastDigit2Num = Number(lastDigit2Str); 

if(lastDigit2Str==3 || lastDigit2Str==5)
{
    let rev_num = 0;
        while(num > 0)
        {
            rev_num = rev_num * 10 + num % 10;
            num = Math.floor(num / 10);
        }

  alert(rev_num + " is a Prime Number");

    }else{
      alert("not Return Value");

    }
  }
    render(){
      return(
        <View style={styles.container}>
        <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Number"
        placeholderTextColor="#9a73ef"
        onChangeText={this.handleNumber}/>   


        <TouchableOpacity 
        style={styles.submitButton}
        onPress={
          ()=>this.check(this.state.number)
        }>
        <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>
      )
    }


  }
export default Inputs

const styles=StyleSheet.create({
  container:{
    paddingTop:50
  },
  input:{
    margin:15,
    height:40,
    borderColor:'#7a42f4',
    borderWidth:1
  },
  submitButton:{
    backgroundColor:'#7a42f4',
    margin:15,
    height:40,
    padding:10,
  },
  submitButtonText:{
    color:'black'
  }
})