import React, { useEffect, useState } from 'react';

import TopicsList from '../../../JSON/contributionTopics.json'
import { MaintenanceBreak } from '../MaintenanceBreak';

function ContributionTopics() {
    const [topicList, setTopicList] = useState([]);
    const [maintenanceBreakMessage, setMaintenanceBreakMessage] = useState(null);
    const [toShow, setToShow] = useState(true);

    useEffect(() => {
        //api call
        setTopicList(TopicsList.TopicList);
        if(TopicsList.MaintenanceBreakMessage.state){
            setToShow(false);
            if(TopicsList.MaintenanceBreakMessage.message){
                setMaintenanceBreakMessage(TopicsList.MaintenanceBreakMessage.message);
            }else{
                setMaintenanceBreakMessage("List will update soon...");
            }
           
        }else{
            setToShow(true);
        }
    })
    return (
        <div>
            {
                toShow?(
                     <ul className="icons-list">
                        <strong>
                            {
                                topicList.map((topic)=>(
                                    <li key={topic.id}><i className="fa fa-check-circle"></i>{topic.topicName}</li>
                                ))
                            }
                        </strong>
                    </ul>
                ) : (
                    <MaintenanceBreak message={maintenanceBreakMessage}/>
                    
                )
            }
           
        </div>
    );
}

export default ContributionTopics;
