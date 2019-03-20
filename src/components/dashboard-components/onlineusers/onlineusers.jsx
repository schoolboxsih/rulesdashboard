import React from "react";

import img1 from '../../../assets/images/users/1.jpg';

import {
	Card,
	CardBody,
	CardTitle,
	Table,
} from 'reactstrap';

class OnlineUsers extends React.Component {
	constructor(props) {
		super(props);

		this.state = { };
	}

	render() {
		return (
			<Card>
				<CardBody>
					<div className="d-flex align-items-center">
						<div>
							<CardTitle>Online users</CardTitle>
						</div>
					</div>
					<Table className="no-wrap v-middle" responsive>
						<thead>
							<tr className="border-0">
								<th className="border-0">User</th>
								<th className="border-0">Group</th>

								<th className="border-0">Since</th>
								<th className="border-0">Data Used</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className="d-flex no-block align-items-center">
										<div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
										<div className="">
											<h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span></div>
									</div>
								</td>
								<td>Elite Admin</td>

								<td>35</td>
								<td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
							</tr>
							<tr>
								<td>
									<div className="d-flex no-block align-items-center">
										<div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
										<div className="">
											<h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span></div>
									</div>
								</td>
								<td>Elite Admin</td>

								<td>35</td>
								<td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
							</tr>
							<tr>
								<td>
									<div className="d-flex no-block align-items-center">
										<div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
										<div className="">
											<h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span></div>
									</div>
								</td>
								<td>Elite Admin</td>

								<td>35</td>
								<td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
							</tr>
						</tbody>
					</Table>
				</CardBody>
			</Card>
		);
	}
}

export default OnlineUsers;