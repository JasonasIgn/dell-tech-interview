import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { User } from "types";
import { FC } from "react";

interface NewUserPageProps {
  users: User[];
  setUsers: (users: User[]) => void;
}

export const NewUserPage: FC<NewUserPageProps> = ({ setUsers, users }) => {
  return (
    <Center flexDir="column">
      <Heading>Add user</Heading>
      <Flex
        p={4}
        flexDir="column"
        as="form"
        onSubmit={(e: any) => {
          e.preventDefault();
          const newUser = {
            name: e.target[0].value,
            email: e.target[1].value,
            address: {
              city: e.target[2].value,
            },
            company: {
              name: e.target[3].value,
            },
          } as User;
          setUsers([...users, newUser]);
          e.target.reset();
        }}
      >
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input placeholder="Name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>City</FormLabel>
          <Input placeholder="City" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Company name</FormLabel>
          <Input placeholder="Company name" />
        </FormControl>

        <Button type="submit" mt={4}>
          Add user
        </Button>
      </Flex>
    </Center>
  );
};
