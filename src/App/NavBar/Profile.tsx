import { Icon, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'


const Profile: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      padding={4}
      display={{base: "none", md:"flex"}}
    >
      <Stack alignItems="center" direction="row" spacing={3}>
        <Image
          borderRadius="50%"
          height={10}
          src="https://pbs.twimg.com/profile_images/1274418371254267905/2org4imX_400x400.jpg"
          width={10}
        />
        <Stack spacing={0}>
          <Text fontSize="sm" fontWeight="bold" lineHeight="normal">
            Leo Messi
          </Text>
          <Text fontSize="xs" lineHeight="normal" textStyle="translucid">
            @leomessi
          </Text>
        </Stack>
      </Stack>
      <Icon as={BsThreeDots} cursor="pointer"/>
    </Stack>
  )
}
export default Profile;