import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className="dlabnav">
            <div className="dlabnav-scroll">
                <ul className="metismenu" id="menu">
                    <li className="nav-label first">Main Menu</li>
                    <li><Link className="has-arrow" to="" >
                        <i className="la la-home"></i>
                        <span className="nav-text">Dashboard</span>
                    </Link>
                        <ul >
                            <li><Link to="index-2.html">Dashboard 1</Link></li>
                            <li><Link to="index-3.html">Dashboard 2</Link></li>
                            <li><Link to="index-4.html">Dashboard 3</Link></li>
                        </ul>
                    </li>
                    <li><Link className="ai-icon" to="event-management.html" >
                        <i className="la la-calendar"></i>
                        <span className="nav-text">Event Management</span>
                    </Link>
                    </li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-user"></i>
                        <span className="nav-text">Professors</span>
                    </Link>
                        <ul >
                            <li><Link to="all-professors.html">All Professor</Link></li>
                            <li><Link to="add-professor.html">Add Professor</Link></li>
                            <li><Link to="edit-professor.html">Edit Professor</Link></li>
                            <li><Link to="professor-profile.html">Professor Profile</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-users"></i>
                        <span className="nav-text">Students</span>
                    </Link>
                        <ul >
                            <li><Link to="all-students.html">All Students</Link></li>
                            <li><Link to="add-student.html">Add Students</Link></li>
                            <li><Link to="edit-student.html">Edit Students</Link></li>
                            <li><Link to="about-student.html">About Students</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-graduation-cap"></i>
                        <span className="nav-text">Courses</span>
                    </Link>
                        <ul >
                            <li><Link to="all-courses.html">All Courses</Link></li>
                            <li><Link to="add-courses.html">Add Courses</Link></li>
                            <li><Link to="edit-courses.html">Edit Courses</Link></li>
                            <li><Link to="about-courses.html">About Courses</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-book"></i>
                        <span className="nav-text">Library</span>
                    </Link>
                        <ul >
                            <li><Link to="all-library.html">All Library</Link></li>
                            <li><Link to="add-library.html">Add Library</Link></li>
                            <li><Link to="edit-library.html">Edit Library</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-building"></i>
                        <span className="nav-text">Departments</span>
                    </Link>
                        <ul >
                            <li><Link to="all-departments.html">All Departments</Link></li>
                            <li><Link to="add-departments.html">Add Departments</Link></li>
                            <li><Link to="edit-departments.html">Edit Departments</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-users"></i>
                        <span className="nav-text">Staff</span>
                    </Link>
                        <ul >
                            <li><Link to="all-staff.html">All Staff</Link></li>
                            <li><Link to="add-staff.html">Add Staff</Link></li>
                            <li><Link to="edit-staff.html">Edit Staff</Link></li>
                            <li><Link to="staff-profile.html">Staff Profile</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-gift"></i>
                        <span className="nav-text">Holiday</span>
                    </Link>
                        <ul >
                            <li><Link to="all-holiday.html">All Holiday</Link></li>
                            <li><Link to="add-holiday.html">Add Holiday</Link></li>
                            <li><Link to="edit-holiday.html">Edit Holiday</Link></li>
                            <li><Link to="holiday-calendar.html">Holiday Calendar</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-dollar"></i>
                        <span className="nav-text">Fees</span>
                    </Link>
                        <ul >
                            <li><Link to="fees-collection.html">Fees Collection</Link></li>
                            <li><Link to="add-fees.html">Add Fees</Link></li>
                            <li><Link to="fees-receipt.html">Fees Receipt</Link></li>
                        </ul>
                    </li>
                    <li className="nav-label">Apps</li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-users"></i>
                        <span className="nav-text">Apps</span>
                    </Link>
                        <ul >
                            <li><Link to="app-profile.html">Profile</Link></li>
                            <li><Link className="has-arrow" to="/" >Email</Link>
                                <ul >
                                    <li><Link to="email-compose.html">Compose</Link></li>
                                    <li><Link to="email-inbox.html">Inbox</Link></li>
                                    <li><Link to="email-read.html">Read</Link></li>
                                </ul>
                            </li>
                            <li><Link to="app-calender.html">Calendar</Link></li>
                            <li><Link className="has-arrow" to="/" >Shop</Link>
                                <ul >
                                    <li><Link to="ecom-product-grid.html">Product Grid</Link></li>
                                    <li><Link to="ecom-product-list.html">Product List</Link></li>
                                    <li><Link to="ecom-product-detail.html">Product Details</Link></li>
                                    <li><Link to="ecom-product-order.html">Order</Link></li>
                                    <li><Link to="ecom-checkout.html">Checkout</Link></li>
                                    <li><Link to="ecom-invoice.html">Invoice</Link></li>
                                    <li><Link to="ecom-customers.html">Customers</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow ai-icon" to="/" >
                        <i className="la la-signal"></i>
                        <span className="nav-text">Charts</span>
                    </Link>
                        <ul >
                            <li><Link to="chart-flot.html">Flot</Link></li>
                            <li><Link to="chart-morris.html">Morris</Link></li>
                            <li><Link to="chart-chartjs.html">Chartjs</Link></li>
                            <li><Link to="chart-chartist.html">Chartist</Link></li>
                            <li><Link to="chart-sparkline.html">Sparkline</Link></li>
                            <li><Link to="chart-peity.html">Peity</Link></li>
                        </ul>
                    </li>
                    <li className="nav-label">Components</li>
                    <li className="mega-menu mega-menu-xl"><Link className="has-arrow ai-icon" to="/" >
                        <i className="la la-globe"></i>
                        <span className="nav-text">Bootstrap</span>
                    </Link>
                        <ul >
                            <li><Link to="ui-accordion.html">Accordion</Link></li>
                            <li><Link to="ui-alert.html">Alert</Link></li>
                            <li><Link to="ui-badge.html">Badge</Link></li>
                            <li><Link to="ui-button.html">Button</Link></li>
                            <li><Link to="ui-modal.html">Modal</Link></li>
                            <li><Link to="ui-button-group.html">Button Group</Link></li>
                            <li><Link to="ui-list-group.html">List Group</Link></li>
                            <li><Link to="ui-media-object.html">Media Object</Link></li>
                            <li><Link to="ui-card.html">Cards</Link></li>
                            <li><Link to="ui-carousel.html">Carousel</Link></li>
                            <li><Link to="ui-dropdown.html">Dropdown</Link></li>
                            <li><Link to="ui-popover.html">Popover</Link></li>
                            <li><Link to="ui-progressbar.html">Progressbar</Link></li>
                            <li><Link to="ui-tab.html">Tab</Link></li>
                            <li><Link to="ui-typography.html">Typography</Link></li>
                            <li><Link to="ui-pagination.html">Pagination</Link></li>
                            <li><Link to="ui-grid.html">Grid</Link></li>
                        </ul>
                    </li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-plus-square-o"></i>
                        <span className="nav-text">Plugins</span>
                    </Link>
                        <ul >
                            <li><Link to="uc-select2.html">Select 2</Link></li>
                            <li><Link to="uc-nestable.html">Nestedable</Link></li>
                            <li><Link to="uc-noui-slider.html">Noui Slider</Link></li>
                            <li><Link to="uc-sweetalert.html">Sweet Alert</Link></li>
                            <li><Link to="uc-toastr.html">Toastr</Link></li>
                            <li><Link to="map-jqvmap.html">Jqv Map</Link></li>
                        </ul>
                    </li>
                    <li><Link to="widget-basic.html" >
                        <i className="la la-desktop"></i>
                        <span className="nav-text">Widget</span>
                    </Link></li>
                    <li className="nav-label">Forms</li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-file-text"></i>
                        <span className="nav-text">Forms</span>
                    </Link>
                        <ul >
                            <li><Link to="form-element.html">Form Elements</Link></li>
                            <li><Link to="form-wizard.html">Wizard</Link></li>
                            <li><Link to="form-editor-summernote.html">Summernote</Link></li>
                            <li><Link to="form-pickers.html">Pickers</Link></li>
                            <li><Link to="form-validation-jquery.html">Jquery Validate</Link></li>
                        </ul>
                    </li>
                    <li className="nav-label">Table</li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-table"></i>
                        <span className="nav-text">Table</span>
                    </Link>
                        <ul >
                            <li><Link to="table-bootstrap-basic.html">Bootstrap</Link></li>
                            <li><Link to="table-datatable-basic.html">Datatable</Link></li>
                        </ul>
                    </li>
                    <li className="nav-label">Extra</li>
                    <li><Link className="has-arrow" to="/" >
                        <i className="la la-th-list"></i>
                        <span className="nav-text">Pages</span>
                    </Link>
                        <ul >
                            <li><Link to="page-register.html">Register</Link></li>
                            <li><Link to="page-login.html">Login</Link></li>
                            <li><Link className="has-arrow" to="/" >Error</Link>
                                <ul >
                                    <li><Link to="page-error-400.html">Error 400</Link></li>
                                    <li><Link to="page-error-403.html">Error 403</Link></li>
                                    <li><Link to="page-error-404.html">Error 404</Link></li>
                                    <li><Link to="page-error-500.html">Error 500</Link></li>
                                    <li><Link to="page-error-503.html">Error 503</Link></li>
                                </ul>
                            </li>
                            <li><Link to="page-lock-screen.html">Lock Screen</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
