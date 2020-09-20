/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-7">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="6">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Col>
                        <Row>
                          <span className="h4 font-weight-bold text-uppercase text-muted mb-0">
                            RMS ID:
                          </span>
                          <span className="h4 font-weight-bold mb-0 ml-2">
                            3HPJKDLLK343478
                          </span>
                        </Row>
                        <Row>
                          <span className="h4 font-weight-bold text-uppercase text-muted mb-0">
                            Name:
                          </span>
                          <span className="h4 font-weight-bold mb-0 ml-2">
                            Nishad S Patil
                          </span>
                        </Row>
                        <Row>
                          <span className="h4 font-weight-bold text-uppercase text-muted mb-0">
                            address:
                          </span>
                          <span className="h4 font-weight-bold mb-0 ml-2 o-hidden">
                            Tilak Road, Municipal Park, Bhusawal-201279
                          </span>
                        </Row>
                        <Row>
                          <span className="h4 font-weight-bold text-uppercase text-muted mb-0">
                            Capacity:
                          </span>
                          <span className="h4 font-weight-bold mb-0 ml-2">
                            3HP
                          </span>
                        </Row>
                      </Col>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <Col>
                          <CardTitle
                            tag="h4"
                            className="text-uppercase text-primary font-weight-bold mb-4"
                          >
                            Pump Status
                          </CardTitle>
                          {/* Conditions to change the state */}
                          <Col>
                            {/* <span className="rounded-circle-m h4 ml-2 text-uppercase text-white font-weight-bold mb-0 bg-success pad-10">
                            on
                          </span> */}
                            <span className="rounded-circle-m h4 ml-2 text-uppercase text-white font-weight-bold mb-0 bg-danger pad-12">
                              off
                          </span>
                          </Col>
                        </Col>
                        <Row className="col-auto">
                          <div className=" bg-warning text-white rounded-circle shadow">
                            <img src={this.props.Image1} width={"115px"} height={"90px"} className="img" />
                          </div>
                        </Row>
                      </Row>
                      {/* <span className="h4 text-uppercase font-weight-bold mb-0 br-xxl bg-success p-2">
                        on
                      </span> */}
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <Col>
                          {/* Conditions to change the state */}
                          <Row className="align-items-center d-flex justify-content-center">
                            <span className="h4 text-uppercase text-dark font-weight-bold  mt-2 ">
                            CUMULATIVE LPD - 20000  
                          </span>
                          </Row>
                          <Row className="align-items-center d-flex justify-content-center">
                            <span className=" h4 text-uppercase text-dark font-weight-bold  mt-3">
                            current LPM - 20 
                          </span>
                          </Row>
                        </Col>
                      </Row>
                      {/* <span className="h4 text-uppercase font-weight-bold mb-0 br-xxl bg-success p-2">
                        on
                      </span> */}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
