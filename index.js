// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )



const Title = function() {
    return (<h1>My Awesome Color Palette</h1>)
  }
  
class ColorComponent extends React.Component {
    state = {
        color: green
    }

    // constructor(props){

    // }
    handleClick(){

        let newColor = 'purple'
        if (this.state.color === 'purple') {
            newColor = 'blue'
        }
        this.setState({newColor})
        alert('Color changed!');
    }
    render(){
        const style = {
            color: this.state.color
        }
        return <div>
            <button onClick={this.handleClick}>New Color</button>
        </div>
    }
}

  const App = function() {
    return (<div>
        <Title />
       <ColorComponent name="Color 1" />
    </div>)
  }

ReactDOM.render(<App />, document.getElementById('root'))













// const colorComponent1 = function() {
//     return (<div>
    

//     </div>)
//   }

//   const colorComponent2 = function() {
//     return (<div>
      

//     </div>)
//   }

// const colorComponent3 = function() {
//     return (<div>
      

//     </div>)
//   }

// const colorComponent4 = function() {
//     return (<div>
      

//     </div>)
//   }

// const colorComponent5 = function() {
//     return (<div>
      

//     </div>)
//   }
