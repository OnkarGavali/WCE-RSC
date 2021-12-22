
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import Chair from "../../../images/publication/chair.png";
import Publications from './Publications';
import SponsorsOld from './SponsorsOld';
import data from '../../../JSON/Home/HomeBody.json';
import axios from 'axios';
import ImpDates from './ImpDates';

export const Sidebar = () => {
    return (
        <>
            <div className="col-md-4">
                
                {/* Registration button - start*/}
                <div className="tab-content">
                    <div className="latest-posts">
                        <h3 className="classic-title" id="notifications"><span>Registeration</span></h3>
                        <Link to="Programs/Register" style={{ marginLeft: '25%' }} className="btn btn-lg btn-system"> Register Now </Link>
                    </div>
                </div>
                {/* Registration button - end*/}

                {/* Important Dates - start*/}
                    <ImpDates/>
                {/* Important Dates - end*/}

                {/* Sponsors - start*/}
                    <SponsorsOld />
                {/* Sponsors - end*/}

                {/* Publication - start*/}
                    <Publications />
                {/* Publication - end*/}

                {/* Paper Submission link - start*/}
                <div className="tab-content">
                    <div className="latest-posts" >
                        <h3 className="classic-title" id="notifications"><span>Paper Submission</span></h3>
                        <a href={data.data.links.paperSubmission} target="_blank">
                            <img src={Chair}></img>
                        </a>
                    </div>
                </div>
                {/* Paper Submission link - end*/}

            </div>
        </>
    )
}
