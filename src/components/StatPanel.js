import {Card, Col, Row} from "react-bootstrap";

const StatPanel = (props) => (

    <Row className="mb-4">
        <Card className="border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <Row className="no-gutters align-items-center">
                    <Col className="mr-2">
                        <div className="text-xs stat-panel-title text-uppercase fw-bold mb-1">
                            {props.statName}
                        </div>
                        <div className="h5 mb-0 text-gray-800 fw-normal">{props.statValue}</div>
                    </Col>
                    <Col className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </Col>
                </Row>
            </div>
        </Card>
    </Row>
);

export default StatPanel;