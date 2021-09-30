import React, { Components, useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import PageBanner from '../PageBanner';





function Org_Committee()
{
    return (
        <div>
            <PageBanner name="Organising Committee" head="Organisation" subhead="Organising Committee" info="We Are WCE Research Symposium" />
            

        </div>
    );
}

export default Org_Committee;
