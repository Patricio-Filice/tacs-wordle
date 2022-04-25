import * as React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const Tournaments = () => {

    const [data, setData] = React.useState({
        loading: true,
        rows: [],
        totalRows: 0,
        pageSize: 2,
        page: 1,
        sortBy: 'id',
        sortOrder:'ASCENDING',
      });
    
      const updateData = (k, v) => setData((prev) => ({ ...prev, [k]: v }));

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70, sortable: false, },
        { field: 'name', headerName: 'Name', width: 130, sortable: false, },
        { field: 'language', headerName: 'Language', width: 130, sortable: false, },
        { field: 'beginDate', headerName: 'Begin date', width: 130, sortable: false, },
        { field: 'endDate', headerName: 'End date', width: 130, sortable: false, },
        { field: 'state', headerName: 'State', width: 130, sortable: false, },
    ];
    const _rows = [
        { id: 1, name: 'Tournament', language: 'English', beginDate: '2022-05-23', endDate: '2022-06-24', state: 'READY' },
        { id: 2, name: 'Tournament2', language: 'Spanish', beginDate: '2022-07-03', endDate: '2022-08-15', state: 'READY' },
        { id: 3, name: 'Tournament3', language: 'English', beginDate: '2022-08-18', endDate: '2022-09-15', state: 'READY' },
        { id: 4, name: 'Tournament4', language: 'English', beginDate: '2022-10-01', endDate: '2022-11-01', state: 'READY' },
    ];

    function createData(
        id: number,
        name: string,
        language: string,
        beginDate: string,
        endDate: string,
        state: string,
    ) {
        return { id, name, language, beginDate, endDate, state };
    }

    // const handleGetPublicTournaments = async () => {
        

    // };

    //const [rows, setRows] = React.useState([])
    const request = React.useRef(true);
    
    React.useEffect(() => {
        
        async function handleGetPublicTournaments() {
            const url = 'http://localhost:8080/api/tournaments/public'
            const params = ['page='+data.page,'pageSize='+data.pageSize,'sortBy='+data.sortBy,'sortOrder='+data.sortOrder].join('&')
            const requestOptions = {
                method: 'GET',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await fetch(url + '?' + params);
            const responseJson = await response.json()
            const rows = responseJson.pageItems.map((item) => createData(item.id, item.Name, item.language, item.startDate, item.endDate, item.tournamentState));
            updateData("rows", rows);
            updateData("loading", false);
        }
        
        if (request.current === true) {
            handleGetPublicTournaments();
            request.current = false
        }
    }, [data.page]);


    return (
        <div style={{ height: '60%', width: '100%' }}>
            <DataGrid
                pagination
                loading={data.loading}
                rows={data.rows}
                columns={columns}
                //page={page-1}
                pageSize={data.pageSize}
                rowsPerPageOptions={[data.pageSize]}
                rowCount={6}
                paginationMode='server'
                onPageChange={(p, d) => {updateData("page", p + 1); request.current = true;} }
            />
        </div>
    )
}
export default Tournaments;