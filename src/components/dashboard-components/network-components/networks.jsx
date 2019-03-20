import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
    Button,
} from 'reactstrap';

class Networks extends React.Component {
	render() {
		return (
			<Card>
				<CardBody>
					<CardTitle>Networks</CardTitle>
					<div className="feed-widget">
						<ul className="list-style-none feed-body m-0 pb-3">
							<li className="feed-item">
								<div className="feed-icon bg-info">
									<i className="ti-signal"></i>
								</div>
								Teachers
								<span className="ml-auto mr-4 font-12 text-muted">
                          			<Button className="btn" color="primary" size="sm">View</Button>
								</span>
							</li>
							<li className="feed-item">
								<div className="feed-icon bg-info">
									<i className="ti-signal"></i>
								</div>
								Teachers
								<span className="ml-auto mr-4 font-12 text-muted">
                          			<Button className="btn" color="primary" size="sm">View</Button>
								</span>
							</li>
							<li className="feed-item">
								<div className="feed-icon bg-info">
									<i className="ti-signal"></i>
								</div>
								Teachers
								<span className="ml-auto mr-4 font-12 text-muted">
                          			<Button className="btn" color="primary" size="sm">View</Button>
								</span>
							</li>
							<li className="feed-item">
								<div className="feed-icon bg-info">
									<i className="ti-signal"></i>
								</div>
								Teachers
								<span className="ml-auto mr-4 font-12 text-muted">
                          			<Button className="btn" color="primary" size="sm">View</Button>
								</span>
							</li>
							<li className="feed-item">
								<div className="feed-icon bg-info">
									<i className="ti-signal"></i>
								</div>
								Teachers
								<span className="ml-auto mr-4 font-12 text-muted">
                          			<Button className="btn" color="primary" size="sm">View</Button>
								</span>
							</li>
						</ul>
					</div>
				</CardBody>
			</Card>
		);
	}
}

export default Networks;
