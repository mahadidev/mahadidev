import React, { useEffect } from 'react';
import { RootState, useSelector } from '../../redux';
import { Container, ProfileGrid, Section } from '../subComponents';

const Clients = () => {
	const siteState = useSelector((state: RootState) => state.site);

	return (
		<Section>
			<Container>
				<ProfileGrid data={siteState.client} />
			</Container>
		</Section>
	);
};

export default Clients;
