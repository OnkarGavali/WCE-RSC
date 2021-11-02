import React, { useEffect, useState } from 'react';


import PageBanner from '../PageBanner';

import regitrationJSON from '../../../JSON/Programs/registration.json'



function Register() {

  const [allData, setAllData] = useState([]);
  const [maintenanceBreakMessageStatus, setMaintenanceBreakMessageStatus] = useState(false);
  const [displayNoticeStatus, setDisplayNoticeStatus] = useState(false);
  const [toShow, setToShow] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setAllData(regitrationJSON);
      if(allData.maintenanceBreakState){
          setToShow(false);
      }else{
          setToShow(true);
      }
      setIsLoading(false)
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
                <div>Loading</div>
              ) : (
                <>
                  <h3 className="classic-title"><span>Note</span></h3>
                  {
                      <p style={{whiteSpace:'pre-line'}}>
                        {
                          allData.data.note
                        }
                      </p>
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
                       allData.data.regitrationFees ? (
                        allData.data.regitrationFees.map((tableData)=><tr key={tableData.index}>
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
                      allData.data.feeWaiver ? (
                        allData.data.feeWaiver.map((link)=><li key={link.index}><a href={`${link.link}` } target='_blank'> {link.text}</a></li>)
                      ) : null
                    }
                    {
                      allData.data.feeWaiverNotice ? (<sub style={{ color: 'red' }}>{allData.data.feeWaiverNotice}</sub>) : null
                    }
                  </ul>
                  
                    
                  <br/>
                  <h3 className="classic-title"><span>Bank Account</span></h3>
                  <p>Payment of appropriate registration fee can be initiated in favour of (Bank Account Details):</p>
                  <table className="table table-light table-bordered table-striped table-responsive table-condensed">
                    <tbody>
                      <tr>
                        <td>Account Number:</td>
                        <td>{allData.data.bankDetails.accountNo}</td>
                      </tr>
                      <tr>
                        <td>Account Name:</td>
                        <td>{allData.data.bankDetails.accountName}</td>
                      </tr>
                      <tr>
                        <td>Name of Bank: </td>
                        <td>{allData.data.bankDetails.nameOfBank}</td>
                      </tr>
                      <tr>
                        <td>IFSC Code:</td>
                        <td>{allData.data.bankDetails.IFSCCode}</td>
                      </tr>
                      <tr>
                        <td>MICR Code:</td>
                        <td>{allData.data.bankDetails.MICRCode}</td>
                      </tr>
                      <tr>
                        <td>Branch Code:</td>
                        <td>{allData.data.bankDetails.branchCode}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div style={{ textAlign: 'center' }}>
                    <form action={`${allData.data.regitrationFormLink}`}>
                      <button className="btn-large btn-system"  type="submit">Register Now</button>
                    </form>
                  </div>
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
