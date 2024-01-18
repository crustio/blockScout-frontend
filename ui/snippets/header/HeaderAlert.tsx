import { Flex } from '@chakra-ui/react';
import React from 'react';

import MaintenanceAlert from './alerts/MaintenanceAlert';

const HeaderAlert = () => {
  return (
    <Flex flexDir="column" rowGap={ 3 } mb={ 6 } _empty={{ display: 'none' }}>
      <MaintenanceAlert/>
    </Flex>
  );
};

export default React.memo(HeaderAlert);
