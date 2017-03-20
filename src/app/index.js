import React  from "react";
import {render} from "react-dom";
import {Header} from './components/Header';
import {Home} from './components/Home';


class App extends React.Component {

    constructor(){
        super();
        this.state={
            homeLink:"home",
            homeMounted:true
        }
    }
    onGreet(){
        alert("hiiii");
    }

    onChangeLinkName(newName){
        this.setState(
            {
                homeLink:newName
            }
        )
    }
    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }
    render(){
        let homeCmp = "";
        if(this.state.homeMounted){
            homeCmp = (

                <Home name ={"Max"}
                initialAge={20}
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                initialLink={this.state.homeLink}
                />
            )
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                <hr/>
                        <button onClick={this.onChangeHomeMounted().bind(this)} className="btn btn-primary">Un Mount Home</button>
                    </div>
                </div>

            </div>
          );
    }
}
render(<App/>, window.document.getElementById("app"));
