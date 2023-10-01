


function FeedbackOptions ({options, onLeaveFeedback}){
    return(
        <div>
            {options.map(option => (
                <button type='button' key={option} onClick={() => onLeaveFeedback(option)}>
                    {capitalize(option)}
                </button>
            ))}
        </div>
    )
}

export default FeedbackOptions;

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);