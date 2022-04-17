import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
export const HomePage = () => {

    return <>
        <h1>Country-City all kind of Data</h1>
        <Link to="/addcountry"> <Button className="button" variant="contained" color="gray">
            Add Country
        </Button></Link>
        <Link to="/addcity">
            <Button className="button" variant="contained" color="gray">
                Add CIty
            </Button>
        </Link>





    </>
}