import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import PageBanner from '../PageBanner';
import org from '../../../JSON/Organisation/organinsing.json';


function Org_Committee() {
    const [allData, setAllData] = useState('');
    const [convertedJSON, setConvertedJSON] = useState([])

    const [isLoading, setIsLoading] = useState(true);
    
    
    
    
    
    
    useEffect(() => {
        console.log('start of useEffect')
       setAllData(org);
       convertDataToTableFormat(org.organsingList);
       console.log(allData)
       setIsLoading(false)
       console.log('end of useEffect')
    }, [])
    

    const convertDataToTableFormat = (obj_list) => {
        let i=1;
        var li =[]
        obj_list.map((obj)=>{
            var r = obj.role
            obj.persons.map((per)=>{
                li = convertedJSON
                li.push({id:i,"role":r,"name":per.name,"designation":per.designation})
                setConvertedJSON(li)
                i=i+1;
                r=""
               
            })
           
        })
    }
    return (
        <div>
            {/* PageBanner - start */}
            <PageBanner name="Organising Committee" head="Organisation" subhead="Organising Committee" info="We Are WCE Research Symposium" />
            {/* PageBanner - end */}

            {console.log('page')}
            <div className="contenti">
                <div className="container">
                    <div className="page-content">

                        {/* Main Content - start */}
                        <div className="col-md-9">
                            {
                                isLoading ? (
                                    <div>Loading</div>
                                ) : (
                                    <>
                                    <h1 className="accent-color"> Organising Committee</h1>
                            
                                    <br />
                                    
                                    <table className="table table-responsive table-condensed table-bordered">
                                        <thead>
                                            <th>Role</th>
                                            <th>Name</th>
                                            <th>Designation</th>
                                        </thead>
                                    
                                        <tbody>
                                            {
                                                convertedJSON.map((Entry) => (
                                                    <tr key={Entry.id}>
                                                        <td>{Entry.role}</td>
                                                        <td>{Entry.name}</td>
                                                        <td>{Entry.designation}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    </>
                                )
                            }
                            {console.log('m')}
                            {console.log(convertedJSON)}
                        </div>
                        {/* Main Content - end */}

                        {/* Related Links - start */}
                        <div className ="col-md-3 sidebar right-sidebar">
                            <div className ="widget widget-categories">
                                <h4 className="accent-color">Related Links <span className ="head-line"></span></h4>
                                <ul>
                                    <li>
                                        <Link to="adv_committee">Advisory Committee</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        {/* Related Links - end */}


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Org_Committee;
