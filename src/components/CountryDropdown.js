import useAxios from "axios-hooks";

const CountryDropdown = (props) => {

    const [{data, loading, error}] = useAxios({
        url: 'http://localhost:8080/api/countries'
    });

    let optionsList = [];

    if (!loading && !error) {
        data.map((item) => optionsList.push(<option value={item.name.toString() + ":" + item.code.toString()}>{item.name}</option>));
    }

    return (
        <select className="form-control" onChange={props.onUpdate.bind(this)}>
            {optionsList}
        </select>
    );

};

export default CountryDropdown;