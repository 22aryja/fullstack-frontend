import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';
import { type ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { employees } from './dummy';

ModuleRegistry.registerModules([AllCommunityModule]);

export type Employee = {
    id: number;
    name: string;
    email: string;
    department: string;
    salary: number;
    startDate: string;
};

const TablePage = () => {
    const [rowData] = useState<Employee[]>(employees);

    const [colDefs] = useState<ColDef<Employee>[]>([
        { field: 'id' },
        { field: 'name' },
        { field: 'email' },
        { field: 'department' },
        { field: 'salary' },
        { field: 'startDate' },
    ]);

    return (
        <div className='h-full'>
            <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
    );
};

export default TablePage;
