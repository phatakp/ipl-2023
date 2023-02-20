import { Table } from "flowbite-react";

export const StakeTable = () => {
    return (
        <Table hoverable={true} striped={true} className="my-4">
            <Table.Head>
                <Table.HeadCell>Player</Table.HeadCell>
                <Table.HeadCell>Team</Table.HeadCell>
                <Table.HeadCell>Stake</Table.HeadCell>
                <Table.HeadCell>Result</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white relative">
                        P1
                        <div className="absolute left-0 top-1/4 text-xl font-bold -rotate-45 text-green-600">
                            D
                        </div>
                    </Table.Cell>
                    <Table.Cell>CSK</Table.Cell>
                    <Table.Cell>60</Table.Cell>
                    <Table.Cell>0.0</Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        P2
                    </Table.Cell>
                    <Table.Cell>KKR</Table.Cell>
                    <Table.Cell>30</Table.Cell>
                    <Table.Cell>0.0</Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        P3
                    </Table.Cell>
                    <Table.Cell>KKR</Table.Cell>
                    <Table.Cell>40</Table.Cell>
                    <Table.Cell>0.0</Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        P4
                    </Table.Cell>
                    <Table.Cell>KKR</Table.Cell>
                    <Table.Cell>50</Table.Cell>
                    <Table.Cell>0.0</Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        P5
                    </Table.Cell>
                    <Table.Cell>CSK</Table.Cell>
                    <Table.Cell>30</Table.Cell>
                    <Table.Cell>0.0</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};
