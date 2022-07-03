import { PracticesDetails } from "../Json";
import PracticesItems from "./PracticesItems";


function Practices() {
  console.log(PracticesDetails);
  return (


    <div className="practices-container">
        <PracticesItems PracticesDetails = {PracticesDetails[0]} />
        <PracticesItems PracticesDetails = {PracticesDetails[1]} />
        <PracticesItems PracticesDetails = {PracticesDetails[2]} />
        <PracticesItems PracticesDetails = {PracticesDetails[3]} />
        <PracticesItems PracticesDetails = {PracticesDetails[4]} />
        <PracticesItems PracticesDetails = {PracticesDetails[5]} />
        <PracticesItems PracticesDetails = {PracticesDetails[6]} />
    </div>
  );
}

export default Practices;
