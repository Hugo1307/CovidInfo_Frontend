import useAxios from "axios-hooks";
import {useState} from "react";
import CountryHistoryDateDropdown from "./CountryHistoryDateDropdown";
import {Col, Container, Row} from "react-bootstrap";
import PanelsList from "./PanelsList";
import CountryDropdown from "./CountryDropdown";

const CountryHistoryMain = () => {

    const [country, setCountry] = useState({name: "Afghanistan", code: "afg"});
    const [date, setDate] = useState(null);

    let requestParams;

    if (date === null)
        requestParams = {"countryName": country.name, "countryCode": country.code};
    else
        requestParams = {"countryName": country.name, "countryCode": country.code, dateFilter: date};

    const [{data, loading, error}] = useAxios({
        url: 'http://localhost:8080/api/country/history',
        params: requestParams
    });

    const onCountryChanged = (item) => {
        let itemParsed = item.target.value.split(":");
        setCountry({name: itemParsed[0], code: itemParsed[1]});
        setDate(null);
    }

    const onDateChanged = (dateObj) => setDate(dateObj);

    let convertedData = []

    if (!loading && !error && date !== null) {
        for (let objIdx in data) {
            for (let key in data[objIdx]) {
                if (data[objIdx].hasOwnProperty(key)) {
                    convertedData.push({title: key, value: data[objIdx][key]});
                }
            }
        }
    } else if (loading) {
        convertedData.push({title: "Loading...", value: "Please wait"});
    } else {
        convertedData.push({title: "Unable to fetch data", value: "No data..."});
    }

    return (
        <Container className="mt-5">
            <Row>
                <h4>Country History Statistics</h4>
                <div className="mt-4">
                    <Container>
                        <Row className="mb-3">
                            <Col>
                                <Row>
                                    <h6 className="p-0">Country:</h6>
                                </Row>
                                <Row>
                                    <CountryDropdown onUpdate={onCountryChanged}/>
                                </Row>
                            </Col>
                            <Col className="offset-1">
                                <Row>
                                    <h6 className="p-0">Date:</h6>
                                </Row>
                                <Row>
                                    <CountryHistoryDateDropdown onUpdate={onDateChanged} country={country} />
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <PanelsList elements={convertedData} />
                </div>
            </Row>
        </Container>
    );

}

export default CountryHistoryMain;