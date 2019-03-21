import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
} from 'reactstrap';

import groupnames from '../../../radiusgroups.json'

class Classes extends React.Component {
	render() {
		return (
			<Card>
				<CardBody>
					<CardTitle>Classes</CardTitle>
					<div className="feed-widget">
						<ul className="list-style-none feed-body m-0 pb-3">
							{
								groupnames.slice(1).map(g=>(
									<li key={g.groupname} className="feed-item">
										<div className="feed-icon bg-success">
											<i className="ti-book"></i>
										</div>
										{g.name}
										<span className="ml-auto mr-4 font-12 text-muted">
											5 online
										</span>
									</li>
								))
							}
						</ul>
					</div>
				</CardBody>
			</Card>
		);
	}
}

export default Classes;
