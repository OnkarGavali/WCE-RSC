import React, { useEffect, useState } from 'react';


import PageBanner from '../PageBanner';

import regitrationJSON from '../../../JSON/Programs/registration.json'
import axios from 'axios';
import { DisplayNotice } from '../DisplayNotice';
import MaintenanceBreak from '../MaintenanceBreak';



function Register() {

  
  const [isLoading, setIsLoading] = useState(true);
  const [toShow, setToShow] = useState(true);


  const [allData, setAllData] = useState([]);

  const [displayNotice, setDisplayNotice] = useState(false);
  const [displayNoticeHead, setDisplayNoticeHead] = useState('');
  const [displayNoticeContent, setDisplayNoticeContent] = useState('')

  const [maintenanceBreak, setMaintenanceBreak] = useState(false);
  const [maintenanceBreakHead, setMaintenanceBreakHead] = useState('');
  const [maintenanceBreakContent, setMaintenanceBreakContent] = useState('');

  const [note, setNote] = useState(null);
  const [regitrationFees, setRegitrationFees] = useState(null);
  const [feeWaiver, setFeeWaiver] = useState(null)
  const [feeWaiverNotice, setFeeWaiverNotice] = useState(null)
  const [bankDetails, setBankDetails] = useState(null)
  const [regitrationFormLink, setRegitrationFormLink] = useState(null)

  
  
  


  useEffect(() => {
    const getData = async () => {
      await axios.get(
        "get/registration"
        ).then((response)=>{
          if(response.data[0]){
              setAllData(response.data[0]); 
          } else {
              setMaintenanceBreak(true);
              setMaintenanceBreakHead("Problem in Fetching data")
              setMaintenanceBreakContent("Please Contact admin for details")
          }
        }).catch((e)=>{
          /* HANDLE THE ERROR (e) */
            console.log(e);
            setMaintenanceBreak(true);
            setMaintenanceBreakHead("Problem in Fetching data")
            setMaintenanceBreakContent("Please Contact admin for details")
        });
        setIsLoading(false);
    };
    getData();
    setIsLoading(false);
  },[])


  useEffect(() => {
    if(!isLoading){
        if(allData.maintenanceBreakStatus){
            setToShow(false);
            setMaintenanceBreak(allData.maintenanceBreakStatus) 
            setMaintenanceBreakHead(allData.maintenanceBreakHeading)
            setMaintenanceBreakContent(allData.maintenanceBreakContent) 
        } else {
            setToShow(true);
            if(allData.displayNoticeStatus){
                setDisplayNotice(allData.displayNoticeStatus)
                setDisplayNoticeHead(allData.displayNoticeHeading)
                setDisplayNoticeContent(allData.displayNoticeContent) 
            }
            if(allData.data){
              setNote(allData.data.note)
              setRegitrationFees(allData.data.regitrationFees)
              setFeeWaiver(allData.data.feeWaiver)
              setFeeWaiverNotice(allData.data.feeWaiverNotice)
              setBankDetails(allData.data.bankDetails)
              setRegitrationFormLink(allData.data.regitrationFormLink)
            }
        }
    }
   
  }, [allData])

  return (
    <div>
      {/* PageBanner - start */}
      <PageBanner name="Register" head="Programs" subhead="Register" info="We Are WCE Research Symposium" />
      {/* PageBanner - end */}
      
      <div className="contenti">
        <div className="container">
          <div className="page-content">
            {
              isLoading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {
                    toShow ? (
                      <React.Fragment>
                        {
                          displayNotice ? (
                              <DisplayNotice heading={displayNoticeHead} message={displayNoticeContent} />
                          ) : null
                        }
                        <h3 className="classic-title"><span>Note</span></h3>
                        {
                            note ? (
                              <p style={{whiteSpace:'pre-line'}}>
                                {note}
                              </p>
                            ) : null
                        }

                        <h3 className="classic-title"><span>Registration Fee Details</span></h3>
                        <table className="table table-striped table-responsive table-condensed ">
                          <thead>
                            <th>Registration Type</th>
                            <th className="text-center">Registeration</th>
                            <th className="text-center">Late Registeration</th>
                          </thead>
                          <tbody>
                          {
                            regitrationFees ? (
                              regitrationFees.map((tableData)=><tr key={tableData.index}>
                                  <td>{tableData.type}</td>
                                  <td className="text-center">{tableData.fees}</td>
                                  <td className="text-center">{tableData.late}</td>
                                </tr>
                              
                              )
                            ) : null
                            
                          }
                          </tbody>
                        </table>
                      
                        <h3 className="classic-title"><span>Upload Fee Waiver Details</span></h3>
                        <p>Upload your fee waiver application to the given drive folders. <sub><a href="/asset/2021_Fee_waiver.docx"> (Fee Waiver Form Template) </a></sub></p>

                        <ul>
                          {
                            feeWaiver ? (
                              feeWaiver.map((link)=><li key={link.index}><a href={`${link.link}` } target='_blank'> {link.text}</a></li>)
                            ) : null
                          }
                          {
                            feeWaiverNotice ? (<sub style={{ color: 'red' }}>{feeWaiverNotice}</sub>) : null
                          }
                        </ul>

                        <br/>
                        
                        <h3 className="classic-title"><span>Bank Account</span></h3>
                        {
                          bankDetails ? (
                            <>
                              <p>Payment of appropriate registration fee can be initiated in favour of (Bank Account Details):</p>
                              <table className="table table-light table-bordered table-striped table-responsive table-condensed">
                                <tbody>
                                  <tr>
                                    <td>Account Number:</td>
                                    <td>{bankDetails.accountNo}</td>
                                  </tr>
                                  <tr>
                                    <td>Account Name:</td>
                                    <td>{bankDetails.accountName}</td>
                                  </tr>
                                  <tr>
                                    <td>Name of Bank: </td>
                                    <td>{bankDetails.nameOfBank}</td>
                                  </tr>
                                  <tr>
                                    <td>IFSC Code:</td>
                                    <td>{bankDetails.IFSCCode}</td>
                                  </tr>
                                  <tr>
                                    <td>MICR Code:</td>
                                    <td>{bankDetails.MICRCode}</td>
                                  </tr>
                                  <tr>
                                    <td>Branch Code:</td>
                                    <td>{bankDetails.branchCode}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </>
                          ) : null
                        }
                        <div style={{ textAlign: 'center' }}>
                          {
                            regitrationFormLink ? (
                              <form action={`${regitrationFormLink}`}>
                                <button className="btn-large btn-system"  type="submit">Register Now</button>
                              </form>
                            ) : (
                              null
                            )
                          }
                          
                        </div>
                      </React.Fragment>
                    ) : (
                       <MaintenanceBreak heaading={maintenanceBreakHead} message={maintenanceBreakContent} />
                    )
                  }
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
