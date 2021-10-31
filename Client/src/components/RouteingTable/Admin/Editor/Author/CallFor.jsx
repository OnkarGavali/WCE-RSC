import React, { useState,useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import FormControl from '@material-ui/core/FormControl';
import PageBanner from '../../../PageBanner';
import { v4 as uuidv4 } from 'uuid';
import TopicsList from '../../../../../JSON/contributionTopics.json';



import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    button: {
        margin: theme.spacing(1),
    }
}))

function CallFor() {
    const classes = useStyles()
    const [topicList, setTopicList] = useState([{ id: uuidv4(), TopicName: ' '
}]);
    useEffect(() => {
        //api call
        setTopicList(TopicsList.TopicList);
    }
    );
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), TopicName: ' '
         },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", topicList);
    };


    const handleChangeInput = (id, event) => {
        const newTopicsList = topicList.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setTopicList(newTopicsList);
    }

    const handleAddFields = () => {
        setTopicList([...topicList, { id: uuidv4(), TopicName: ' ' }])
    }

    const handleRemoveFields = id => {
        const values = [...topicList];
        values.splice(values.findIndex(value => value.id === id), 1);
        setTopicList(values);
    }



    return (
        <div>
            <PageBanner name="Call For Contribution" head='Admin Panel' />
            <div id="content">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-6">

                            <br />
                            <h2 className="classic-title"><span>Edit Call For Contribution</span></h2>
                            <h3>Call for Contribution Info Para</h3>
                            <br/>
                            
                            <h3>Topics for Contribution</h3>
                            <br/>
                            <form className={classes.root} onSubmit={handleSubmit}>
                                {topicList.map(topic => (
                                    <div key={topic.id}>
                                        <FormControl    >
                                            <input
                                                className="email"
                                                name="TopicName"
                                                placeholder="Topic Name"
                                                value={topic.topicName}    
                                                variant="filled"
                                                style={{ width: '400px' }}

                                                
                                                onChange={event => handleChangeInput(topic.id, event)}
                                            />
                                        </FormControl>

                                        <IconButton disabled={topicList.length === 1} onClick={() => handleRemoveFields(topic.id)}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={handleAddFields}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </div>
                                ))}
                                <button
                                    className="btn-system btn-large"

                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    endIcon={<Icon>send</Icon>}
                                    onClick={handleSubmit}
                                >Save</button>
                            </form>
                            <br />
                            <br />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default CallFor;