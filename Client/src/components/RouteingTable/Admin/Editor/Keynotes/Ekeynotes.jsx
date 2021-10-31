import React, { useState, useEffect } from 'react';
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
import Keynot from '../../../../../JSON/Keynote.json'
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

function Ekeynotes() {
    const classes = useStyles()
    const [inputFields, setInputFields] = useState(Keynot);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setInputFields(newInputFields);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(), Name: '', Designation: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    return (
        <div>
            <PageBanner name="Keynotes" head='Admin Panel' />
            <div id="content">
                <div className="container">
                    <div className="page-content">
                        <div className="col-md-12 ">

                            <br />
                            <h2 className="classic-title"><span>Edit Keynote Speakers</span></h2>


                            <h3>Keynote Speakers</h3>
                            <br />
                           
                            <form className={classes.root} onSubmit={handleSubmit}>
                                {inputFields.map(inputField => (
                                    <div key={inputField.id}>
                                        <div className="col-md-5">
                                            <input
                                                className="email"
                                                name="Name"
                                                placeholder="Name"
                                                variant="filled"
                                                value={inputField.name}
                                                onChange={event => handleChangeInput(inputField.id, event)}
                                            />
                                        </div>
                                        <div className="col-md-5 ">
                                            <input
                                                className="email"
                                                name="Designation"
                                                placeholder="Designation"
                                                variant="filled"
                                                value={inputField.designation}
                                                onChange={event => handleChangeInput(inputField.id, event)}
                                            />
                                        </div>
                                        <div className="col-md-2">
                                            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                                                <RemoveIcon />
                                            </IconButton>
                                            <IconButton
                                                onClick={handleAddFields}
                                            >
                                                <AddIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                ))}


                                <div className="col-md-10">
                                    <br />
                                    <br />

                                    <button
                                        className="btn-system btn-large"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        endIcon={<Icon>send</Icon>}
                                        onClick={handleSubmit}
                                        style={{}}
                                    >Save</button>
                                    <br />
                                    <br />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Ekeynotes;