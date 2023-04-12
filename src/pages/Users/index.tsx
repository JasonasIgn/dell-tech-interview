import {
  Center,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { User } from "types";
import { FC } from "react";

interface UsersPageProps {
  users: User[];
}

export const UsersPage: FC<UsersPageProps> = ({ users }) => {
  return (
    <Center flexDir="column">
      <Heading>Users</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th >Name</Th>
              <Th>Email</Th>
              <Th>City</Th>
              <Th>Company</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map(({ address, company, email, name }) => {
              return (
                <Tr key={email}>
                  <Td>{name}</Td>
                  <Td>{email}</Td>
                  <Td>{address.city}</Td>
                  <Td>{company.name}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
};
