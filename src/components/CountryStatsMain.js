import CountryDropdown from "./CountryDropdown";
import CountryStatsList from "./CountryStatsList";
import {useState} from "react";
import {Container, Row} from "react-bootstrap";
import WorldStatsList from "./WorldStatsList";

const CountryStatsMain = () => {

    const [country, setCountry] = useState({});

    const onUpdate = (item) => setCountry(item);

    return (
        <Container className="mt-5">
            <Row>
                <h4>Country Statistics</h4>
                <div className="mt-4">
                    <CountryDropdown onUpdate={onUpdate} />
                    <CountryStatsList countryName={country.name} countryCode={country.code} />
                </div>
            </Row>
        </Container>

    );

}

export default CountryStatsMain;