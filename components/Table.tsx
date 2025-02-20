import React from 'react'

function Table() {
  return (
    <>
      <nav
        id="orders-table-tab"
        className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4"
      >
        <a
          className="flex-sm-fill text-sm-center nav-link active"
          id="orders-all-tab"
          data-bs-toggle="tab"
          href="#orders-all"
          role="tab"
          aria-controls="orders-all"
          aria-selected="true"
        >
          All
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          id="orders-paid-tab"
          data-bs-toggle="tab"
          href="#orders-paid"
          role="tab"
          aria-controls="orders-paid"
          aria-selected="false"
        >
          Paid
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          id="orders-pending-tab"
          data-bs-toggle="tab"
          href="#orders-pending"
          role="tab"
          aria-controls="orders-pending"
          aria-selected="false"
        >
          Pending
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          id="orders-cancelled-tab"
          data-bs-toggle="tab"
          href="#orders-cancelled"
          role="tab"
          aria-controls="orders-cancelled"
          aria-selected="false"
        >
          Cancelled
        </a>
      </nav>

      <div className="tab-content" id="orders-table-tab-content">
        <div
          className="tab-pane fade show active"
          id="orders-all"
          role="tabpanel"
          aria-labelledby="orders-all-tab"
        >
          <div className="app-card app-card-orders-table shadow-sm mb-5">
            <div className="app-card-body">
              <div className="table-responsive">
                <table className="table app-table-hover mb-0 text-left">
                  <thead>
                    <tr>
                      <th className="cell">Order</th>
                      <th className="cell">Product</th>
                      <th className="cell">Customer</th>
                      <th className="cell">Date</th>
                      <th className="cell">Status</th>
                      <th className="cell">Total</th>
                      <th className="cell"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cell">#15346</td>
                      <td className="cell">
                        <span className="truncate">
                          Lorem ipsum dolor sit amet eget volutpat erat
                        </span>
                      </td>
                      <td className="cell">John Sanders</td>
                      <td className="cell">
                        <span>17 Oct</span>
                        <span className="note">2:16 PM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td className="cell">$259.35</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="cell">#15345</td>
                      <td className="cell">
                        <span className="truncate">
                          Consectetur adipiscing elit
                        </span>
                      </td>
                      <td className="cell">Dylan Ambrose</td>
                      <td className="cell">
                        <span className="cell-data">16 Oct</span>
                        <span className="note">03:16 AM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-warning">Pending</span>
                      </td>
                      <td className="cell">$96.20</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="cell">#15344</td>
                      <td className="cell">
                        <span className="truncate">
                          Pellentesque diam imperdiet
                        </span>
                      </td>
                      <td className="cell">Teresa Holland</td>
                      <td className="cell">
                        <span className="cell-data">16 Oct</span>
                        <span className="note">01:16 AM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td className="cell">$123.00</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="cell">#15343</td>
                      <td className="cell">
                        <span className="truncate">
                          Vestibulum a accumsan lectus sed mollis ipsum
                        </span>
                      </td>
                      <td className="cell">Jayden Massey</td>
                      <td className="cell">
                        <span className="cell-data">15 Oct</span>
                        <span className="note">8:07 PM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td className="cell">$199.00</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="cell">#15342</td>
                      <td className="cell">
                        <span className="truncate">Justo feugiat neque</span>
                      </td>
                      <td className="cell">Reina Brooks</td>
                      <td className="cell">
                        <span className="cell-data">12 Oct</span>
                        <span className="note">04:23 PM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-danger">Cancelled</span>
                      </td>
                      <td className="cell">$59.00</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="cell">#15341</td>
                      <td className="cell">
                        <span className="truncate">
                          Morbi vulputate lacinia neque et sollicitudin
                        </span>
                      </td>
                      <td className="cell">Raymond Atkins</td>
                      <td className="cell">
                        <span className="cell-data">11 Oct</span>
                        <span className="note">11:18 AM</span>
                      </td>
                      <td className="cell">
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td className="cell">$678.26</td>
                      <td className="cell">
                        <a className="btn-sm app-btn-secondary" href="#">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*<!--//table-responsive-->*/}
            </div>
            {/*<!--//app-card-body-->*/}
          </div>
          {/*<!--//app-card-->*/}
        </div>
      </div>
    </>
  )
}

export default Table
