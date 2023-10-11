import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GenresSkeleton = () => {
  return (
    <Box padding="6">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
};

export default GenresSkeleton;
