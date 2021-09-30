import React, { Components, useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import PageBanner from '../PageBanner';





function Adv_Committee()
{
    return (
        <div>
            <PageBanner name="Advisory Committee" head="Organisation" subhead="Advisory Committee" info="We Are WCE Research Symposium" />
        </div>
    );
}

export default Adv_Committee;
