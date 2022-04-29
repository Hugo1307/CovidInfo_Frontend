import CountryDropdown from "./CountryDropdown";
import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import useAxios from "axios-hooks";
import PanelsList from "./PanelsList";
import ApiDropdown from "./ApiDropdown";

const CountryStatsMain = () => {

    const [country, setCountry] = useState({name: "Afghanistan", code: "afg"});
    const [api, setApi] = useState("VAC_COVID");

    const [{data, loading, error}] = useAxios({
        url: 'http://localhost:8080/api/country',
        params: {"countryName": country.name, "countryCode": country.code, "api": api}
    });

    const onUpdate = (item) => setCountry(item);

    const onApiChanged = (api) => setApi(api);

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
                    <Col className="col-9">
                        <h4>Country Statistics</h4>
                    </Col>
                    <Col className="mx-4">
                        <Row>
                            <h6 className="p-0">Source API:</h6>
                        </Row>
                        <Row>
                            <ApiDropdown onUpdate={onApiChanged}/>
                        </Row>
                    </Col>
                </Row>
                <div className="mt-4">
                    <div className="mb-3">
                        <CountryDropdown onUpdate={onUpdate} />
                    </div>
                    <PanelsList elements={convertedData} />
                </div>
            </Row>
        </Container>

    );

}

export default CountryStatsMain;