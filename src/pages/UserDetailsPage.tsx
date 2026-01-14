import { Link } from "react-router-dom";

export function UserDetailsPage() {
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
                  <button className="btn btn-outline-white me-2">
                    Nouveau
                  </button>
                </Link>
                <Link to="/dashboard">
                  <button className="btn btn-outline-white me-2">Lister</button>
                </Link>
                <button
                    className="btn btn-outline-white mx-12"
                    data-bs-toggle="modal"
                    data-bs-target=".staticBackdrop"
                  >
                    Rechercher
                  </button>

                  <div
                    className="modal fade staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <form className="" action="#">
                          <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                              Rechercher
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="mb-3">
                              <input
                                className="form-control"
                                type="email"
                                id="username"
                                required
                                placeholder="Rechercher..."
                              />
                            </div>

                            <div className="mb-3 d-flex gap-3">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkName"
                                />
                                <label className="form-check-label" htmlFor="checkName">
                                  name
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkPosition"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkPosition"
                                >
                                  position
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkSalary"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkSalary"
                                >
                                  salary
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <div>
                              <button className="btn btn-outline" type="submit">
                                Rechercher
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/* end page title */}

            <div className="container-fluid">
            {" "}
            <div className="page-content-wrapper">
              {" "}
              <div className="page-content-wrapper mb-5 pb-3">
                {" "}
                <div className="row">
                  {" "}
                  <div className="col-lg-12">
                    {" "}
                    <div className="card">
                      {" "}
                      <form className="needs-validation">
                        {" "}
                        <h4 className="ps-4 pt-3 header-title">
                          {" "}
                          Details utilisateurs{" "}
                        </h4>{" "}
                        <hr className="mb-0" />{" "}
                        <div className="card-body">
                          {" "}
                          <div className="row gy-3 gx-3">
                            {" "}
                            <div className="col-lg-2">
                              {" "}
                              <div className="card my-0 shadow-none border">
                                {" "}
                                <div className="">
                                  {" "}
                                  <div className="row align-items-center">
                                    {" "}
                                    <div className="col">
                                      {" "}
                                      <h4 className="details-title">
                                        {" "}
                                        Name :{" "}
                                      </h4>{" "}
                                      <hr className="m-0 hr-dashed" />{" "}
                                      <p className="details-value my-0">
                                        Airi Satou
                                      </p>{" "}
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="col-lg-2">
                              {" "}
                              <div className="card my-0 shadow-none border">
                                {" "}
                                <div className="">
                                  {" "}
                                  <div className="row align-items-center">
                                    {" "}
                                    <div className="col">
                                      {" "}
                                      <h4 className="details-title">
                                        {" "}
                                        Postion :{" "}
                                      </h4>{" "}
                                      <hr className="m-0 hr-dashed" />{" "}
                                      <p className="details-value my-0">
                                        Accountant
                                      </p>{" "}
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="col-lg-2">
                              {" "}
                              <div className="card my-0 shadow-none border">
                                {" "}
                                <div className="">
                                  {" "}
                                  <div className="row align-items-center">
                                    {" "}
                                    <div className="col">
                                      {" "}
                                      <h4 className="details-title">
                                        {" "}
                                        Office :{" "}
                                      </h4>{" "}
                                      <hr className="m-0 hr-dashed" />{" "}
                                      <p className="details-value my-0">
                                        Tokyo
                                      </p>{" "}
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="col-lg-2">
                              {" "}
                              <div className="card my-0 shadow-none border">
                                {" "}
                                <div className="">
                                  {" "}
                                  <div className="row align-items-center">
                                    {" "}
                                    <div className="col">
                                      {" "}
                                      <h4 className="details-title">
                                        {" "}
                                        Age :{" "}
                                      </h4>{" "}
                                      <hr className="m-0 hr-dashed" />{" "}
                                      <p className="details-value my-0">33</p>{" "}
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="col-lg-2">
                              {" "}
                              <div className="card my-0 shadow-none border">
                                {" "}
                                <div className="">
                                  {" "}
                                  <div className="row align-items-center">
                                    {" "}
                                    <div className="col">
                                      {" "}
                                      <h4 className="details-title">
                                        {" "}
                                        Start date :{" "}
                                      </h4>{" "}
                                      <hr className="m-0 hr-dashed" />{" "}
                                      <p className="details-value my-0">
                                        $320,800
                                      </p>{" "}
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="col-lg-2">
                              {" "}
                              <div className="card my-0 shadow-none border">
                                {" "}
                                <div className="">
                                  {" "}
                                  <div className="row align-items-center">
                                    {" "}
                                    <div className="col">
                                      {" "}
                                      <h4 className="details-title">
                                        {" "}
                                        Salary :{" "}
                                      </h4>{" "}
                                      <hr className="m-0 hr-dashed" />{" "}
                                      <p className="details-value my-0">
                                        $162,700
                                      </p>{" "}
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <hr />{" "}
                        <div className="text-end pt-2 ">
                          {" "}
                          <ul className="nav nav-tabs ps-4" role="tablist">
                            {" "}
                            <li className="nav-item">
                              {" "}
                              <a
                                className="nav-link active"
                                data-bs-toggle="tab"
                                href="#home"
                                role="tab"
                              >
                                {" "}
                                <span className="d-block d-sm-none">
                                  <i className="fas fa-home"></i>
                                </span>{" "}
                                <span className="d-none d-sm-block">Home</span>{" "}
                              </a>{" "}
                            </li>{" "}
                            <li className="nav-item">
                              {" "}
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#profile"
                                role="tab"
                              >
                                {" "}
                                <span className="d-block d-sm-none">
                                  <i className="far fa-user"></i>
                                </span>{" "}
                                <span className="d-none d-sm-block">
                                  Profile
                                </span>{" "}
                              </a>{" "}
                            </li>{" "}
                            <li className="nav-item">
                              {" "}
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#messages"
                                role="tab"
                              >
                                {" "}
                                <span className="d-block d-sm-none">
                                  <i className="far fa-envelope"></i>
                                </span>{" "}
                                <span className="d-none d-sm-block">
                                  Messages
                                </span>{" "}
                              </a>{" "}
                            </li>{" "}
                            <li className="nav-item">
                              {" "}
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#settings"
                                role="tab"
                              >
                                {" "}
                                <span className="d-block d-sm-none">
                                  <i className="fas fa-cog"></i>
                                </span>{" "}
                                <span className="d-none d-sm-block">
                                  Settings
                                </span>{" "}
                              </a>{" "}
                            </li>{" "}
                          </ul>{" "}
                          <div className="tab-content p-3 text-muted">
                            {" "}
                            <div
                              className="tab-pane active"
                              id="home"
                              role="tabpanel"
                            >
                              {" "}
                              <p className="mb-0">
                                {" "}
                                Raw denim you probably haven't heard of them
                                jean shorts Austin. Nesciunt tofu stumptown
                                aliqua, retro synth master cleanse. Mustache
                                cliche tempor, williamsburg carles vegan
                                helvetica. Reprehenderit butcher retro keffiyeh
                                dreamcatcher synth. Cosby sweater eu banh mi,
                                qui irure terry richardson ex squid. Aliquip
                                placeat salvia cillum iphone. Seitan aliquip
                                quis cardigan american apparel, butcher
                                voluptate nisi qui.{" "}
                              </p>{" "}
                            </div>{" "}
                            <div
                              className="tab-pane"
                              id="profile"
                              role="tabpanel"
                            >
                              {" "}
                              <p className="mb-0">
                                {" "}
                                Food truck fixie locavore, accusamus mcsweeney's
                                marfa nulla single-origin coffee squid.
                                Exercitation +1 labore velit, blog sartorial PBR
                                leggings next level wes anderson artisan four
                                loko farm-to-table craft beer twee. Qui photo
                                booth letterpress, commodo enim craft beer
                                mlkshk aliquip jean shorts ullamco ad vinyl
                                cillum PBR. Homo nostrud organic, assumenda
                                labore aesthetic magna delectus.{" "}
                              </p>{" "}
                            </div>{" "}
                            <div
                              className="tab-pane"
                              id="messages"
                              role="tabpanel"
                            >
                              {" "}
                              <p className="mb-0">
                                {" "}
                                Etsy mixtape wayfarers, ethical wes anderson
                                tofu before they sold out mcsweeney's organic
                                lomo retro fanny pack lo-fi farm-to-table
                                readymade. Messenger bag gentrify pitchfork
                                tattooed craft beer, iphone skateboard locavore
                                carles etsy salvia banksy hoodie helvetica. DIY
                                synth PBR banksy irony. Leggings gentrify squid
                                8-bit cred pitchfork. Williamsburg banh mi
                                whatever gluten yr.{" "}
                              </p>{" "}
                            </div>{" "}
                            <div
                              className="tab-pane"
                              id="settings"
                              role="tabpanel"
                            >
                              {" "}
                              <p className="mb-0">
                                {" "}
                                Trust fund seitan letterpress, keytar raw denim
                                keffiyeh etsy art party before they sold out
                                master cleanse gluten-free squid scenester
                                freegan cosby sweater. Fanny pack portland
                                seitan DIY, art party locavore wolf cliche high
                                life echo park Austin. Cred vinyl keffiyeh DIY
                                salvia PBR, banh mi before they sold out
                                farm-to-table VHS.{" "}
                              </p>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </form>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {/* end row */}{" "}
            </div>{" "}
          </div>{" "}
      </div>
      {/* End Page-content */}
    </div>
  );
}
