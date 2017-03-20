import React from "react";

export class Home extends React.Component{

    constructor(props){
        super();
        this.state= {
            age:props.initialAge,
            status:0,
            homeLink:props.initialLink
        };
        setTimeout(()=>{
            this.setState({
                status:1
            })
        },3000)
        console.log("constructor")
    }
    componentWillMount(){
        console.log("component will mount")
    }
    componentDidMount(){
        console.log("component did mount")
    }
    componentWillRecieveProps(nextProps){
        console.log("component will recieve props",nextProps)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("should component update",nextProps,nextState);
        if(nextState.status === 1){
            return false;
        }
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log("component will update",nextProps,nextState)
    }
    componentDidUpdate(prevProps,prevState){
        console.log("component did update",prevProps,prevState)
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    onMakeOlder(){
        this.setState({
            age: this.state.age+3
        })
    }
    onMakeYoung(){
        this.setState({
            age: this.state.age-3
        })
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }
    onHandleChange(event){
        this.setState({
            homeLink:event.target.value
        })
    }
    render(){
        return(
            <div>
                <p>In a new component</p>
                <p>Your Name is {this.props.name}and age is {this.state.age}</p>
                status {this.state.status}
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn  btn-primary">Make Me older</button>
                <hr/>
                <button onClick={() => this.onMakeYoung()} className="btn  btn-primary">Make Me Younger</button>
                <hr/>
                <button  onClick={this.props.greet} className="btn  btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event)=> this.onHandleChange(event)}/>
                <button  onClick={this.onChangeLink.bind(this)} className="btn  btn-primary">Change Head</button>
            </div>
        );
    }
}

Home.PropTypes = {
    name:React.PropTypes.string,
    initalAge:React.PropTypes.number,
    greet:React.PropTypes.func,
    initialLink:React.PropTypes.string

}