import React, { Components, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageBanner from '../PageBanner';





function Register() {
  return (
    <div>
      <PageBanner name="Register" head="Programs" subhead="Register" info="We Are WCE Research Symposium" />





      <div id="content">
        <div className="container">
          <div className="page-content">
          < h3 className="classic-title"><span>Note</span></h3>
          <ul style={{ listStyleType: 'disc', marginLeft: '3%' }}>
            
            <li>  On account of ongoing Pandemic situation (COVID-19), the symposium will be organized via Virtual Mode (Online).</li>
            <li>  Publication of the paper in conference proceedings, Book of Abstracts, Participation in all technical sessions, for two days of the symposium and Certificate of Speaker/Attendance</li>
            <li>  Each author registration will cover only one paper.</li>
            <li>  List of selected papers will be published on the symposium website.</li>

            </ul>
            <br />
            <br />
            < h3 className="classic-title"><span>Registration Fee Details</span></h3>
            <br />
            <Table className="table table-striped">
              <thead>
                <th>Registration Type</th>
                <th className="text-center">Early Bird Registeration</th>
                <th className="text-center">Late Registeration</th>
              </thead>
              <tbody>
                <tr>
                  <td>Academia/Students</td>
                  <td className="text-center">INR 4000</td>
                  <td className="text-center">INR 4500</td>
                </tr>
                <tr>
                  <td>Industry Personnel</td>
                  <td className="text-center">INR 5000</td>
                  <td className="text-center">INR 5500</td>
                </tr>
                <tr>
                  <td>Attendee</td>
                  <td colspan="2" className="text-center">INR 1000</td>
                </tr>
                <tr>
                  <td>Co-Author</td>
                  <td colspan="2" className="text-center">INR 1000</td>
                </tr>
                <tr>
                  <td>Innovative Project Showcasing</td>
                  <td colspan="2" className="text-center">INR 300</td>
                </tr>
              </tbody>
            </Table>
            <h5>{/*<sup>*</sup>50% fee would be waived for registered IET members only in all categories */} </h5>

            <div style={{ margin: '0% 1%' }}>
              <h5>Upload your fee waiver application to the given drive folders. <sub><a href="asset/2021_Fee_waiver.docx"> (Fee Waiver Form Template) </a></sub></h5>
              <ul>
                <li><a href="https://drive.google.com/drive/folders/1rTO_0CU67I-wE28mjeYXkCAhUWSjEkj3?usp=sharing"> Google Drive folder for UG</a></li>
                <li><a href="https://drive.google.com/drive/folders/1WNPTAToUZlRVjNamS_4SOEPJYBC0LVNx?usp=sharing"> Google Drive folder for M.Tech</a></li>
                <li><a href="https://drive.google.com/drive/folders/1rTO_0CU67I-wE28mjeYXkCAhUWSjEkj3?usp=sharing"> Google Drive folder for P.H.D.</a></li>
                <sub style={{ color: 'red' }}>Note : Prefer your 'walchandsangli' domain email id for the links. Mention paper id in the doc name.</sub>
              </ul>
            </div>
            <br />

            Payment of appropriate registration fee can be initiated in favour of (Bank Account Details):
            <br />
            <br />
            <Table className="table table-light">
              <tbody>
                <tr>
                  <td>Account Number:</td>
                  <td>150710200003900</td>
                </tr>
                <tr>
                  <td>Account Name:</td>
                  <td>Director, Walchand College of Engineering Vishrambag, Sangli - 416415</td>
                </tr>
                <tr>
                  <td>Name of Bank: </td>
                  <td>Bank of India, Vishrambag, Sangli</td>
                </tr>
                <tr>
                  <td>IFSC Code:</td>
                  <td> BKID0001507 </td>
                </tr>
                <tr>
                  <td>MICR Code:</td>
                  <td>416013154</td>
                </tr>
                <tr>
                  <td>Branch Code:</td>
                  <td>BKID001507</td>
                </tr>
              </tbody>
            </Table>



            <div style={{ textAlign: 'center' }}>
              <form action="https://docs.google.com/forms/d/e/1FAIpQLSeVXgC5F9Mqi25oWfxFnge_Ei0UgywMgV59Sxlcy_pyJTEy2w/viewform?usp=sf_link">
                <button className="btn btn-lg btn-system"  type="submit">Register Now</button>
                
              </form>
            </div>
            <br />
            <br />


          </div>
        </div>
      </div>

    </div>

  );
}

export default Register;
