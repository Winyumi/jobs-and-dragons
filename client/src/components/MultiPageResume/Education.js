import React, { Component } from 'react'

export default class Education extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card">
                <div className="card-content">
                    <h3 className="card-title">Education Info</h3>
                </div>
                <form onSubmit={this.continue}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" name="edu1_school" placeholder="College/University*"  defaultValue={values.status === 1 ? '' : values.edu1_school} onChange={handleChange} required />
                        </div>
                        <div className="input-field col s6">
                            <input type="date" name="edu1_year" placeholder="Year*" defaultValue={values.status === 1 ? '' : values.edu1_year} onChange={handleChange} required/>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" name="edu1_qualification" placeholder="Qualification*" defaultValue={values.status === 1 ? '' : values.edu1_qualification} onChange={handleChange} required/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" name="edu1_desc" placeholder="Description*" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_desc} onChange={handleChange} required />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" name="edu2_school"  placeholder="School" defaultValue={values.status === 1 ? '' : values.edu2_school} onChange={handleChange} />
                        </div>
                        <div className="input-field col s6">
                            <input type="date" name="edu2_year" placeholder="Year" defaultValue={values.status === 1 ? '' : values.edu2_year} onChange={handleChange} />
                        </div>
                        <div className="input-field col s12">
                            <input type="text" name="edu2_qualification"  placeholder="Qualification" defaultValue={values.status === 1 ? '' : values.edu2_qualification} onChange={handleChange} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" name="edu2_desc"  placeholder="Description" defaultValue={values.status === 1 ? '' : values.edu2_desc} onChange={handleChange} />
                        </div>
                    </div>
                    <br />
                    <div className="container text-center">
                    <button type="button" className="btn waves-effect waves-light" onClick={this.back}><i className="material-icons left">navigate_before</i>Back</button>
                    <button type="submit" className="btn waves-effect waves-light">Next<i className="material-icons right">navigate_next</i></button>
                    </div>
                    <br />

                </form>

            </div>
        )
    }
}
