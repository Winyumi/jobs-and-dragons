import React, { Component } from 'react'

class Project extends Component {

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
                    <h3 className="card-title">Projects' Info</h3>
                </div>
                <form onSubmit={this.continue}>
                    <div className="row">

                        <div className="input-field col s12">
                            <input type="text" name="proj1_title"  placeholder="Title*" defaultValue={values.status === 1 ? '' : values.proj1_title} onChange={handleChange} required />
                        </div>
                        <div className="input-field col s12">
                            <input type="text" name="proj1_link" placeholder="Link"  defaultValue={values.status === 1 ? '' : values.proj1_link} onChange={handleChange} />
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" name="proj1_desc" placeholder="Description*" defaultValue={values.status === 1 ? '' : values.proj1_desc} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="row">
    
                        <div className="input-field col s12">
                            <input type="text" name="proj2_title"  placeholder="Title" defaultValue={values.status === 1 ? '' : values.proj2_title} onChange={handleChange}  />
                        </div>
                        <div className="input-field col s12">
                            <input type="text" name="proj2_link"  placeholder="Link" defaultValue={values.status === 1 ? '' : values.proj2_link} onChange={handleChange} />
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" name="proj2_desc" placeholder="Description" defaultValue={values.status === 1 ? '' : values.proj2_desc} onChange={handleChange}  />
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

export default Project;
