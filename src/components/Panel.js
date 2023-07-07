import './Panel.css';

function Panel({
    children, 
    className, 
    ...rest}) {

    return (
        <div className='panel'>
            {children}
        </div>
    )
};

export default Panel;