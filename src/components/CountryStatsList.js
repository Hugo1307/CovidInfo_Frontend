import useAxios from "axios-hooks";
import StatPanel from "./StatPanel";
import splitIntoChunks from "../utils/AppArrayUtils";
import {Col, Row} from "react-bootstrap";

const CountryStatsList = (props) => {

    const [{data, loading, error}] = useAxios({
        url: 'http://localhost:8080/api/country',
        params: {"countryName": props.countryName, "countryCode": props.countryCode}
    });

    let panelsList = [];

    if (!loading && !error) {

        panelsList.push(<StatPanel
            statName={"Population"}
            statValue={data.population}
        />);

        panelsList.push(<StatPanel
            statName={"Total Cases"}
            statValue={data.totalCases}
        />);

        panelsList.push(<StatPanel
            statName={"New Cases"}
            statValue={data.newCases}
        />);

        panelsList.push(<StatPanel
            statName={"Total Deaths"}
            statValue={data.totalDeaths}
        />);

        panelsList.push(<StatPanel
            statName={"New Deaths"}
            statValue={data.newDeaths}
        />);

        panelsList.push(<StatPanel
            statName={"Total Recovered"}
            statValue={data.totalRecovered}
        />);

        panelsList.push(<StatPanel
            statName={"New Recovered"}
            statValue={data.newRecovered}
        />);

        panelsList.push(<StatPanel
            statName={"Active Cases"}
            statValue={data.activeCases}
        />);

        panelsList.push(<StatPanel
            statName={"Infection Risk"}
            statValue={data.infectionRisk}
        />);

        panelsList.push(<StatPanel
            statName={"Case Fatality Rate"}
            statValue={data.caseFatalityRate}
        />);

        panelsList.push(<StatPanel
            statName={"Total Tests"}
            statValue={data.totalTests}
        />);

        panelsList.push(<StatPanel
            statName={"Deaths Per Million"}
            statValue={data.deathsPerMillion}
        />);

        panelsList.push(<StatPanel
            statName={"Tests Per Million"}
            statValue={data.testsPerMillion}
        />);

        panelsList.push(<StatPanel
            statName={"Cases Per Million"}
            statValue={data.casesPerMillion}
        />);

    } else if (loading) {

        panelsList.push(<StatPanel
            statName={"Loading..."}
            statValue={null}
        />);

    } else {

        panelsList.push(<StatPanel
            statName={"Unable to fetch data"}
            statValue={null}
        />);

    }

    let splitPanelsLists = splitIntoChunks(panelsList, 4);

    return (
        <Row style={{maxHeight: '60vh', overflow: 'hidden'}}>
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

export default CountryStatsList;