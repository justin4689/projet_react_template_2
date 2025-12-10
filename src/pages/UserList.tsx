import { useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import DataTable from "../components/DataTable";
import { Link } from "react-router-dom";

type User = {
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
};

function UserList() {
  const data = useMemo<User[]>(
    () => [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: 61,
        startDate: "2011/04/25",
        salary: "$320,800",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: 63,
        startDate: "2011/07/25",
        salary: "$170,750",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: 66,
        startDate: "2009/01/12",
        salary: "$86,000",
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: 22,
        startDate: "2012/03/29",
        salary: "$433,060",
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: 33,
        startDate: "2008/11/28",
        salary: "$162,700",
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: 61,
        startDate: "2012/12/02",
        salary: "$372,000",
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: 59,
        startDate: "2012/08/06",
        salary: "$137,500",
      },
      {
        name: "Rhona Davidson",
        position: "Integration Specialist",
        office: "Tokyo",
        age: 55,
        startDate: "2010/10/14",
        salary: "$327,900",
      },
      {
        name: "Colleen Hurst",
        position: "Javascript Developer",
        office: "San Francisco",
        age: 39,
        startDate: "2009/09/15",
        salary: "$205,500",
      },
      {
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh",
        age: 23,
        startDate: "2008/12/13",
        salary: "$103,600",
      },
      {
        name: "Jena Gaines",
        position: "Office Manager",
        office: "London",
        age: 30,
        startDate: "2008/12/19",
        salary: "$90,560",
      },
      {
        name: "Quinn Flynn",
        position: "Support Lead",
        office: "Edinburgh",
        age: 22,
        startDate: "2013/03/03",
        salary: "$342,000",
      },
      {
        name: "Charde Marshall",
        position: "Regional Director",
        office: "San Francisco",
        age: 36,
        startDate: "2008/10/16",
        salary: "$470,600",
      },
      {
        name: "Haley Kennedy",
        position: "Senior Marketing Designer",
        office: "London",
        age: 43,
        startDate: "2012/12/18",
        salary: "$313,500",
      },
      {
        name: "Tatyana Fitzpatrick",
        position: "Regional Director",
        office: "London",
        age: 19,
        startDate: "2010/03/17",
        salary: "$385,750",
      },
      {
        name: "Michael Silva",
        position: "Marketing Designer",
        office: "London",
        age: 66,
        startDate: "2012/11/27",
        salary: "$198,500",
      },
      {
        name: "Paul Byrd",
        position: "Chief Financial Officer (CFO)",
        office: "New York",
        age: 64,
        startDate: "2010/06/09",
        salary: "$725,000",
      },
      {
        name: "Gloria Little",
        position: "Systems Administrator",
        office: "New York",
        age: 59,
        startDate: "2009/04/10",
        salary: "$237,500",
      },
      {
        name: "Bradley Greer",
        position: "Software Engineer",
        office: "London",
        age: 41,
        startDate: "2012/10/13",
        salary: "$132,000",
      },
      {
        name: "Dai Rios",
        position: "Personnel Lead",
        office: "Edinburgh",
        age: 35,
        startDate: "2012/09/26",
        salary: "$217,500",
      },
      {
        name: "Jenette Caldwell",
        position: "Development Lead",
        office: "New York",
        age: 30,
        startDate: "2011/09/03",
        salary: "$345,000",
      },
      {
        name: "Yuri Berry",
        position: "Chief Marketing Officer (CMO)",
        office: "New York",
        age: 40,
        startDate: "2009/06/25",
        salary: "$675,000",
      },
      {
        name: "Caesar Vance",
        position: "Pre-Sales Support",
        office: "New York",
        age: 21,
        startDate: "2011/12/12",
        salary: "$106,450",
      },
      {
        name: "Doris Wilder",
        position: "Sales Assistant",
        office: "Sydney",
        age: 23,
        startDate: "2010/09/20",
        salary: "$85,600",
      },
      {
        name: "Angelica Ramos",
        position: "Chief Executive Officer (CEO)",
        office: "London",
        age: 47,
        startDate: "2009/10/09",
        salary: "$1,200,000",
      },
      {
        name: "Gavin Joyce",
        position: "Developer",
        office: "Edinburgh",
        age: 42,
        startDate: "2010/12/22",
        salary: "$92,575",
      },
      {
        name: "Jennifer Chang",
        position: "Regional Director",
        office: "Singapore",
        age: 28,
        startDate: "2010/11/14",
        salary: "$357,650",
      },
      {
        name: "Brenden Wagner",
        position: "Software Engineer",
        office: "San Francisco",
        age: 28,
        startDate: "2011/06/07",
        salary: "$206,850",
      },
      {
        name: "Fiona Green",
        position: "Chief Operating Officer (COO)",
        office: "San Francisco",
        age: 48,
        startDate: "2010/03/11",
        salary: "$850,000",
      },
      {
        name: "Shou Itou",
        position: "Regional Marketing",
        office: "Tokyo",
        age: 20,
        startDate: "2011/08/14",
        salary: "$163,000",
      },
      {
        name: "Michelle House",
        position: "Integration Specialist",
        office: "Sydney",
        age: 37,
        startDate: "2011/06/02",
        salary: "$95,400",
      },
      {
        name: "Suki Burks",
        position: "Developer",
        office: "London",
        age: 53,
        startDate: "2009/10/22",
        salary: "$114,500",
      },
      {
        name: "Prescott Bartlett",
        position: "Technical Author",
        office: "London",
        age: 27,
        startDate: "2011/05/07",
        salary: "$145,000",
      },
      {
        name: "Gavin Cortez",
        position: "Team Leader",
        office: "San Francisco",
        age: 22,
        startDate: "2008/10/26",
        salary: "$235,500",
      },
      {
        name: "Martena Mccray",
        position: "Post-Sales support",
        office: "Edinburgh",
        age: 46,
        startDate: "2011/03/09",
        salary: "$324,050",
      },
      {
        name: "Unity Butler",
        position: "Marketing Designer",
        office: "San Francisco",
        age: 47,
        startDate: "2009/12/09",
        salary: "$85,675",
      },
    ],
    []
  );

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      { header: "Name", accessorKey: "name" },
      { header: "Position", accessorKey: "position" },
      { header: "Office", accessorKey: "office" },
      { header: "Age", accessorKey: "age" },
      { header: "Start date", accessorKey: "startDate" },
      { header: "Salary", accessorKey: "salary" },
    ],
    []
  );

  return (
    <div className="main-content">
      <div className="page-content">
        {/* start page title */}
        <div className="page-title-box">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="page-title">
                  <h4>Dashboard</h4>
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">Morvin</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
              <div className="col-sm-6 text-sm-end mt-3 mt-sm-0">

                <Link to="/dashboard/user-create">
                <button  className="btn btn-warning me-2">
                  Nouveau
                </button>
                </Link>
                <Link to="/dashboard">
                <button  className="btn btn-danger me-2">
                  Lister
                </button>
                </Link>
                <button  className="btn btn-success">
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end page title */}

        <div className="container-fluid">
          <div className="page-content-wrapper">
            {/* Contenu dynamique */}

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <DataTable
                      data={data}
                      columns={columns}
                      title="Default Datatable"
                      description="Tableau avec recherche, pagination et choix du nombre de lignes."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page-content */}
    </div>
  );
}

export default UserList;
