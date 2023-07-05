const Row = ({leftComponent, rightComponent}) => {
    return (
        <div className="row mt-3 mb-5">
            <div className="col-sm-6">
                {leftComponent}
            </div>
            <div className="col-sm-6 mt-3">
                {rightComponent}
            </div>
        </div>
    );

}

export default Row;