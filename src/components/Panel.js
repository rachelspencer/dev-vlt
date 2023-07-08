import './Panel.css';

function Panel({
    children, 
    className, 
    ...rest}) {

    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default Panel;