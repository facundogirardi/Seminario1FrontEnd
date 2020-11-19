import React from "react";
import "react-sweet-progress/lib/style.css";
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
                                    actions: "Responder",
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
                            editable={{
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            onRowUpdate(oldData, newData, resolve)
                                        }, 1000)
                                    }),
                            }}
                            options={{
                                searchable: false,
                                filtering: true,
                                grouping: false,
                                search:false,
                                showTextRowsSelected: true,
                                //filterComponent: (props) => <CustomDatePicker {...props} />,
                              }}
                        />
                    )
            }
        </>
    )
};

export default EditableTable;