import React, { Component, PureComponent } from 'react';

function FuncChild( props ) {
  console.log( "FuncChild is called" );
  return (
    <div>
    </div>
  )
}
function FuncChildThatWillBeWrappedInMemo( props ) {
  console.log( "FuncChildThatWillBeWrappedInMemo is called" );
  return (
    <div>
      { console.log('console.log inside div in return of FuncChildThatWillBeWrappedInMemo is called') }
    </div>
  );

}
const FuncChildWithMemo = React.memo( FuncChildThatWillBeWrappedInMemo );

class ClassChild extends Component {
  constructor() {
    super()
    console.log("ClassChild constructor is called");
  }
  render() {
    console.log("ClassChild render is called");
    return (
      <div>
      </div>
    )
  }
}
class PureClassChild extends PureComponent {
  constructor() {
    super()
    console.log("PureClassChild constructor is called");
  }
  render() {
    console.log("PureClassChild render is called");
    return (
      <div>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    console.log("App constructor is called the first and only once");
  }
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 3000)
  }
  render() {
    console.log("App render is called");
    return (
      <div>
        <FuncChild/>
        <FuncChildWithMemo/>
        <ClassChild/>
        <PureClassChild/>
      </div>
    );
  }
}

export default App;
