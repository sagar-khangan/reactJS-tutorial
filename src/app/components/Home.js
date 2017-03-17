import React from "react";

export class Home extends React.Component{
    render(){
        console.log(this.props);
        let content="";
        if(true){
            content = <p>Hello</p>
        }
        return(
                <div>
                    <p>In a new component</p>
                    <p>Your Name is {this.props.name} age is {this.props.age}</p>
                    <p>User => Name is {this.props.user.name} Hobbies are </p>
                    <ul>
                        {this.props.user.hobby.map((hobby,i)=><li key={i}>{hobby}</li>)}
                    </ul>
                    {content}
                    {"code"}<br/>
                    {5==2 ?"yes":"No"}
                    {this.props.children}
                </div>
        );
    }
}

Home.PropTypes = {
    name:React.PropTypes.string,
    age:React.PropTypes.number,
    user:React.PropTypes.object,
    children:React.PropTypes.element.isRequired
}