import './Overview.css'

export default function Overview(props) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    return <div className='overview'>
        <div className='schedule'>
            <span className='title'>Estimate Harvest Schedule {date}</span>
            
        </div>
    </div>;
}
