import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Avatar,
  WrapItem,
} from "@chakra-ui/react";

const AvatarComp = ({ name, url }) => {
  return (
    <WrapItem>
      <Avatar name={name} src={url} />
    </WrapItem>
  );
};

export default function TableElement({ employees }) {
  console.log(employees);
  return (
    <>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Age</Th>
            <Th>Phone</Th>
            <Th>Address</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((emp) => {
            const fullName = `${emp.name.title} ${emp.name.first} ${emp.name.last}`;
            return (
              <Tr key={Math.random()}>
                <Td>
                  <AvatarComp name={fullName} url={emp.picture.thumbnail} />{" "}
                  {fullName}
                </Td>
                <Td>{emp.email}</Td>
                <Td>{emp.dob.age}</Td>
                <Td>{emp.cell}</Td>
                <Td>{`${emp.location.street.number} ${emp.location.street.name}`}</Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
}
