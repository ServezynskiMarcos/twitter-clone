import {
  Button,
  CircularProgress,
  Icon,
  IconButton,
  Stack,
  StackDivider,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineFileImage,
  AiOutlineGif,
  AiOutlineSmile,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const TweetForm: React.FC = () => {
  return (
    <Stack divider={<StackDivider />} spacing={3} width="100%">
      <Textarea
        resize="none"
        fontSize="xl"
        maxLength={280}
        overflow="hidden"
        paddingY={4}
        placeholder="¿Qué está pasando?"
        rows={1}
        variant="unstyled"
      />
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Stack color="primary.500" direction="row" spacing={4} cursor="pointer">
          <Icon as={AiOutlineFileImage} height={5} width={5} />
          <Icon as={AiOutlineGif} height={5} width={5} />
          <Icon as={RiBarChartHorizontalLine} height={5} width={5} />
          <Icon as={AiOutlineSmile} height={5} width={5} />
          <Icon as={AiOutlineCalendar} height={5} width={5} />
        </Stack>
        <Stack direction="row" spacing={3}>
          <Stack
            alignItems="center"
            direction="row"
            divider={<StackDivider />}
            spacing={4}
          >
            <CircularProgress value={20} size={6} />
            <IconButton
              isRound
              aria-label="Add"
              colorScheme="primary"
              icon={<BsPlus size={24} />}
              size="1sm"
              variant="outline"
            />
          </Stack>
          <Button colorScheme="primary">Twittear</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TweetForm;
