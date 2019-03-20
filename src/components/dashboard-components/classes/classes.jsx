import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
} from 'reactstrap';

class Classes extends React.Component {
	render() {
		return (
			<Card>
				<CardBody>
					<CardTitle>Classes</CardTitle>
					<div className="feed-widget">
						<ul className="list-style-none feed-body m-0 pb-3">
							<li className="feed-item">
								<div className="feed-icon bg-success">
									<i className="ti-book"></i>
								</div>
								Teachers
								<span className="ml-auto mr-4 font-12 text-muted">
									5 online
								</span>
							</li>
							<li className="feed-item">
								<div className="feed-icon bg-success">
									<i className="ti-book"></i>
								</div>
								Class 8
								<span className="ml-auto mr-4 font-12 text-muted">
									4 online
								</span>
							</li>
							<li className="feed-item">
								<div className="feed-icon bg-success">
									<i className="ti-book"></i>
								</div>
								Class 8
								<span className="ml-auto mr-4 font-12 text-muted">
									4 online
								</span>
							</li>
							<li className="feed-item">
								<div className="feed-icon bg-success">
									<i className="ti-book"></i>
								</div>
								Class 8
								<span className="ml-auto mr-4 font-12 text-muted">
									4 online
								</span>
							</li>
							<li className="feed-item">
								<div className="feed-icon bg-success">
									<i className="ti-book"></i>
								</div>
								Class 8
								<span className="ml-auto mr-4 font-12 text-muted">
									4 online
								</span>
							</li>
						</ul>
					</div>
				</CardBody>
			</Card>
		);
	}
}

export default Classes;
