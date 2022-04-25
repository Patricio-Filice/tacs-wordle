
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const Tournaments = ({tournaments}) => {
    

    

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70, sortable: false, },
        { field: 'name', headerName: 'Name', width: 130, sortable: false, },
        { field: 'language', headerName: 'Language', width: 130, sortable: false, },
        { field: 'beginDate', headerName: 'Begin date', width: 130, sortable: false, },
        { field: 'endDate', headerName: 'End date', width: 130, sortable: false, },
        { field: 'state', headerName: 'State', width: 130, sortable: false, },
    ];
    const rows = [
        { id: 1, name: 'Tournament', language: 'English', beginDate: '2022-05-23', endDate: '2022-06-24', state:'READY' },
        { id: 2, name: 'Tournament2', language: 'Spanish', beginDate: '2022-07-03', endDate: '2022-08-15', state:'READY' },
        { id: 3, name: 'Tournament3', language: 'English', beginDate: '2022-08-18', endDate: '2022-09-15', state:'READY' },
        { id: 4, name: 'Tournament4', language: 'English', beginDate: '2022-10-01', endDate: '2022-11-01', state:'READY' },
    ];
    
    
    return (      
        <div style={{ height: '60%', width: '100%' }}>  
        <DataGrid 
            rows={tournaments}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />
        </div>
    )
}
export default Tournaments;