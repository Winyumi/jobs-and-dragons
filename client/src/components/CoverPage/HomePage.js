import React from 'react';

import ReactPDF, {
	Document,
	Page,
} from '@react-pdf/renderer';


const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const props = this.props;
const today = new Date();

const CoverLetter = props => {
	<Document className="cpsummary">
		<Page size="A4">
			<header>
				<h4>{props.sender} | {props.position}</h4>
			</header>
			<div className="page" style={{ fontSize: '12px' }}>
				<div>
					<p>{monthNames[today.getMonth()]} {today.getDate()}, {today.getFullYear()}</p>
					<p style={{ color: '#ff3333' }}>To</p>
					<p>{props.receiver}</p>
					<p>{props.receiverCompany}</p>
				</div>
				<div>
					<p><span style={{ color: '#ff3333', fontSize: '12px' }}>From: </span>{props.sender}</p>
					<p><span style={{ color: '#ff3333', fontSize: '12px' }}>Address: </span> {props.address}</p>
					<p><span style={{ color: '#ff3333', fontSize: '12px' }}>Phone: </span> {props.phone}</p>
					<p><span style={{ color: '#ff3333', fontSize: '12px' }}>E-mail: </span> {props.email}</p>
				</div>
				<div>
					<p style={{ marginTop: '25px' }}>Hi {props.receiver},</p>
					<p style={{ fontSize: '12px' }}>{props.intro}</p>
					<p style={{ fontSize: '12px' }}>{props.body}</p>
					<p style={{ fontSize: '12px' }}>{props.close}</p>
					<p style={{ marginTop: '25px' }}>Sincerely,</p>
					<p>{props.sender}</p>
				</div>
			</div>
		</Page>
	</Document >
}

ReactPDF.render(<CoverLetter />, `${__dirname}/CoverLetter.pdf`);

export default CoverLetter;


// export default class Home extends Component {

// 	render() {
// 		const monthNames = ["January", "February", "March", "April", "May", "June",
// 			"July", "August", "September", "October", "November", "December"
// 		];
// 		const props = this.props;
// 		const today = new Date();
// 		return <Document className="cpsummary">
// 			<Page size="A4">
// 				<header>
// 					<h4>{props.sender} | {props.position}</h4>
// 				</header>
// 				<div className="page" style={{ fontSize: '12px' }}>
// 					<div>
// 						<p>{monthNames[today.getMonth()]} {today.getDate()}, {today.getFullYear()}</p>
// 						<p style={{ color: '#ff3333' }}>To</p>
// 						<p>{props.receiver}</p>
// 						<p>{props.receiverCompany}</p>
// 					</div>
// 					<div>
// 						<p><span style={{ color: '#ff3333', fontSize: '12px' }}>From: </span>{props.sender}</p>
// 						<p><span style={{ color: '#ff3333', fontSize: '12px' }}>Address: </span> {props.address}</p>
// 						<p><span style={{ color: '#ff3333', fontSize: '12px' }}>Phone: </span> {props.phone}</p>
// 						<p><span style={{ color: '#ff3333', fontSize: '12px' }}>E-mail: </span> {props.email}</p>
// 					</div>
// 					<div>
// 						<p style={{ marginTop: '25px' }}>Hi {props.receiver},</p>
// 						<p style={{ fontSize: '12px' }}>{props.intro}</p>
// 						<p style={{ fontSize: '12px' }}>{props.body}</p>
// 						<p style={{ fontSize: '12px' }}>{props.close}</p>
// 						<p style={{ marginTop: '25px' }}>Sincerely,</p>
// 						<p>{props.sender}</p>
// 					</div>
// 				</div>
// 			</Page>
// 		</Document >
// 	}
// }



