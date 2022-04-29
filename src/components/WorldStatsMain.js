import {Container, Row} from "react-bootstrap";
import useAxios from "axios-hooks";
import PanelsList from "./PanelsList";

const WorldStatsMain = () => {

    const [{data, loading, error}] = useAxios(
        'http://localhost:8080/api/world'
    );

    let convertedData = [];

    if (!loading && !error) {
        for (let key in data)
            if (data.hasOwnProperty(key))
                convertedData.push({title: key, value: data[key]});
    } else if (loading) {
        convertedData.push({title: "Loading...", value: "Please wait"});
    } else {
        convertedData.push({title: "Unable to fetch data", value: "No data..."});
    }

    return (<Container className="mt-5">
        <Row>
            <h4>World Statistics</h4>
            <PanelsList elements={convertedData}/>
        </Row>
    </Container>);
};

export default WorldStatsMain;