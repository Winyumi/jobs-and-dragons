import React, { Component } from 'react';


class Experience extends Component {

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
                    <h3 className="card-title">Experience Info</h3>
                </div>
                <form onSubmit={this.continue}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" placeholder='Institute/Organisation*' name="exp1_org" defaultValue={values.status === 1 ? '' : values.exp1_org} onChange={handleChange} required />
                        </div>
                        <div className="input-field col s6">
                            <input type="text" placeholder='Position*' name="exp1_pos" defaultValue={values.status === 1 ? '' : values.exp1_pos} onChange={handleChange} required />
                        </div>
                        <div className="input-field col s6">
                            <input type="date" placeholder='Start Date*' name="exp1_start" defaultValue={values.status === 1 ? '' : values.exp1_start} onChange={handleChange} required />
                        </div>
                        <div className="input-field col s6">
                        <input type="date" placeholder='End Date' name="exp1_end" defaultValue={values.status === 1 ? '' : values.exp1_end} onChange={handleChange} />
                    </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" name="exp1_desc" placeholder='Description*'  defaultValue={values.status === 1 ? '' : values.exp1_desc} onChange={handleChange} required />
                        </div>
                    </div>

                    <br/>
                    <div className="row">
                    <div className="input-field col s6">
                        <input type="text" placeholder='Institute/Organisation' name="exp2_org" defaultValue={values.status === 1 ? '' : values.exp2_org} onChange={handleChange} />
                    </div>
                    <div className="input-field col s6">
                        <input type="text" name="exp2_pos" placeholder='Position' defaultValue={values.status === 1 ? '' : values.exp2_pos} onChange={handleChange} />
                    </div>
                    <div className="input-field col s6">
                        <input type="date" name="exp2_start" placeholder='Start Date' defaultValue={values.status === 1 ? '' : values.exp2_start} onChange={handleChange} />
                    </div>
                    <div className="input-field col s6">
                    <input type="date" name="exp2_end" placeholder='End Date' defaultValue={values.status === 1 ? '' : values.exp2_end} onChange={handleChange} />
                </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" name="exp2_desc" placeholder='Description'  defaultValue={values.status === 1 ? '' : values.exp2_desc} onChange={handleChange} />
                    </div>
                </div>
                    <div className="container text-center">
                        <button type="button" className="btn waves-effect waves-light" onClick={this.back}><i className="material-icons left">navigate_before</i>Back</button>
                        <button type="submit" className="btn waves-effect waves-light">Next<i className="material-icons right">navigate_next</i></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Experience;
