import {Container, Row} from "react-bootstrap";
import WorldStatsList from "./WorldStatsList";

const WorldStatsMain = () => (
    <Container className="mt-5">
        <Row>
            <h4>World Statistics</h4>
            <WorldStatsList maxHeight={"80"}/>
        </Row>
    </Container>
);

export default WorldStatsMain;