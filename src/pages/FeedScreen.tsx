import {
  Divider, IconButton,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  StackDivider,
  Text, useColorMode
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import TweetForm from "../App/Forms/Forms";
import Trending from "../App/Trending/Trending";

const Tweets = new Array(12).fill(true).map((_, index) => index);

const FeedScreen: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Stack direction="row" divider={<StackDivider />} height="100%" spacing={0}>
      <Stack divider={<StackDivider />} maxWidth={600} spacing={0} width="100%">
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          paddingX={4}
          paddingY={3}
        >
          <Text fontSize="xl" fontWeight="bolder">
            Inicio
          </Text>
          <IconButton
            aria-label="toggle theme"
            size="sm"
            onClick={toggleColorMode}
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          />
        </Stack>
        <Stack direction="row" paddingX={4} paddingY={2} spacing={4}>
          <Image
            borderRadius="50%"
            height={{base: 0, md:12}}
            src="https://pbs.twimg.com/profile_images/1274418371254267905/2org4imX_400x400.jpg"
            width={{base: 0, md:12}}
          />
          <TweetForm />
        </Stack>
        <Divider borderBottomWidth={5} borderTopWidth={5} />
        <Stack
          divider={<StackDivider />}
          flex={1}
          maxHeight="100vh"
          overflowY="auto"
          spacing={6}
        >
          {Tweets.map((index) => (
            <Stack key={index} spacing={4} p={2}>
              <Stack direction="row" spacing={4}>
                <SkeletonCircle height={12} width={12} />
                <Stack>
                  <Skeleton height={6} width="120px" />
                  <Skeleton height={3} width="80px" />
                </Stack>
              </Stack>
              <SkeletonText height={20} noOfLines={6} />
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Trending />
    </Stack>
  );
};

export default FeedScreen;
