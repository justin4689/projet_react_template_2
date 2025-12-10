import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";

export type DataTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  title?: string;
  description?: string;
};

function DataTable<TData>({
  data,
  columns,
  title,
  description,
}: DataTableProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <h4 className="header-title">{title}</h4>
      {description && <p className="card-title-desc">{description}</p>}

      <div className="row mb-3">
        <div className="col-md-6 d-flex align-items-center">
          <label className="me-2 mb-0">Show</label>
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
          <span className="ms-2">entries</span>
        </div>
        <div className="col-md-6 text-md-end mt-2 mt-md-0">
          <label className="me-2 mb-0">Search:</label>
          <input
            className="form-control d-inline-block w-auto"
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
        </div>
      </div>

      <table
        className="table table-bordered dt-responsive nowrap"
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
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row align-items-center">
        <div className="col-sm-12 col-md-5">
          <div className="dataTables_info" role="status" aria-live="polite">
            {(() => {
              const page = table.getState().pagination.pageIndex;
              const size = table.getState().pagination.pageSize;
              const total = table.getFilteredRowModel().rows.length;
              const start = total === 0 ? 0 : page * size + 1;
              const end = Math.min(total, (page + 1) * size);
              return `Showing ${start} to ${end} of ${total} entries`;
            })()}
          </div>
        </div>
        <div className="col-sm-12 col-md-7">
          <div className="dataTables_paginate paging_simple_numbers text-md-end mt-2 mt-md-0">
            <button
              className="btn btn-sm btn-secondary me-2"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </button>

            {Array.from({ length: table.getPageCount() }, (_, index) => (
              <button
                key={index}
                className={`btn btn-sm ms-1 ${
                  table.getState().pagination.pageIndex === index
                    ? "btn-primary"
                    : "btn-outline-secondary"
                }`}
                onClick={() => table.setPageIndex(index)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="btn btn-sm btn-secondary ms-2"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataTable;
