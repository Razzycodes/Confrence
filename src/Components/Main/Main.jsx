import React, { Component } from 'react';
import './Main.css'


 class Main extends Component {
 
    render() {
   
        return (
            <div className='Main_container'>
             
                {this.props.loading === true ? <div className='text-center' style={{fontSize:'30px'}}>loading....</div> : 
                <div className='container-fluid' >
                     <div className='container' style={{top:'8rem'}}>
               
                    <div className='mr-auto'>
                    <button className='btn btn-secondary btn-sm' onClick={this.props.sortBydate}>Sort By Date</button>
                    </div>
                   
                   
                  
                   
               
                </div>
                <div className='d-flex flex-wrap justify-content-center p-3'>
                    
                     {this.props.filterdData.map((data, id) => {
                         return(
                             <div key={id} >
                                 <div style={{border:'1px solid grey', height:'400px'}}>

                                  <div className='image_container'>
                                  <img className='img-fluid' src={data.imageURL} alt='ImageUrl'  style={{width:'100%', height:'100%'}} />
                                  </div>
                                  <div className='d-flex flex-column'>
                                  <div>{data.country}</div>
                                  <div>{data.entryType}</div>
                                  <div>{` ${data.confName}`}</div>
                                  <div>{`Date: ${data.confStartDate}`}</div>
                                  {/* <div style={{maxWidth:'100px'}}>{data.venue}</div> */}
                                  <a href={data.confRegUrl} >Confrence Link</a>
                                  </div>
                                 
                                  </div>
                             </div>
                         )
                     })}
                    </div>
                    </div>}

                
            </div>
        )
    }
}

export default Main