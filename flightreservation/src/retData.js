import React,{Component} from 'react';
class RetData extends Component{
    constructor(){
        super();
        this.state={users:[]};
    }
    render(){
        let info=this.state.users.map((user,index)=><tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.address.state}</td>
                <td>{user.address.zipcode}</td>
            </tr>
        );
        return <table>
            <tbody>
                {info}
            </tbody>
        </table>
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
        .then(data=>this.setState({users:data}))
    }
}
export default RetData;