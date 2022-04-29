import {Col, Container, Row} from "react-bootstrap";
import PanelsList from "./PanelsList";
import useAxios from "axios-hooks";
import {BsArrowClockwise} from "react-icons/bs";

const CacheDetailsMain = () => {

    const [{data, loading, error}, re_fetch] = useAxios({
        url: 'http://localhost:8080/api/cache/details',
    });

    let convertedData = []

    if (!loading && !error) {

        for (let key in data)
            if (data.hasOwnProperty(key))
                convertedData.push({title: key, value: data[key]});
    } else if (loading) {
        convertedData.push({title: "Loading...", value: "Please wait"});
    } else {
        convertedData.push({title: "Unable to fetch data", value: "No data..."});
    }

    return (
        <Container className="mt-5">
            <Row>
                <Row>
                    <Col className="col-2">
                        <h4>Cache Details</h4>
                    </Col>
                    <Col>
                        <BsArrowClockwise size={28} onClick={re_fetch} />
                    </Col>
                </Row>
                <div className="mt-4">
                    <PanelsList elements={convertedData} />
                </div>
            </Row>
        </Container>
    );

};

export default CacheDetailsMain;