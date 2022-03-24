import React, { Component } from 'react';


class Create extends Component {
  
    constructor(props) {
        super(props);
        // this.show = this.show.bind(this);
      }
    
    

    
    fetchApi() {
        var a =  document.getElementById('cid').value
        var b =  document.getElementById('name').value
        var c =  document.getElementById('age').value
        var d =  document.getElementById('dia').value

        var e =  document.getElementById('medicine').value
        var f =  document.getElementById('physician').value
        var g =  document.getElementById('description').value
        
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
        console.log(e)
        console.log(f)
        console.log(g)



        fetch('http://127.0.0.1:8000/hospital/new/register/', {
            method: "post",
            headers: {
                "Accept": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
                "Content-Type": "application/json",
        
            },
        
            body: JSON.stringify(
              {patient_cid:a, 
                patient_name: b,
                patient_age: c,
                Diagonisis: d,
                Description:g,
                Medicine:e,
                Doctor: f,
                
            
            })
        })
           .then(res => res.json())
            .then(data => console.log(data));
    
      }
    

    render() {
        return (
            <div>
        
            <div className="input-group mb-3">
            <span className="input-group-text" >Citizen Identity</span>
            <input type="integer" className="form-control"  aria-label="Username" aria-describedby="basic-addon1" id="cid"/>
            </div>

            
            <label for="basic-url" className="form-label">Patients Details</label>
            <div className="input-group mb-3">
            <span className="input-group-text">Name</span>
            <input type="text" className="form-control" id="name" aria-describedby="basic-addon3"/>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text">Age</span>
            <input type="text" className="form-control"  aria-label="Username" id='age'/>
            </div>

            <div>
           
            <div className="input-group mb-3">
            <span className="input-group-text" >Diagonisis</span>
            <input type="text" className="form-control" id="dia" aria-describedby="basic-addon3"/>
            </div>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text">Medicine</span>
            <input type="text" className="form-control" id="medicine" aria-describedby="basic-addon3"/>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text">Physician</span>
            <input type="text" className="form-control" id="physician" aria-describedby="basic-addon3"/>
            </div>


            <div className="input-group">
            <span className="description">Diagonisis Description</span>
            <textarea className="form-control" aria-label="With textarea" id = "description"></textarea>
            </div>
            <br></br>

            <a className='btn btn-success' onClick={this.fetchApi} href="#">Enter</a>
         
            </div>
        );
    }
}

export default Create;