import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

class Extras extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    formSubmit = (e) => {
        e.preventDefault();
        
        this.props.submitted();
        this.props.nextStep();
        const data = this.props.values;
        console.log(data);

        axios.post('/create-pdf', data)
            
            .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Resume.pdf');
            });

        e.target.reset();

    }


    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card">
                <div className="card-content">
                    <h3 className="card-title">Miscellaneous</h3>
                </div>
                <form onSubmit={this.formSubmit}>
                    <div className="row">

                        <div className="input-field col s12">
                            <input type="text" name="extra_1"  placeholder="Languages" defaultValue={values.status === 1 ? '' : values.extra_1} onChange={handleChange} required />
                        </div>
                        <div className="input-field col s12">
                            <input type="text" name="extra_2" placeholder="Hobbies" defaultValue={values.status === 1 ? '' : values.extra_2} onChange={handleChange} required />
                        </div>
                    </div>
                    <br />
                    <div className="row">

                        <div className="input-field col s12">
                            <input type="text" name="extra_3" id="extra_3" placeholder="Activity/Achievement" defaultValue={values.status === 1 ? '' : values.extra_3} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn pulse">Download PDF<i className="material-icons">file_download</i></button>
                    </div>
                </form>
            </div>

        )
    }
}

export default Extras;
