import React, { Component } from 'react';
import './Header.css'
import Main from '../Main/Main';
import axios from 'axios'


 class Header extends Component {
    state ={
        data:[],
        search:'',
        loading:false
    }

    getDataFromJson(){
        this.setState({loading:true})
        axios.get("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences?confUrl:https://futureconevents.com/events/san-antonio/ ")
        .then((res) => {
            console.log(res);
            const value =[]
            value.push(...res.data.free,...res.data.paid)
            this.setState({data:value, loading:false})
        }).catch((err) => {
            console.log(err.response);
        })
    }

    handleChange =(event) => {
     this.setState({search:event.target.value})    
    }

    sortBydate=() => {
        this.setState({data: this.state.data.sort((a,b) =>  new Date(b.confStartDate)  - new Date(a.confStartDate) )})
    }
   componentDidMount(){
       this.getDataFromJson()
   }
  
    render() {
        const filterdData = this.state.data.filter((data) => {
            return data.country.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !==-1
        })
        return (
            <div className='Header_container'>
                <div className=' header_content align-items-center'>
                    <div className=' container text-center d-flex align-items-center'>
                    <div className="navbar-brand ml-4" style={{fontSize:"25px"}}>Confrence</div>

                    <div className="form-inline my-2  mx-auto">
      <input value={this.state.search} onChange={this.handleChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
                   
    </div>
                   
                </div>
                 {this.state.loading === true ? <div className='text-center' style={{fontSize:'30px'}}>loading........</div>:
                 <Main filterdData={filterdData} loading={this.state.loading} sortBydate={this.sortBydate}/>
                  }
            </div>
        )
    }
}

export default Header
