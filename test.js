class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

class VietLong extends Component{
    render(){
        return(
            <Text> Hello from VietLong's component </Text>
        );
    }
}

class Greeting extends Component {
  render() {
    return (
      <Text style = {this.props.style}>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting style = {styles.style1} name='Rexxar' />
        <Greeting style = {styles.style2} name='Jaina' />
        <Greeting name='Valeera' />
        <VietLong />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    style1: {
        color :  'red',
        fontSize: 30,
    },
    style2: {
        color :  'blue',
        fontSize: 15,
    },
});

export default LotsOfGreetings;