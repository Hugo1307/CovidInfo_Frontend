import useAxios from "axios-hooks";

const CountryHistoryDateDropdown = (props) => {

    let country = props.country;

    const [{data, loading, error}] = useAxios({
        url: 'http://localhost:8080/api/country/history',
        params: {"countryName": country.name, "countryCode": country.code}
    });

    let optionsList = [];

    if (!loading && !error) {
        optionsList.push(<option>Choose a date</option>);
        for (let objIdx in data) {
            if (data[objIdx].hasOwnProperty("date")) {
                let date = new Date(data[objIdx]["date"]);
                optionsList.push(<option onClick={props.onUpdate.bind(this, data[objIdx]["date"])}>{date.toDateString()}</option>);
            }
        }
    }

    return (
        <select className="form-control">
            {optionsList}
        </select>
    );

};

export default CountryHistoryDateDropdown;