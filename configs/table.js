// $('#example').DataTable({
//     dom: 'Bfrtip',
//     buttons: [
//         'pageLength', 'searchBuilder', 'copy', 'csv', 'excel', 'pdf', 'print'
//     ],
//     lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
//     scrollY: 500,
//     scrollCollapse: true

// });

let $example = $('#example');

$example.DataTable({
    dom: 'Bfrtip',
    buttons: [
        'pageLength', 'searchBuilder', 'copy', 'csv', 'excel', {
            //! DO NOT REMOVE THIS
            extend: 'print',
            customize: function (win) {
                // Customize the printed document
                const table = $(win.document.body).find('table');

                // Find the index of the "Action" header
                const columnIndex = table.find('thead th:contains("Action")').index();

                // Hide all cells in the column
                table.find('tr').each(function () {
                    $(this).find('th, td').eq(columnIndex).hide();
                });
            }
        }, {
            extend: 'pdfHtml5',
            customize: function (doc) {
                // Get the DataTable instance
                const dataTable = $example.DataTable();

                // Find the index of the "Action" column
                const columnIndex = dataTable.column(':contains("Action")').index();

                // Iterate over the data and remove the "Action" column
                doc.content[1].table.body.forEach(function (row) {
                    row.splice(columnIndex, 1);
                });
                
            }
            
        },
    ],
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
    scrollY: 500,
    scrollCollapse: true
});
