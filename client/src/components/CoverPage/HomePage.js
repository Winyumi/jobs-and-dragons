import React, { Component } from 'react';
import { Document, Page } from "@react-pdf/renderer";

export default class Home extends Component {

  render() {
		const monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		];
		const props = this.props;
		const today = new Date();
    return <Document classname="cpsummary">
                <Page size="A4">
                    <header>
						<h4>{props.sender}</h4>
						<h4>{props.position}</h4>
                    </header>
					<div className="page">
                            <div>
                                <p>{monthNames[today.getMonth()]} {today.getDate()}, {today.getFullYear()}</p>
								<p style={{color: '#ff3333'}}>To</p>
								<p>{props.receiver}</p>
								<p>{props.receiverCompany}</p>
                            </div>
							<div>
								<p><span style={{color: '#ff3333'}}>From: </span>{props.sender}</p>
								<p><span style={{color: '#ff3333'}}>Address: </span> {props.address}</p>
								<p><span style={{color: '#ff3333'}}>Phone: </span> {props.phone}</p>
								<p><span style={{color: '#ff3333'}}>E-mail: </span> {props.email}</p>
							</div>
					    <div>
							<p style={{marginBottom: '50px'}}>Hi {props.receiver},</p>
							<p style={{fontSize: '14px'}}>{props.message}</p>
							<p style={{ marginTop: '50px' }}>Sincerely,</p>
							<p>{props.sender}</p>
						</div>
					</div>
				</Page>
      </Document >
  }
}

