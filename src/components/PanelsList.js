import splitIntoChunks from "../utils/AppArrayUtils";
import {Col, Row} from "react-bootstrap";
import StatPanel from "./StatPanel";

const PanelsList = (props) => {

    let list = props.elements;

    if (list === null || list === undefined) {
        return (
            <Row style={{maxHeight: '60vh', overflow: 'hidden'}}>
                <Col className="mt-4 mx-2">
                    <StatPanel
                        statName={"No Data"}
                        statValue={"No data found..."}
                    />
                </Col>
            </Row>
        );
    }

    let panelsList = [];

    for (let listIdx in list) {
        panelsList.push(<StatPanel
            statName={list[listIdx].title.replace(/([A-Z])/g, ' $1')}
            statValue={list[listIdx].value}
        />);
    }

    let splitPanelsLists = splitIntoChunks(panelsList, 4);

    return (
        <Row style={{maxHeight: '60vh', overflow: 'auto'}}>
            <Col className="mt-4 mx-2">
                {splitPanelsLists[0]}
            </Col>
            <Col className="mt-4 mx-2">
                {splitPanelsLists[1]}
            </Col>
            <Col className="mt-4 mx-2">
                {splitPanelsLists[2]}
            </Col>
            <Col className="mt-4 mx-2">
                {splitPanelsLists[3]}
            </Col>
        </Row>

    );


};

export default PanelsList;