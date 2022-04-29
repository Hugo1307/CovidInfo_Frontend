const ApiDropdown = (props) => (

    <select className="form-control">
        <option onClick={props.onUpdate.bind(this, "VAC_COVID")}>Vac-Covid Api</option>
        <option onClick={props.onUpdate.bind(this, "COVID_19")}>Covid-19 Api</option>
    </select>

);

export default ApiDropdown;
