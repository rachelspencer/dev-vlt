import './Panel.css';

function Panel({
    children, 
    className, 
    ...rest}) {

    return (
        <div className='panel'>
            Panel
        </div>
    )
};

export default Panel;