const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item list-group-item-action">
            <span>{label}: </span>
            <span>{item[field]}</span>
        </li>
    );

}

export default Record