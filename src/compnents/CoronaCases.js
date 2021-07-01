import React , {useEffect ,useState} from 'react'
import  './CoronaCases.css'
export const CoronaCases = () => {

    const [data, setdata] = useState([]);

    const getCovidData =async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        // console.log(actualData.statewise);
        setdata(actualData.statewise);


    }

    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                   <h1 className="mt-5 text-center"><span className="font-weight-bold">INDIA </span> COVID-19 DASHBOARD</h1>   
                </div>
                <div className="table-responsive">
                    <table className="table table-hover"> 
                        <thead className="thead-dark">
                            <tr>
                                <th>STATE</th>
                                <th>CONFIRMED</th>
                                <th>RECOVERED</th>
                                <th>DEATH</th>
                                <th>ACTIVE</th>
                                <th>UPDATED</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curData) => {
                                    return(
                                        <tr className="datatr">
                                            <th>{curData.state}</th>
                                            <td>{curData.confirmed}</td>
                                            <td>{curData.recovered}</td>
                                            <td>{curData.deaths}</td>
                                            <td>{curData.active}</td>
                                            <td>{curData.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>

            </div>
          
        </>
    )
}
