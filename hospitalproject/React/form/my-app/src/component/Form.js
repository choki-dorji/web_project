import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state ={
            todoList:[],
            username: '',
            gender: ''
        }
        this.fetchApi = this.fetchApi.bind(this)

    }
    

    fetchApi() {
        fetch('http://127.0.0.1:8000/hospital/project/')
    
        .then(response => response.json())
        .then(data =>
            this.setState({
                todoList:data
            }))
    }
    componentDidMount(){
        this.fetchApi();
    }


    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlegenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    render() {
        var tasks = this.state.todoList;
        var rows = tasks.map((emp)=>
        <tr key={emp.id}>
                <td>{emp.patient_cid}</td>
                <td>{emp.patient_name}</td>
                <td>{emp.patient_age}</td>
                <td>{emp.Diagonisis}</td>
                <td>{emp.Description}</td>
                <td>{emp.Medicine}</td>
                <td>{emp.Doctor}</td>  

        
        
        </tr>
        );
        return (
                <div>
                    <h1>recieving</h1>
                    <table class="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">CID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Diagonisis</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Medicine</th>
                                        <th scope="col">Doctor</th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rows}
                                    </tbody>
                                </table>



                    
                    
                    
                </div>
           

           
        );
    }
}
export default Form;