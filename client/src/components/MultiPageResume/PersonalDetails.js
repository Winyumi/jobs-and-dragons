import React, { Component } from 'react'
import axios from 'axios';
import {saveAs} from 'file-saver';

class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    formSubmit = (e) => {
        e.preventDefault();
        const data = this.props.values;
        console.log(data);
        axios.post('/create-pdf', data)
        .then(function (response) { console.log(response.data.data);})
        .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
        .then((res) => {
            console.log(res.data);
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

            saveAs(pdfBlob, 'Resume.pdf');
        });

    e.target.reset();

    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card">
                <div className="card-content">

                    <h3 className="card-title">Personal Info</h3>
                </div>
                <form onSubmit={this.formSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_account" placeholder="Name" name='name' type="text"  className="validate" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.name} required />
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <input id="icon_email" placeholder="Email" name='email' type="text" className="validate" onChange={handleChange}  defaultValue={values.status === 1 ? '' : values.email} required />
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">phone_iphone</i>
                            <input id="icon_cell" placeholder="Cell Phone" name='phone' type="text" className="validate" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.phone} required />
                        </div>
                        <div className="input-field col s6">
                        <i className="material-icons prefix">add_location</i>
                        <input id="icon_location" placeholder="Location" name='location' type="text" className="validate" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.location} required />
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s6">
                            <input type="text" placeholder="LinkedIn Link" name="linkedin" className="validate" defaultValue={values.status === 1 ? '' : values.linkedin} onChange={handleChange} />
                        </div>
                        <div className="input-field col s6">
                            <input type="text" placeholder="GitHub Link" name="github"  className="validate" defaultValue={values.status === 1 ? '' : values.github} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" placeholder="Skills (Separate each skill with a space and a comma)" name="skills"  className="validate" defaultValue={values.status === 1 ? '' : values.skills} onChange={handleChange} />
                        </div>
                    </div>
                 <div><button type="button" className="btn waves-effect waves-light">Next<i className="material-icons right">navigate_next</i></button></div>
                 <button type="submit" className="waves-effect waves-light btn">Download PDF<i className="material-icons right">file_download</i></button>
                </form>
            
            </div>
        )
    }
}


export default PersonalDetails;
