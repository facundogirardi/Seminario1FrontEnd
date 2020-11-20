import React from "react";
import "react-sweet-progress/lib/style.css";
import AssessmentIcon from '@material-ui/icons/Assessment';
import MaterialTable from "material-table";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";



const EditableTable = ({ onRowAdd, onRowUpdate, selectedRow, deleteText, data, columns, setData, title, loading, options }) => {

    return (
        <>
            {
                loading ?
                    <CircularProgress />
                    :
                    (
                        <MaterialTable
                            icons={{ Filter: () => <div /> }} // 
                            title={title}
                            columns={columns}
                            paging
                            data={data}
                            options={{
                                actionsColumnIndex: -1,
                                ...options,
                                titleStyle: {
                                    fontSize: 24
                                }
                            }}
                            localization={{
                                header: {
                                    actions: "",
                                },
                                toolbar: {
                                    searchPlaceholder: "Busque encuesta"
                                },
                                body: {
                                    editRow: {
                                        deleteText: deleteText,
                                    },
                                },
                            }}

                            options={{
                                searchable: false,
                                filtering: true,
                                grouping: false,
                                search: false,
                                showTextRowsSelected: true,
                            }}
                            actions={[
                                {
                                    icon: '*',
                                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                                }
                            ]}
                        />
                    )
            }
        </>
    )
};

export default EditableTable;