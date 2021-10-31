import React, { useEffect, useState } from 'react';

import TopicsList from '../../../JSON/contributionTopics.json'

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
                    <div className="call-action call-action-boxed call-action-style1 clearfix">
						<h2 className="primary">{maintenanceBreakMessage}</h2>
					</div>
                )
            }
           
        </div>
    );
}

export default ContributionTopics;
