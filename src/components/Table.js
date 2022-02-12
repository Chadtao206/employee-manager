import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Avatar,
  WrapItem,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import DrawerContext from "../contexts/DrawerContext";

const AvatarComp = ({ name, url }) => {
  return (
    <WrapItem>
      <Avatar name={name} src={url} />
    </WrapItem>
  );
};

export default function TableElement({ employees }) {
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const { searchInput } = useContext(DrawerContext);
  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);

  useEffect(() => {
    const input = searchInput.toLowerCase();
    //filter employees based on search input
    const filtered = employees.filter(
      (emp) =>
        emp.name.first.toLowerCase().includes(input) ||
        emp.name.last.toLowerCase().includes(input) ||
        emp.email.toLowerCase().includes(input)
    );
    setFilteredEmployees(filtered);
  }, [searchInput, employees]);

  console.log("IN THE TABLE COMPONENT!", searchInput);

  return (
    <>
      <Table variant="striped" colorScheme="cyan">
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
          {filteredEmployees.map((emp) => {
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
