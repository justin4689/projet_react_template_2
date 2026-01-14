import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { ColumnDef, SortingState } from "@tanstack/react-table";

export type DataTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  title?: string;
  description?: string;
};

function DataTable<TData>({ data, columns, title }: DataTableProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <h4 className="header-title">{title}</h4>

      <div className="row mb-3">
        <div className="col-md-6 d-flex align-items-center">
          <label className="me-2 mb-0">Affiche</label>
          <select
            className="form-select d-inline-block w-auto"
            value={pageSize}
            onChange={(e) => {
              const newSize = Number(e.target.value);
              setPageSize(newSize);
              table.setPageSize(newSize);
            }}
          >
            {[10, 25, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span className="ms-2">éléments</span>
        </div>
        <div className="col-md-6 text-md-end mt-2 mt-md-0">
          <label className="me-2 mb-0">Recherche:</label>
          <input
            className="form-control d-inline-block w-auto"
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="dataTables_wrapper">
        <table
          className="table table-bordered table-striped dt-responsive nowrap dataTable"
          style={{
            borderCollapse: "collapse",
            borderSpacing: 0,
            width: "100%",
          }}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={
                      (
                        header.column.columnDef.meta as
                          | { headerClassName?: string }
                          | undefined
                      )?.headerClassName
                    }
                  >
                    {header.isPlaceholder ? null : (
                      <button
                        type="button"
                        className="btn p-0"
                        onClick={header.column.getToggleSortingHandler()}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "6px",
                          width: "100%",
                          textAlign: "left",
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                          background: "transparent",
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <span
                          aria-hidden="true"
                          className="ms-1 d-inline-flex flex-column"
                          style={{ lineHeight: 1, fontSize: "0.7em" }}
                        >
                          <span
                            style={{
                              opacity:
                                header.column.getIsSorted() === "asc" ? 1 : 0.3,
                            }}
                          >
                            ↑
                          </span>
                          <span
                            style={{
                              opacity:
                                header.column.getIsSorted() === "desc"
                                  ? 1
                                  : 0.3,
                            }}
                          >
                            ↓
                          </span>
                        </span>
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={table.getAllLeafColumns().length}
                  className="text-center"
                >
                  Aucun elements correspondant trouvé
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={
                        (
                          cell.column.columnDef.meta as
                            | { cellClassName?: string }
                            | undefined
                        )?.cellClassName
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-5">
          <div className="dataTables_info" role="status" aria-live="polite">
            {(() => {
              const page = table.getState().pagination.pageIndex;
              const size = table.getState().pagination.pageSize;
              const total = table.getFilteredRowModel().rows.length;
              const start = total === 0 ? 0 : page * size + 1;
              const end = Math.min(total, (page + 1) * size);
              return `Affichage de ${start} à ${end} sur ${total} entrées`;
            })()}
          </div>
        </div>
        <div className="col-sm-12 col-md-7">
          <div className="dataTables_paginate paging_simple_numbers text-md-end ">
            <ul className="pagination justify-content-end">
              <li
                className={`paginate_button page-item previous ${
                  table.getCanPreviousPage() ? "" : "disabled"
                }`}
                id="datatable_previous"
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!table.getCanPreviousPage()) return;
                    table.previousPage();
                  }}
                  aria-disabled={!table.getCanPreviousPage()}
                  tabIndex={table.getCanPreviousPage() ? 0 : -1}
                >
                  Précédent
                </a>
              </li>

              {Array.from({ length: table.getPageCount() }, (_, index) => (
                <li
                  key={index}
                  className={`paginate_button page-item ${
                    table.getState().pagination.pageIndex === index
                      ? "active"
                      : ""
                  }`}
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={(e) => {
                      e.preventDefault();
                      table.setPageIndex(index);
                    }}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}

              <li
                className={`paginate_button page-item next ${
                  table.getCanNextPage() ? "" : "disabled"
                }`}
                id="datatable_next"
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!table.getCanNextPage()) return;
                    table.nextPage();
                  }}
                  aria-disabled={!table.getCanNextPage()}
                  tabIndex={table.getCanNextPage() ? 0 : -1}
                >
                  Suivant
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataTable;
