import { Table } from "flowbite-react";

export const RuleTable = () => {
    return (
        <Table hoverable={true} striped={true} className="my-4">
            <Table.Head>
                <Table.HeadCell>Player</Table.HeadCell>
                <Table.HeadCell>Team</Table.HeadCell>
                <Table.HeadCell>Stake</Table.HeadCell>
                <Table.HeadCell>Result CSK win</Table.HeadCell>
                <Table.HeadCell>Result KKR win</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 relative">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        P1
                        <div className="absolute left-0 top-1/4 text-xl font-bold -rotate-45 text-green-600">
                            D
                        </div>
                    </Table.Cell>
                    <Table.Cell>CSK</Table.Cell>
                    <Table.Cell>60</Table.Cell>
                    <Table.Cell className="text-green-500">+200</Table.Cell>
                    <Table.Cell className="text-red-700">-60</Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        P2
                    </Table.Cell>
                    <Table.Cell>KKR</Table.Cell>
                    <Table.Cell>30</Table.Cell>
                    <Table.Cell className="text-red-700">-60</Table.Cell>
                    <Table.Cell className="text-green-500">+22.5</Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        P3
                    </Table.Cell>
                    <Table.Cell>KKR</Table.Cell>
                    <Table.Cell>40</Table.Cell>
                    <Table.Cell className="text-red-700">-80</Table.Cell>
                    <Table.Cell className="text-green-500">+30</Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        P4
                    </Table.Cell>
                    <Table.Cell>KKR</Table.Cell>
                    <Table.Cell>50</Table.Cell>
                    <Table.Cell className="text-red-700">-100</Table.Cell>
                    <Table.Cell className="text-green-500">+37.5</Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        P5
                    </Table.Cell>
                    <Table.Cell>CSK</Table.Cell>
                    <Table.Cell>30</Table.Cell>
                    <Table.Cell className="text-green-500">+40</Table.Cell>
                    <Table.Cell className="text-red-700">-30</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};
