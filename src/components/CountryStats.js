import CountryDropdown from "./CountryDropdown";
import CountryStatsList from "./CountryStatsList";
import {useState} from "react";

const CountryStats = () => {

    const [country, setCountry] = useState({});

    const onUpdate = (item) => setCountry(item);

    return (
        <div className="mt-4">
            <CountryDropdown onUpdate={onUpdate} />
            <CountryStatsList countryName={country.name} countryCode={country.code} />
        </div>
    );

};

export default CountryStats;