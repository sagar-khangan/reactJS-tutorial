import React  from "react";
import {render} from "react-dom";
import {Header} from './components/Header';
import {Home} from './components/Home';


class App extends React.Component {
    render(){
       let  user={
        name:"kile",
        hobby:["cricket","football"]
        };

        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                      <Home name ={"Max"} age={20} user={user} >
                        <p>This is paragraph</p>
                          <Header/>
                      </Home>
                    </div>
                </div>
            </div>
          );
    }
}

render(<App/>, window.document.getElementById("app"));
