import indicator from '../indicator.png';

const Loading = () => {
    return(
        <div className="loadingCell">
            <span>
                <img alt="indicator" src={indicator} className="indicator"/>Loading...
            </span>
        </div>
    )
}

export default Loading;