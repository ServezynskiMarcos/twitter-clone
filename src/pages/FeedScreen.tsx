import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Tweets = new Array(12).fill(true).map((_, index) => index);

const FeedScreen: React.FC = () => {
  return (
    <Stack paddingY={4} spacing={6} divider={<StackDivider />} overflowY="auto" >
      {Tweets.map((index) => (
        <Stack key={index} spacing={4} >
          <Stack direction="row" spacing={4}>
            <SkeletonCircle height={12} width={12}/>
            <Stack>
            <Skeleton height={6} width="120px" />
            <Skeleton height={3} width="80px" />
            </Stack>
          </Stack>
          <SkeletonText height={20} noOfLines={6} />
        </Stack>
      ))}
    
    </Stack>
  );
};

export default FeedScreen;
