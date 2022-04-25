import useAxios from "axios-hooks";

const CountryDropdown = (props) => {

    const [{data, loading, error}] = useAxios({
        url: 'http://localhost:8080/api/countries'
    });

    let optionsList = [];

    console.log(props.onUpdate)

    if (!loading && !error) {
        data.map((item) => optionsList.push(<option onClick={props.onUpdate.bind(this, item)}>{item.name}</option>));
    }

    return (
        <select className="form-control">
            {optionsList}
        </select>
    );

};

export default CountryDropdown;